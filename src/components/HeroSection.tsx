import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import jackAvatar from "@/assets/jack-avatar.png";
import bgGif from "@/assets/background_pic.gif";

const navLinks = ["About Me", "Education", "Projects", "Skills"];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Hero content (nav + heading): fade out + slide up
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // Avatar: scale down + fade
  const avatarOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Soft pastel pink overlay fading in as we leave hero
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 0.55]);

  return (
    <section
      ref={ref}
      className="h-screen flex flex-col relative"
      style={{
        overflowX: "clip",
        backgroundImage: `url(${bgGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Navbar */}
      <motion.div style={{ opacity: contentOpacity, y: contentY }}>
        <FadeIn delay={0} y={-20} className="px-6 md:px-10 pt-6 md:pt-8">
          <nav className="flex justify-between">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-[#FF85A2] font-semibold uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 drop-shadow-sm"
              >
                {link}
              </a>
            ))}
          </nav>
        </FadeIn>
      </motion.div>

      {/* Hero Heading */}
      <motion.div style={{ opacity: contentOpacity, y: contentY }}>
        <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] text-center">
            Hi, i&apos;m yara
          </h1>
          <p className="text-center text-[#FF85A2] font-medium tracking-wide mt-2 text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-sm">
            Computer Science Student | Effat University
          </p>
        </FadeIn>
      </motion.div>

      {/* Portrait */}
      <motion.div
        style={{ opacity: avatarOpacity, scale: avatarScale, y: avatarY }}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={200} strength={2}>
            <img
              src={jackAvatar}
              alt="Yara 3D Avatar"
              className="w-full h-auto drop-shadow-2xl animate-[float_3s_ease-in-out_infinite]"
            />
          </Magnet>
        </FadeIn>
      </motion.div>

      {/* Soft pastel pink fade overlay (transition into About) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          opacity: overlayOpacity,
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(255, 209, 220, 0.55) 80%, rgba(255, 192, 203, 0.85) 100%)",
        }}
      />
    </section>
  );
};

export default HeroSection;
