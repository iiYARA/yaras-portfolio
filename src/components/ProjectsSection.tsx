import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import bgPink from "@/assets/about/pink_radial_bg.png";

import p1Main from "@/assets/projects/project1_main.jpg";
import p1A from "@/assets/projects/project1_a.jpg";
import p1B from "@/assets/projects/project1_b.jpg";
import p2Main from "@/assets/projects/project2_main.jpg";
import p2A from "@/assets/projects/project2_a.jpg";
import p2B from "@/assets/projects/project2_b.jpg";
import p3Main from "@/assets/projects/project3_main.jpg";
import p3A from "@/assets/projects/project3_a.jpg";
import p3B from "@/assets/projects/project3_b.jpg";

interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  tech: string;
  images: { main: string; a: string; b: string };
}

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Academic",
    name: "Machine Learning Project",
    description:
      "A project focused on applying machine learning concepts to analyze data and build predictive models based on real datasets.",
    tech: "Python, Machine Learning, Data Analysis",
    images: { main: p1Main, a: p1A, b: p1B },
  },
  {
    number: "02",
    category: "Academic",
    name: "Web Application Development",
    description:
      "A web development project demonstrating responsive design, user interaction, and front-end structure.",
    tech: "HTML, CSS, JavaScript",
    images: { main: p2Main, a: p2A, b: p2B },
  },
  {
    number: "03",
    category: "Academic",
    name: "Software Engineering Project",
    description:
      "A structured project applying software engineering concepts including system design, requirements, and implementation.",
    tech: "Software Engineering, System Design, Programming",
    images: { main: p3Main, a: p3A, b: p3B },
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
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 h-[85vh] flex items-center justify-center px-4 sm:px-6 md:px-10">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#FFD6E4] p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(255,180,200,0.4)]"
      >
        {/* Glassmorphism background */}
        <div
          className="absolute inset-0 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 220, 232, 0.55) 0%, rgba(255, 200, 220, 0.45) 100%)",
            backdropFilter: "blur(24px) saturate(1.4)",
            WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          }}
        />

        <div className="relative z-10 flex flex-col gap-6 md:gap-8">
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 px-2 sm:px-4 md:px-6 pt-2 md:pt-4">
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-3 md:gap-4">
                <span
                  className="font-black text-transparent leading-none"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    WebkitTextStroke: "1.5px #C77B9E",
                  }}
                >
                  {project.number}
                </span>
                <span className="uppercase tracking-widest text-[#9B5C7E] text-xs sm:text-sm font-medium">
                  {project.category}
                </span>
              </div>
              <h3
                className="font-bold text-[#5C2E47] leading-tight"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
              >
                {project.name}
              </h3>
              <p className="text-[#7A4862] text-sm sm:text-base max-w-xl leading-relaxed">
                {project.description}
              </p>
              <p className="text-[#9B5C7E] text-xs sm:text-sm italic mt-1">
                {project.tech}
              </p>
            </div>

            <button className="self-start md:self-auto liquid-glass-btn rounded-full px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#5C2E47] cursor-pointer whitespace-nowrap">
              View Project
            </button>
          </div>

          {/* Bottom row: 2 small left, 1 big right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 px-2 sm:px-4 md:px-6 pb-2 md:pb-4">
            <div className="flex flex-col gap-3 md:gap-4 md:col-span-1">
              <img
                src={project.images.a}
                alt=""
                loading="lazy"
                className="w-full h-32 sm:h-40 md:h-44 object-cover rounded-2xl md:rounded-3xl"
              />
              <img
                src={project.images.b}
                alt=""
                loading="lazy"
                className="w-full h-32 sm:h-40 md:h-44 object-cover rounded-2xl md:rounded-3xl"
              />
            </div>
            <img
              src={project.images.main}
              alt={project.name}
              loading="lazy"
              className="w-full h-64 sm:h-80 md:h-[23rem] object-cover rounded-2xl md:rounded-3xl md:col-span-2"
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
      ref={containerRef}
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{
        backgroundImage: `url(${bgPink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="pt-24 md:pt-32 pb-10 md:pb-16 px-5 sm:px-8 md:px-10">
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
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
          const start = i / PROJECTS.length;
          const end = 1;
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
              range={[start, end]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      <div className="h-[20vh]" />
    </section>
  );
};

export default ProjectsSection;
