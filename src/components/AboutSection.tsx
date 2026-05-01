import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";
import bgPink from "@/assets/about/pink_radial_bg.png";
import brainTabs from "@/assets/about/brain_tabs.png";
import keepCoding from "@/assets/about/keep_coding.png";
import pixelComputers from "@/assets/about/pixel_computers.png";
import pinkCursor from "@/assets/about/pink_cursor.png";

const PARAGRAPH =
  "I am Yara Mohammad, a junior Computer Science student at Effat University with a focus on Artificial Intelligence and programming.\n\nThrough my coursework in data structures, algorithms, software engineering, and machine learning, I have built a strong foundation in problem-solving and logical thinking. I enjoy applying what I learn through projects and continuously developing my technical skills!";

const Char = ({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  if (char === "\n") return <br />;
  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

const AnimatedParagraph = ({ text }: { text: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  return (
    <p
      ref={ref}
      className="text-center font-medium leading-relaxed max-w-[560px] mx-auto"
      style={{ color: "#D7E2EA", fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
    >
      {chars.map((c, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return <Char key={i} char={c} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
};

const AboutSection = () => (
  <section
    id="about-me"
    className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    style={{
      backgroundImage: `url(${bgPink})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Decorative corner images */}
    <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none">
      <img src={brainTabs} alt="" className="w-[120px] sm:w-[160px] md:w-[210px] h-auto" />
    </FadeIn>

    <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none">
      <img src={pixelComputers} alt="" className="w-[120px] sm:w-[160px] md:w-[210px] h-auto" />
    </FadeIn>

    {/* Bottom-left */}
    <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none">
      <img src={pinkCursor} alt="" className="w-[100px] sm:w-[140px] md:w-[180px] h-auto" />
    </FadeIn>

    {/* Bottom-right */}
    <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none">
      <img src={keepCoding} alt="" className="w-[130px] sm:w-[170px] md:w-[220px] h-auto" />
    </FadeIn>

    {/* Heading + paragraph */}
    <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase tracking-tight leading-none text-center text-transparent"
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
            WebkitTextStroke: "1.5px #D7E2EA",
          }}
        >
          About me
        </h2>
      </FadeIn>

      <AnimatedParagraph text={PARAGRAPH} />
    </div>

    {/* Contact button */}
    <div className="relative z-10 mt-16 sm:mt-20 md:mt-24">
      <ContactButton />
    </div>
  </section>
);

export default AboutSection;
