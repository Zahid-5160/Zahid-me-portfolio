HOW TO ADD YOUR PHOTO
=====================

1. Create a folder here called "source" if it does not already exist:

       public/images/profile/source/

2. Copy your photo into that folder. Any name is fine.
   Accepted types: .jpg  .jpeg  .png  .webp

   Use the largest, sharpest original you have. A photo straight from a
   phone camera is ideal. Do not use a screenshot or a WhatsApp copy —
   those are already compressed and cannot be improved.

3. In a terminal, from the main project folder, run:

       npm run images

4. That creates:

       public/images/profile/zahid.jpg
       public/images/profile/zahid.webp

   The website picks these up automatically. Refresh the page to see it.


WHAT THE SCRIPT DOES TO YOUR PHOTO
----------------------------------
- Turns it the right way up if the camera recorded a rotation
- Resizes it to 1400px wide using a high-quality filter
- Applies a measured sharpen to restore crispness
- Saves it in two modern formats at high quality

A note worth knowing: enlarging a photo cannot add detail that the camera
never captured. If your original is small and blurry, the result will be a
clean, sharp-looking version of a small blurry photo — not a new one. The
better the original, the better the result.


WHICH PHOTO TO PICK
-------------------
The portrait is shown as a tall rectangle (4:5). Choose a photo where:
- your face is in the upper half
- there is a bit of space around you, not cropped tight
- the background is not too busy

If your face sits too high or too low in the frame, open
src/styles/pages.css, find ".portrait__img", and change
"object-position: center 22%" — a smaller percentage moves the photo down,
a larger one moves it up.
