import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import bgPink from "@/assets/about/pink_radial_bg.png";

type Project = {
  n: string;
  title: string;
  desc: string;
  tech: string[];
  cta: string;
};

const projects: Project[] = [
  {
    n: "01",
    title: "Machine Learning Project",
    desc: "A project focused on applying machine learning concepts to analyze data and build predictive models.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    cta: "View Project",
  },
  {
    n: "02",
    title: "Web Application Development",
    desc: "A web development project that demonstrates front-end structure, responsive layout, and interactive user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    cta: "View Project",
  },
  {
    n: "03",
    title: "Software Engineering Project",
    desc: "A structured project applying software engineering concepts such as planning, requirements, design, and implementation.",
    tech: ["Software Engineering", "Documentation", "System Design"],
    cta: "View Code",
  },
];

const ProjectCard = ({ project, index, total }: { project: Project; index: number; total: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Final scale gets smaller for earlier cards (so deeper cards feel "on top")
  const finalScale = 1 - (total - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, finalScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className={isLast ? "relative h-[80vh]" : "relative h-screen"}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ scale, opacity, top: `${10 + index * 2}vh` }}
        className="sticky mx-auto max-w-5xl px-4 sm:px-6 md:px-8"
      >
        <div
          className="relative rounded-3xl border border-white/25 backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(255,133,162,0.35)] transition-shadow duration-500 hover:shadow-[0_0_80px_rgba(255,182,205,0.5)] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,200,221,0.18) 0%, rgba(255,255,255,0.06) 60%, rgba(255,182,205,0.12) 100%)",
          }}
        >
          {/* Faint number watermark */}
          <span
            className="pointer-events-none absolute -top-4 right-6 sm:right-10 font-black leading-none select-none"
            style={{
              fontSize: "clamp(6rem, 14vw, 12rem)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(215,226,234,0.25)",
            }}
          >
            {project.n}
          </span>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 p-8 sm:p-10 md:p-12 relative z-10">
            {/* Left: text */}
            <div className="flex flex-col justify-center gap-5 sm:gap-6">
              <span
                className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#FF85A2" }}
              >
                Project {project.n}
              </span>
              <h3
                className="font-black uppercase leading-tight tracking-tight"
                style={{ color: "#D7E2EA", fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)" }}
              >
                {project.title}
              </h3>
              <p
                className="font-medium leading-relaxed"
                style={{ color: "#D7E2EA", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}
              >
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#D7E2EA" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button className="liquid-glass-btn rounded-full px-7 py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] cursor-pointer">
                  {project.cta}
                </button>
              </div>
            </div>

            {/* Right: image / placeholder */}
            <div className="flex items-center justify-center">
              <div
                className="w-full aspect-[4/3] rounded-2xl border border-white/25 shadow-inner relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,182,205,0.55) 0%, rgba(255,200,221,0.25) 50%, rgba(255,255,255,0.08) 100%)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-40 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,133,162,0.5), transparent 55%)",
                  }}
                />
                <span
                  className="absolute inset-0 flex items-center justify-center font-black uppercase tracking-widest"
                  style={{ color: "rgba(215,226,234,0.55)", fontSize: "clamp(1rem, 1.4vw, 1.25rem)" }}
                >
                  {project.title.split(" ")[0]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => (
  <section
    id="projects"
    className="relative py-24 md:py-32"
    style={{
      backgroundImage: `url(${bgPink})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="px-5 sm:px-8 md:px-10 mb-12 md:mb-20">
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

    <div className="relative">
      {projects.map((p, i) => (
        <ProjectCard key={p.n} project={p} index={i} total={projects.length} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
