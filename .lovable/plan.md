# Projects Section Plan

Add a new `Projects` section after `AboutSection` with 3 sticky-stacking, scroll-scaled project cards in a soft pink glassmorphism style. Background reuses the About Me pink radial background for visual continuity.

## Files

**New: `src/components/ProjectsSection.tsx`**
- Section with `id="projects"`, same `bgPink` background as `AboutSection` (`@/assets/about/pink_radial_bg.png`), `cover/center/no-repeat`.
- Top: large outlined "Projects" heading mirroring the About heading style (transparent fill, `WebkitTextStroke: 1.5px #D7E2EA`, clamp font size, uppercase, FadeIn).
- Wrapper `<div>` containing 3 stacked cards. Each card lives in its own full-viewport-height container so it can pin via `position: sticky; top: ~10vh`.
- Each card uses Framer Motion `useScroll({ target: cardRef, offset: ["start start", "end start"] })` and `useTransform` to map progress → `scale` (1 → 0.9) and `opacity` (1 → 0.6), so as later cards scroll over, earlier cards shrink and dim slightly.
- Card markup: rounded-3xl, glassmorphism (translucent white/pink + backdrop-blur-xl + soft border + shadow), inner grid: left = title + description + tech chips + CTA button; right = image/placeholder rounded box (gradient pink placeholder for now since no image assets are provided).
- CTA: reuse `liquid-glass-btn` class for button styling, label "View Project" (first two) and "View Code" (last), as a regular `<button>` (no link target supplied yet).
- Hover glow: Tailwind `transition-shadow hover:shadow-[0_0_60px_rgba(255,182,205,0.45)]`.

**Edit: `src/pages/Index.tsx`**
- Import `ProjectsSection` and render it after `AboutSection`, wrapped in the same fade-in motion wrapper used for About (or plainly — About already uses `whileInView`; Projects can render directly since cards drive their own scroll animations).

## Card data
```ts
const projects = [
  { n: "01", title: "Machine Learning Project",
    desc: "A project focused on applying machine learning concepts to analyze data and build predictive models.",
    tech: ["Python", "Machine Learning", "Data Analysis"], cta: "View Project" },
  { n: "02", title: "Web Application Development",
    desc: "A web development project that demonstrates front-end structure, responsive layout, and interactive user experience.",
    tech: ["HTML", "CSS", "JavaScript"], cta: "View Project" },
  { n: "03", title: "Software Engineering Project",
    desc: "A structured project applying software engineering concepts such as planning, requirements, design, and implementation.",
    tech: ["Software Engineering", "Documentation", "System Design"], cta: "View Code" },
];
```

## Sticky-stack technique (technical)
```text
<section bg=pink>
  <Heading />
  {projects.map((p, i) => (
    <div ref={containerRef} className="h-screen relative">          // scroll track
      <motion.div style={{scale, opacity}}
                  className="sticky top-[12vh] mx-auto max-w-5xl">
        <Card />
      </motion.div>
    </div>
  ))}
</section>
```
- `scale = useTransform(progress, [0, 1], [1, 1 - i*0.05 - 0.05])` so deeper cards end smaller.
- `opacity` stays high (1 → 0.85) to keep cards visible while stacked.
- Last card's container can be shorter (e.g. `h-[80vh]`) so the section ends cleanly.

## Styling notes
- Card background: `bg-white/10` with `backdrop-blur-2xl`, border `border-white/25`, plus a subtle pink tint via `bg-gradient-to-br from-pink-200/15 to-white/5`.
- Tech chips: small rounded-full pills, `bg-white/10 border border-white/20 text-[#D7E2EA] text-xs uppercase tracking-wider`.
- Number "01/02/03" rendered large and faint in the top-right of each card for visual rhythm.
- Image placeholder: `aspect-[4/3] rounded-2xl bg-gradient-to-br from-pink-300/40 via-pink-200/20 to-white/10 border border-white/20`.
- All text in `#D7E2EA` for consistency.

No new dependencies; framer-motion is already in use.
