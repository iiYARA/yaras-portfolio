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

  // Hero text: fade out + move up
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // Avatar: slight scale down + fade out
  const avatarOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const avatarScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Soft pastel pink overlay fade
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 0.85]);

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
      <motion.div style={{ opacity: textOpacity, y: textY }} className="px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        <FadeIn delay={0} y={-20}>
          <nav className="flex justify-between">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[#FF85A2] font-semibold uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 drop-shadow-sm"
              >
                {link}
              </a>
            ))}
          </nav>
        </FadeIn>
      </motion.div>

      {/* Hero Heading */}
      <motion.div style={{ opacity: textOpacity, y: textY }} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 relative z-10">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] text-center">
            Hi, i&apos;m yara
          </h1>
          <p className="text-center text-[#FF85A2] font-medium tracking-wide mt-2 text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-sm">
            Computer Science Student | Effat University
          </p>
        </FadeIn>
      </motion.div>

      {/* Portrait — centered, floating */}
      <motion.div
        style={{
          opacity: avatarOpacity,
          scale: avatarScale,
          y: avatarY,
          left: "50%",
          top: "55%",
          transform: "translate(-50%, -50%)",
        }}
        className="absolute z-10 w-[180px] sm:w-[260px] md:w-[320px] lg:w-[320px]"
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

      {/* Soft pastel pink fade overlay for smooth transition */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="pointer-events-none absolute inset-0 z-30"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,200,221,0) 0%, rgba(255,200,221,0.35) 55%, rgba(255,182,205,0.85) 100%)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
