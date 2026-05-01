import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const aboutWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutWrapRef,
    offset: ["start end", "start center"],
  });

  // About section: fades in from below
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <main style={{ overflowX: "clip" }}>
      <HeroSection />
      <motion.div ref={aboutWrapRef} style={{ opacity, y }}>
        <AboutSection />
      </motion.div>
    </main>
  );
};

export default Index;
