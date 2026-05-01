import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import FadeIn from "./FadeIn";
import bgPink from "@/assets/about/pink_radial_bg.png";

type Project = {
  number: string;
  category: string;
  name: string;
  description: string;
  tech: string;
};

const PROJECTS: Project[] = [
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

const ProjectCard = ({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
}: {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky top-24 md:top-32 flex items-center justify-center px-4 sm:px-6 md:px-8"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#FFD6E0]/60 p-4 sm:p-6 md:p-8 shadow-2xl"
      >
        <div
          className="rounded-[32px] sm:rounded-[42px] md:rounded-[52px] p-6 sm:p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,214,224,0.55) 0%, rgba(255,182,205,0.35) 50%, rgba(255,200,221,0.45) 100%)",
            backdropFilter: "blur(22px) saturate(1.4)",
            WebkitBackdropFilter: "blur(22px) saturate(1.4)",
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        >
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <span
                className="font-black text-transparent leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  WebkitTextStroke: "1.5px #D7E2EA",
                }}
              >
                {project.number}
              </span>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#FF85A2]">
                  {project.category}
                </span>
                <h3
                  className="font-black uppercase tracking-tight leading-tight text-[#3a2a32]"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
                >
                  {project.name}
                </h3>
              </div>
            </div>

            <button
              className="liquid-glass-btn rounded-full px-6 py-3 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#3a2a32] hover:scale-105 transition-transform"
              style={{
                background: "rgba(255,255,255,0.5)",
                border: "1.5px solid rgba(255,255,255,0.6)",
              }}
            >
              View Project
            </button>
          </div>

          {/* Description + tech */}
          <div className="mt-6 md:mt-8 max-w-3xl">
            <p
              className="text-[#3a2a32] leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
            >
              {project.description}
            </p>
            <p className="mt-3 text-sm sm:text-base font-semibold text-[#FF85A2]">
              {project.tech}
            </p>
          </div>

          {/* Bottom row: 2 small left, 1 big right */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1 flex md:flex-col gap-4">
              <div
                className="flex-1 aspect-square rounded-2xl md:rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #FFB6C1 0%, #FF85A2 100%)",
                }}
              />
              <div
                className="flex-1 aspect-square rounded-2xl md:rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #FFD6E0 0%, #FFB6C1 100%)",
                }}
              />
            </div>
            <div
              className="md:col-span-2 rounded-2xl md:rounded-3xl min-h-[180px] md:min-h-0"
              style={{
                background:
                  "linear-gradient(135deg, #FF85A2 0%, #FFB6C1 50%, #FFD6E0 100%)",
              }}
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

  return (
    <section
      id="projects"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{
        backgroundImage: `url(${bgPink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-20 sm:pt-24 md:pt-28 pb-10 px-5 sm:px-8 md:px-10">
        <FadeIn delay={0} y={40}>
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

      <div ref={containerRef} className="relative">
        {PROJECTS.map((project, index) => {
          const totalCards = PROJECTS.length;
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;
          const start = index / totalCards;
          const end = 1;
          return (
            <div key={project.number} className="h-[85vh]">
              <ProjectCard
                project={project}
                index={index}
                totalCards={totalCards}
                progress={scrollYProgress}
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
