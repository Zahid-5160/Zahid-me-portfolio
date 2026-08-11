import { useEffect, useRef } from 'react'
/* Named imports rather than `import * as THREE` so the build can drop the
   large parts of Three.js this scene never touches. */
import {
  AdditiveBlending,
  BufferGeometry,
  Clock,
  Color,
  Float32BufferAttribute,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three'

/* ============================================================================
   The animated 3D layer behind the hero.

   A wide grid of small glowing points, drifting in a slow wave that runs away
   from the viewer. It is deliberately quiet — it should read as depth and
   movement behind the text, never as something competing with it.

   It also behaves itself:
     • stops completely when the tab is hidden or it scrolls out of view
     • renders a single still frame if the visitor prefers reduced motion
     • caps pixel density so high-DPI laptops do not melt
     • thins out the grid on small screens
     • disposes of everything on unmount (no memory leaks)
   ========================================================================== */

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uSize;

  attribute float aScale;

  varying float vFade;

  void main() {
    vec3 pos = position;

    // Three overlapping waves so the motion never looks like it repeats
    float wave =
        sin(pos.x * 0.34 + uTime * 0.52) * 0.62
      + sin(pos.z * 0.27 - uTime * 0.41) * 0.50
      + sin((pos.x + pos.z) * 0.15 + uTime * 0.28) * 0.40;

    pos.y += wave;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Points shrink with distance, like real perspective
    gl_PointSize = uSize * aScale * (16.0 / -mvPosition.z);

    // Fade out towards the horizon, and brighten the crests of the wave
    float depthFade = smoothstep(96.0, 10.0, -mvPosition.z);
    vFade = depthFade * (0.42 + wave * 0.20);
  }
`

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uColor;

  varying float vFade;

  void main() {
    // Draw each point as a soft round dot instead of a hard square
    vec2 offset = gl_PointCoord - vec2(0.5);
    float dist = dot(offset, offset);
    if (dist > 0.25) discard;

    float alpha = smoothstep(0.25, 0.0, dist) * clamp(vFade, 0.0, 1.0);
    gl_FragColor = vec4(uColor, alpha);
  }
`

export default function SceneBackground({ className, color = '#c9ccd2' }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    /* --- Renderer ------------------------------------------------------- */

    let renderer
    try {
      renderer = new WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      })
    } catch {
      // No WebGL on this device — the hero simply shows the photograph.
      return
    }

    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
    renderer.domElement.setAttribute('aria-hidden', 'true')
    mount.appendChild(renderer.domElement)

    /* --- Scene and camera ------------------------------------------------ */

    const scene = new Scene()
    const camera = new PerspectiveCamera(56, 1, 0.1, 200)
    camera.position.set(0, 6.5, 20)
    camera.lookAt(0, 0, -22)

    /* --- The point grid -------------------------------------------------- */

    const isSmallScreen = window.innerWidth < 760
    const spacing = isSmallScreen ? 1.55 : 1.15
    const halfWidth = 62
    const depthNear = 12
    const depthFar = -78

    const positions = []
    const scales = []

    for (let x = -halfWidth; x <= halfWidth; x += spacing) {
      for (let z = depthFar; z <= depthNear; z += spacing) {
        positions.push(x, 0, z)
        // A little size variation stops the grid looking mechanical
        scales.push(0.55 + Math.random() * 0.85)
      }
    }

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
    geometry.setAttribute('aScale', new Float32BufferAttribute(scales, 1))

    const material = new ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: isSmallScreen ? 2.1 : 2.6 },
        uColor: { value: new Color(color) },
      },
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
    })

    const points = new Points(geometry, material)
    scene.add(points)

    /* --- Sizing ---------------------------------------------------------- */

    const resize = () => {
      const { clientWidth, clientHeight } = mount
      if (!clientWidth || !clientHeight) return
      renderer.setSize(clientWidth, clientHeight, false)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)

    /* --- Gentle parallax following the pointer --------------------------- */

    const pointer = { x: 0, y: 0 }
    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1
    }

    if (!prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
    }

    /* --- Animation loop -------------------------------------------------- */

    const clock = new Clock()
    let frameId = null
    let onScreen = true

    const renderFrame = () => {
      material.uniforms.uTime.value = clock.getElapsedTime()

      // Ease the camera towards the pointer rather than snapping to it
      camera.position.x += (pointer.x * 2.6 - camera.position.x) * 0.03
      camera.position.y += (6.5 - pointer.y * 1.4 - camera.position.y) * 0.03
      camera.lookAt(0, 0, -22)

      renderer.render(scene, camera)
    }

    const loop = () => {
      frameId = requestAnimationFrame(loop)
      renderFrame()
    }

    const start = () => {
      if (frameId === null && onScreen && !document.hidden) {
        clock.start()
        loop()
      }
    }

    const stop = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId)
        frameId = null
      }
    }

    if (prefersReducedMotion) {
      // One still frame — the depth is there, the motion is not.
      renderFrame()
    } else {
      start()
    }

    /* --- Pause when off-screen or in a background tab -------------------- */

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        if (prefersReducedMotion) return
        if (onScreen) start()
        else stop()
      },
      { threshold: 0 },
    )
    intersectionObserver.observe(mount)

    const onVisibilityChange = () => {
      if (prefersReducedMotion) return
      if (document.hidden) stop()
      else start()
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    /* --- Clean up everything on unmount ---------------------------------- */

    return () => {
      stop()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('pointermove', onPointerMove)

      geometry.dispose()
      material.dispose()
      renderer.dispose()

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [color])

  return <div ref={mountRef} className={className} aria-hidden="true" />
}
