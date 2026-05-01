import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import bgPink from "@/assets/about/pink_radial_bg.png";

interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  tech: string;
}

const projects: Project[] = [
  {
    number: "01",
    category: "Academic",
    name: "Machine Learning Project",
    description:
      "A project focused on applying machine learning concepts to analyze data and build predictive models based on real datasets.",
    tech: "Python, Machine Learning, Data Analysis",
  },
  {
    number: "02",
    category: "Academic",
    name: "Web Application Development",
    description:
      "A web development project demonstrating responsive design, user interaction, and front-end structure.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    number: "03",
    category: "Academic",
    name: "Software Engineering Project",
    description:
      "A structured project applying software engineering concepts including system design, requirements, and implementation.",
    tech: "Software Engineering, System Design, Programming",
  },
];

const placeholderTile = (seed: number) => {
  const palettes = [
    ["#FFD6E4", "#FFB6C1"],
    ["#FFC2D4", "#FF99B5"],
    ["#FFE0EC", "#FFADC4"],
    ["#FFCAD9", "#FF8FAE"],
  ];
  const [a, b] = palettes[seed % palettes.length];
  return `linear-gradient(135deg, ${a} 0%, ${b} 100%)`;
};

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  targetScale: number;
}

const ProjectCard = ({ project, index, totalCards, scrollProgress, range, targetScale }: CardProps) => {
  const scale = useTransform(scrollProgress, range, [1, targetScale]);

  return (
    <div
      className="sticky top-24 md:top-32 flex items-center justify-center px-4 sm:px-6 md:px-8"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-white/40 p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(255,133,162,0.4)]"
      >
        {/* Glassmorphism layered bg */}
        <div
          className="absolute inset-0 rounded-[inherit] -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,214,228,0.55) 0%, rgba(255,182,205,0.45) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        />
        <div
          className="relative rounded-[32px] sm:rounded-[40px] md:rounded-[50px] p-5 sm:p-7 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,225,235,0.7) 0%, rgba(255,200,221,0.5) 100%)",
            backdropFilter: "blur(24px) saturate(1.4)",
            WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          }}
        >
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
            <div className="flex-1">
              <div className="flex items-baseline gap-4 sm:gap-6 mb-3 sm:mb-4">
                <span
                  className="font-black text-transparent leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    WebkitTextStroke: "1.5px #FF85A2",
                  }}
                >
                  {project.number}
                </span>
                <span className="text-[#FF85A2] uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold">
                  {project.category}
                </span>
              </div>
              <h3
                className="font-black text-[#7a3a52] leading-tight mb-3 sm:mb-4"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
              >
                {project.name}
              </h3>
              <p className="text-[#8a4a62] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-3">
                {project.description}
              </p>
              <p className="text-[#FF85A2] text-xs sm:text-sm font-medium uppercase tracking-wider">
                {project.tech}
              </p>
            </div>

            <div className="flex-shrink-0">
              <button className="liquid-glass-btn rounded-full px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#7a3a52] hover:scale-105 transition-transform">
                View Project
              </button>
            </div>
          </div>

          {/* Bottom row: 2 small left + 1 big right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 md:col-span-1">
              <div
                className="rounded-2xl sm:rounded-3xl aspect-[4/3] border border-white/50 shadow-inner"
                style={{ background: placeholderTile(index * 3) }}
              />
              <div
                className="rounded-2xl sm:rounded-3xl aspect-[4/3] border border-white/50 shadow-inner"
                style={{ background: placeholderTile(index * 3 + 1) }}
              />
            </div>
            <div
              className="rounded-2xl sm:rounded-3xl border border-white/50 shadow-inner md:col-span-2 min-h-[240px] md:min-h-full"
              style={{ background: placeholderTile(index * 3 + 2) }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = projects.length;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{
        backgroundImage: `url(${bgPink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-20 sm:pt-24 md:pt-28 pb-10 px-5 sm:px-8 md:px-10">
        <FadeIn y={40}>
          <h2
            className="font-black uppercase tracking-tight leading-none text-center text-transparent"
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
              WebkitTextStroke: "1.5px #D7E2EA",
            }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      <div>
        {projects.map((project, index) => {
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const start = index / totalCards;
          const end = 1;
          return (
            <div key={project.number} className="h-[85vh]">
              <ProjectCard
                project={project}
                index={index}
                totalCards={totalCards}
                scrollProgress={scrollYProgress}
                range={[start, end]}
                targetScale={targetScale}
              />
            </div>
          );
        })}
      </div>

      <div className="h-32" />
    </section>
  );
};

export default ProjectsSection;
