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

interface CardProps {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  targetY: number;
}

const ProjectCard = ({ project, progress, range, targetScale, targetY }: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const y = useTransform(progress, range, [0, targetY]);

  return (
    <div className="flex h-full items-start justify-center px-4 sm:px-6 md:px-10 pt-4 md:pt-6">
      <motion.div
        style={{ scale, y, willChange: "transform" }}
        className="relative w-full max-w-[1200px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#793951] p-4 sm:p-6 md:p-8 overflow-hidden"
      >
        {/* glassmorphism pink background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,200,221,0.55) 0%, rgba(255,182,205,0.35) 50%, rgba(255,220,232,0.5) 100%)",
            backdropFilter: "blur(24px) saturate(1.4)",
            WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          }}
        />

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <span
                className="font-black text-[#793951]"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                {project.number}
              </span>
              <span
                className="uppercase tracking-[0.25em] text-[#793951]/70 font-semibold text-xs sm:text-sm md:text-base"
              >
                {project.category}
              </span>
            </div>
            <h3
              className="font-bold uppercase text-[#793951] leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
            >
              {project.name}
            </h3>
            <p
              className="text-[#793951]/80 font-medium leading-relaxed max-w-[640px] mt-1 sm:mt-2"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)" }}
            >
              {project.description}
            </p>
            <p className="text-[#793951]/70 font-medium text-xs sm:text-sm md:text-base mt-2">
              {project.tech}
            </p>
          </div>

          <div className="flex-shrink-0 self-start">
            <button className="rounded-full border border-[#793951] text-[#793951] hover:bg-[rgba(121,57,81,0.1)] transition-colors px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest cursor-pointer whitespace-nowrap">
              View Project
            </button>
          </div>
        </div>

        {/* Bottom row: 2 small left, 1 big right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 md:col-span-1">
            <div
              className="rounded-2xl sm:rounded-3xl aspect-[4/3] border border-[#793951]/30"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,182,205,0.4), rgba(255,220,232,0.25))",
              }}
            />
            <div
              className="rounded-2xl sm:rounded-3xl aspect-[4/3] border border-[#793951]/30"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,220,232,0.35), rgba(255,182,205,0.5))",
              }}
            />
          </div>
          <div className="md:col-span-2">
            <div
              className="rounded-2xl sm:rounded-3xl w-full h-full min-h-[200px] sm:min-h-[260px] md:min-h-[340px] border border-[#793951]/30"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,200,221,0.45), rgba(255,182,205,0.35))",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const totalCards = projects.length;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{
        backgroundImage: `url(${bgPink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <div className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 md:pb-16 px-5 flex justify-center">
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

      {/* Sticky stacking cards */}
      <div ref={ref} className="relative h-[360vh] pb-32">
        {projects.map((project, i) => {
          const targetScale = 1 - (totalCards - 1 - i) * 0.03;
          const targetY = -(totalCards - 1 - i) * 18;
          const start = i / totalCards;
          const end = Math.min(start + 1 / totalCards, 1);
          return (
            <div
              key={project.number}
              className="sticky top-24 h-screen"
              style={{ zIndex: i + 1 }}
            >
              <ProjectCard
                project={project}
                index={i}
                progress={scrollYProgress}
                range={[start, end]}
                targetScale={targetScale}
                targetY={targetY}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
