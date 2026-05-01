import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import bgGif from "@/assets/background_pic.gif";

const ACCENT = "#793951";

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

const PROJECTS: Project[] = [
  {
    title: "Web Development Project",
    description:
      "A responsive web application built with React and TypeScript, focused on clean architecture and smooth user experiences.",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "Mobile App Concept",
    description:
      "A concept-driven mobile interface emphasizing accessibility, intuitive navigation, and delightful micro-interactions.",
    tags: ["UI/UX", "Figma", "Prototype"],
    href: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard transforming complex datasets into clear, actionable visual insights.",
    tags: ["D3.js", "Charts", "Analytics"],
    href: "#",
  },
  {
    title: "AI Powered Tool",
    description:
      "An intelligent assistant leveraging modern AI APIs to streamline daily workflows and boost productivity.",
    tags: ["AI", "Node", "OpenAI"],
    href: "#",
  },
];

const ProjectCard = ({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  // Each card occupies a slice of total scroll progress.
  const slice = 1 / total;
  const start = index * slice;
  const end = start + slice;

  // Scale down as later cards stack on top.
  const scale = useTransform(progress, [start, end], [1, 1 - (total - index - 1) * 0.04 - 0.04]);
  // Slight upward drift behind the next card.
  const y = useTransform(progress, [start, end], [0, -30]);

  return (
    <div
      className="sticky top-24 flex items-center justify-center px-4"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={{
          scale: index === total - 1 ? 1 : scale,
          y: index === total - 1 ? 0 : y,
          willChange: "transform",
          borderColor: ACCENT,
          background:
            "linear-gradient(135deg, rgba(20, 8, 14, 0.92) 0%, rgba(40, 16, 28, 0.92) 100%)",
        }}
        className="w-full max-w-4xl rounded-3xl border-2 backdrop-blur-md p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
      >
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase"
            style={{ color: ACCENT }}
          >
            0{index + 1} / 0{total}
          </span>
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: ACCENT, opacity: 0.7 }}
          >
            {project.tags[0]}
          </span>
        </div>

        <h3
          className="font-black uppercase tracking-tight leading-[0.95] mb-6"
          style={{
            color: ACCENT,
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
          }}
        >
          {project.title}
        </h3>

        <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-8" style={{ color: "#F4D9E2" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm font-medium px-3 py-1 rounded-full border"
              style={{ borderColor: `${ACCENT}66`, color: "#F4D9E2" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.href}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-semibold uppercase tracking-widest text-sm transition-colors duration-200"
          style={{ borderColor: ACCENT, color: ACCENT }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(121, 57, 81, 0.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          Live Project
          <span aria-hidden>→</span>
        </a>
      </motion.article>
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
      className="relative"
      style={{
        backgroundImage: `url(${bgGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Section heading */}
      <div className="sticky top-0 pt-16 pb-6 z-0 flex justify-center pointer-events-none">
        <h2
          className="hero-heading font-black uppercase tracking-tight leading-none text-center"
          style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
        >
          Projects
        </h2>
      </div>

      <div ref={containerRef} className="relative" style={{ height: `${PROJECTS.length * 100}vh` }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
