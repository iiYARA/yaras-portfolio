Update the Hero heading from "Hi, i'm yara" to "Hi, i'm yara mohammad".

### Change
- File: `src/components/HeroSection.tsx`
- Replace the `<h1>` text content with `Hi, i&apos;m yara mohammad`.

### Notes
- The heading currently uses `whitespace-nowrap` with a viewport-based font size (`text-[14vw]`–`text-[17.5vw]`). Adding "mohammad" makes the line longer; with `nowrap` it will keep scaling to viewport width but may feel tight on small screens. I'll slightly reduce the responsive sizes (e.g. `text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw]`) so the longer name fits cleanly without overflowing.
- No other components or styles change.