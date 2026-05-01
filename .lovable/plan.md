## Goal
Replace the Hero section's background (currently `background_pic.gif`) with the newly uploaded pink starry/galaxy image.

## Steps

1. **Add the new asset**
   - Copy `user-uploads://image-2.png` into the project at `src/assets/hero_bg_pink.png`.

2. **Update `src/components/HeroSection.tsx`**
   - Replace the import:
     - Remove: `import bgGif from "@/assets/background_pic.gif";`
     - Add: `import bgPink from "@/assets/hero_bg_pink.png";`
   - Update the section's inline `style` to use `bgPink` for `backgroundImage`.
   - Keep `backgroundSize: "cover"`, `backgroundPosition: "center"`. Change `backgroundRepeat` to `"no-repeat"` (since it's a static photo, not a tiling gif).

3. **Leave everything else untouched**
   - Navbar, heading, centered 3D portrait, soft pastel pink scroll fade overlay, and the Hero → About transition all remain exactly as they are.
   - About section is unaffected.

## Notes
- The new pink starry image complements the existing pastel-pink fade overlay used for the Hero → About transition, so the transition will continue to feel seamless.
