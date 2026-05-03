import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import FadeIn from "./FadeIn";
import bgPink from "@/assets/about/pink_radial_bg.png";
import fidakHome from "@/assets/projects/fidak-home.png";
import fidakDonor from "@/assets/projects/fidak-donor.png";
import fidakAdmin from "@/assets/projects/fidak-admin.png";

type Project = {
  number: string;
  category: string;
  name: string;
  description: string;
  tech: string;
  href?: string;
  buttonLabel?: string;
  customBoxes?: {
    topLeft: React.ReactNode;
    bottomLeft: React.ReactNode;
    right: React.ReactNode;
  };
};

const PhaseRow = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-2 rounded-lg bg-white/40 border border-[#793951]/25 px-2 py-1">
    <span className="text-[#793951] font-bold text-[10px] sm:text-[11px] tracking-wider">{n}</span>
    <span className="text-[#793951]/85 font-medium text-[10px] sm:text-[11px] leading-tight">{label}</span>
  </div>
);

const StatBlock = ({ value, label }: { value: string; label: string }) => (
  <div
    className="rounded-2xl border border-[#793951]/30 px-3 py-3 sm:px-4 sm:py-4 flex flex-col items-start justify-center"
    style={{
      background:
        "linear-gradient(135deg, rgba(255,220,232,0.7), rgba(255,200,221,0.5))",
    }}
  >
    <div
      className="font-black text-[#793951] leading-none"
      style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
    >
      {value}
    </div>
    <div className="text-[#793951]/75 font-medium text-[10px] sm:text-xs mt-1 leading-tight">
      {label}
    </div>
  </div>
);

const ResultBar = ({
  label,
  metric,
  pct,
}: {
  label: string;
  metric: string;
  pct: number;
}) => (
  <div className="flex flex-col gap-1">
    <div className="flex justify-between items-baseline gap-2">
      <span className="text-[#793951]/85 font-medium text-[10px] sm:text-[11px] leading-tight">
        {label}
      </span>
      <span className="text-[#793951] font-bold text-[10px] sm:text-[11px]">
        {metric}
      </span>
    </div>
    <div className="h-1.5 rounded-full bg-white/50 border border-[#793951]/20 overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: `${pct}%`,
          background:
            "linear-gradient(90deg, #793951, rgba(121,57,81,0.55))",
        }}
      />
    </div>
  </div>
);

const projects: Project[] = [
  {
    number: "01",
    category: "Academic",
    name: "Machine Learning Project",
    description:
      "A machine learning project focused on health risk prediction across diverse patient populations, exploring distribution shift, threshold tuning, and out-of-distribution robustness.",
    tech: "Python, Machine Learning, Data Analysis",
    href: "https://judyabuquta.github.io/CS4082_health-prediction-distribution-shift/#pipeline",
    customBoxes: {
      topLeft: (
        <div className="w-full h-full flex flex-col p-3 sm:p-4">
          <div className="text-[#793951] font-bold text-[11px] sm:text-xs uppercase tracking-wider leading-tight mb-2 sm:mb-3">
            Ten-Phase Experimental Design
          </div>
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 flex-1 content-start">
            <PhaseRow n="01" label="Data Preparation" />
            <PhaseRow n="02" label="Exploratory Analysis" />
            <PhaseRow n="03" label="In-Domain Training" />
            <PhaseRow n="04" label="OOD Evaluation" />
            <PhaseRow n="05" label="In-Domain Mitigation" />
            <PhaseRow n="06" label="Threshold Tuning" />
            <PhaseRow n="07" label="Pooled Training" />
            <PhaseRow n="08–10" label="Comparison & Conclusion" />
          </div>
        </div>
      ),
      bottomLeft: (
        <div className="w-full h-full flex flex-col p-3 sm:p-4">
          <div className="text-[#793951] font-bold text-[11px] sm:text-xs uppercase tracking-wider leading-tight mb-2 sm:mb-3">
            Key Results
          </div>
          <div className="flex flex-col gap-2 sm:gap-2.5 flex-1">
            <ResultBar label="OOD AUC range" metric="0.66–0.69" pct={69} />
            <ResultBar label="Best F1 (SVM balanced)" metric="0.3611" pct={36} />
            <ResultBar label="Best Recall (T=0.35)" metric="0.7438" pct={74} />
            <ResultBar label="Best Precision (Pooled LR)" metric="0.4125" pct={41} />
          </div>
          <div className="mt-2 text-[#793951]/75 font-medium text-[9px] sm:text-[10px] italic leading-snug">
            Threshold tuning was the strongest source-only fix under distribution shift.
          </div>
        </div>
      ),
      right: (
        <div className="w-full h-full flex flex-col p-4 sm:p-6 md:p-7">
          <div className="text-[#793951]/70 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-2">
            Mini Hero
          </div>
          <h4
            className="text-[#793951] font-black leading-tight"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.75rem)" }}
          >
            Health Risk Prediction Under Distribution Shift
          </h4>
          <p className="text-[#793951]/80 font-medium text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed max-w-[520px]">
            Predicting cardiac risk across different patient populations while
            studying how model performance changes under distribution shift.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-4 sm:mt-5 flex-1 content-end">
            <StatBlock value="0.90" label="Best in-domain AUC" />
            <StatBlock value="0.69" label="OOD AUC ceiling" />
            <StatBlock value="3.6×" label="Label shift ratio" />
            <StatBlock value="10" label="Experimental phases" />
          </div>
        </div>
      ),
    },
  },
  {
    number: "02",
    category: "Academic",
    name: "Fidak Blood Donation Management System",
    description:
      "A web-based blood donation management system for Saudi Arabia that allows donors to register, users to request blood, and admins to manage donors, requests, contact queries, and website content through a secure dashboard.",
    tech: "PHP, MySQL, Bootstrap, jQuery, CRUD",
    href: "https://github.com/iiYARA/fidak-blood-donation-management-system",
    buttonLabel: "View GitHub",
    customBoxes: {
      topLeft: (
        <img src={fidakDonor} alt="Become a Blood Donor screen" className="w-full h-full object-cover" />
      ),
      bottomLeft: (
        <img src={fidakAdmin} alt="Admin Dashboard screen" className="w-full h-full object-cover" />
      ),
      right: (
        <img src={fidakHome} alt="Fidak Home Page" className="w-full h-full object-cover" />
      ),
    },
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
    <div className="flex h-full items-start justify-center px-4 sm:px-6 md:px-10">
      <motion.div
        style={{ scale, y, willChange: "transform", transformOrigin: "top center" }}
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
                className="uppercase tracking-[0.25em] text-white/80 font-semibold text-xs sm:text-sm md:text-base"
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
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-[#793951] text-[#793951] hover:bg-[rgba(121,57,81,0.1)] transition-colors px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest cursor-pointer whitespace-nowrap"
              >
                View Project
              </a>
            ) : (
              <button className="rounded-full border border-[#793951] text-[#793951] hover:bg-[rgba(121,57,81,0.1)] transition-colors px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest cursor-pointer whitespace-nowrap">
                View Project
              </button>
            )}
          </div>
        </div>

        {/* Bottom row: 2 small left, 1 big right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 md:col-span-1">
            <div
              className="rounded-2xl sm:rounded-3xl aspect-[4/3] border border-[#793951]/30 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,182,205,0.4), rgba(255,220,232,0.25))",
              }}
            >
              {project.customBoxes?.topLeft}
            </div>
            <div
              className="rounded-2xl sm:rounded-3xl aspect-[4/3] border border-[#793951]/30 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,220,232,0.35), rgba(255,182,205,0.5))",
              }}
            >
              {project.customBoxes?.bottomLeft}
            </div>
          </div>
          <div className="md:col-span-2">
            <div
              className="rounded-2xl sm:rounded-3xl w-full h-full min-h-[200px] sm:min-h-[260px] md:min-h-[340px] border border-[#793951]/30 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,200,221,0.45), rgba(255,182,205,0.35))",
              }}
            >
              {project.customBoxes?.right}
            </div>
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
      className="relative z-10"
    >
      {/* Heading */}
      <div className="pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 md:pb-16 px-5 flex justify-center">
        <FadeIn y={40}>
          <h2
            className="font-black uppercase tracking-tight leading-none text-center text-transparent"
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
              WebkitTextStroke: "1.5px #793951",
            }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {/* Sticky stacking cards — overlapping deck */}
      <div className="relative pb-32">
        {projects.map((project, i) => {
          // Each card's "active" scroll window is its slice of the track.
          // While the NEXT card is sliding up, this card scales down + lifts.
          const start = i / totalCards;
          const end = (i + 1) / totalCards;
          // Last card stays at scale 1; each earlier card shrinks per card on top of it.
          const targetScale = 1 - (totalCards - i - 1) * 0.05;
          const targetY = -(totalCards - i - 1) * 20;
          return (
            <div
              key={project.number}
              className="sticky"
              style={{
                top: `calc(80px + ${i * 20}px)`,
                zIndex: i + 1,
                height: "100vh",
                // pull each subsequent sticky card up so it overlaps the previous one
                marginTop: i === 0 ? 0 : "-40vh",
              }}
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
