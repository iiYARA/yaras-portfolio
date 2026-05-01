import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
};

const projects: Project[] = [
  {
    title: "AI Study Companion",
    description:
      "A machine-learning powered study assistant that summarizes lectures, generates quizzes, and tracks progress for university students.",
    tags: ["Python", "PyTorch", "FastAPI"],
    gradient: "from-[#FFD1DC] via-[#FFB6C1] to-[#FF85A2]",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "An interactive web app that animates classic data structures and algorithms, built to make CS fundamentals click.",
    tags: ["React", "TypeScript", "D3.js"],
    gradient: "from-[#FFE5EC] via-[#FFC2D1] to-[#FF9EBB]",
  },
  {
    title: "Smart Campus Bot",
    description:
      "A conversational AI that helps Effat students find courses, deadlines, and campus resources using NLP.",
    tags: ["NLP", "Transformers", "Node.js"],
    gradient: "from-[#FFDCE5] via-[#FFB3C6] to-[#FF8FB1]",
  },
  {
    title: "Portfolio Playground",
    description:
      "This very portfolio — an experiment in scroll-driven motion, soft pastels, and playful 3D character interactions.",
    tags: ["React", "Framer Motion", "Tailwind"],
    gradient: "from-[#FFE0EC] via-[#FFBED1] to-[#FF96B5]",
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
  // Each card occupies a slice of the scroll. After its slice ends, it scales down.
  const slice = 1 / total;
  const start = index * slice;
  const end = start + slice;

  const scale = useTransform(progress, [start, end], [1, 0.92]);
  const y = useTransform(progress, [start, end], [0, -40]);
  const opacity = useTransform(progress, [start, end], [1, 0.7]);

  return (
    <div
      className="h-screen sticky top-24 flex items-center justify-center px-6"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, y, opacity, willChange: "transform" }}
        className={`w-full max-w-4xl rounded-3xl p-10 md:p-14 bg-gradient-to-br ${project.gradient} shadow-[0_30px_80px_-20px_rgba(255,133,162,0.45)] border border-white/40 backdrop-blur-sm`}
      >
        <div className="flex items-center justify-between mb-6">
          <span className="text-white/80 font-mono text-sm tracking-widest">
            0{index + 1} / 0{total}
          </span>
          <div className="flex flex-wrap gap-2 justify-end">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-white/40 text-[#7a2a45] text-xs font-semibold backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <h3 className="text-4xl md:text-6xl font-black text-[#5a1f33] leading-tight mb-4 uppercase">
          {project.title}
        </h3>
        <p className="text-[#5a1f33]/80 text-lg md:text-xl leading-relaxed max-w-2xl">
          {project.description}
        </p>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-[#FFF0F5]"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 pt-24 pb-8 text-center pointer-events-none z-0">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-[#FF85A2] tracking-tight">
          Projects
        </h2>
      </div>
      <div className="-mt-32">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
