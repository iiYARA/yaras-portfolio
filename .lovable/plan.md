## Plan: Restyle Projects Section with #793951 Accents

Update only visual styling in `src/components/ProjectsSection.tsx`. All animation logic (useScroll, useTransform, sticky positioning, scale formula, offsets, z-index stacking) stays untouched.

### Changes in `src/components/ProjectsSection.tsx`

**1. Card border**
- Outer card `motion.div`: replace `border-white/40` with `border-[#793951]`. Keep `border-2` and rounded corners.

**2. Project number + title**
- Number (`01/02/03`): `text-[#FF85A2]` → `text-[#793951]`.
- Project name `h3`: `text-[#FFF0F5]` → `text-[#793951]`, add `uppercase`, keep `font-bold`.

**3. Description & tech (readability on pink)**
- Description: `text-[#D7E2EA]` → `text-[#793951]/80`.
- Tech line: `text-[#FFB6C1]` → `text-[#793951]/70`.
- Category label: `text-[#D7E2EA]/90` → `text-[#793951]/70`.

**4. "View Project" button**
- Replace `liquid-glass-btn` styling with:
  - `border border-[#793951] text-[#793951]`
  - `hover:bg-[rgba(121,57,81,0.1)] transition-colors`
  - Keep `rounded-full`, padding, `uppercase tracking-widest`, sizing.

**5. Card background**
- Keep existing soft pink glassmorphism (already matches About section). Provides strong contrast with `#793951`.

**6. Image placeholder tiles**
- `border-white/30` → `border-[#793951]/30` on the three inner placeholder divs for visual cohesion.

### What does NOT change
- `useScroll` / `useTransform` setup and offsets `["start start", "end end"]`.
- Sticky positioning `sticky top-24 md:top-32` and per-card `top: calc(6rem + ${index * 28}px)`.
- Scale formula `targetScale = 1 - (totalCards - 1 - i) * 0.03`.
- `h-[85vh]` containers and z-index stacking order.
- Section pink radial background, heading style, FadeIn wrapping.
- `src/pages/Index.tsx` integration.

### Files touched
- `src/components/ProjectsSection.tsx` (styling only)
