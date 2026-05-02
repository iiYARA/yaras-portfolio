import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import bgPink from "@/assets/about/pink_radial_bg.png";

type Skill = { name: string; tooltip: string };
type Group = { title: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", tooltip: "Used for machine learning & data analysis" },
      { name: "Java", tooltip: "Object-oriented programming" },
      { name: "C++", tooltip: "Core programming and problem solving" },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "HTML", tooltip: "Structure of web pages" },
      { name: "CSS", tooltip: "Styling and layout" },
      { name: "JavaScript", tooltip: "Interactive web features" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", tooltip: "Version control" },
      { name: "GitHub", tooltip: "Project hosting & collaboration" },
      { name: "VS Code", tooltip: "Development environment" },
      { name: "Google Colab", tooltip: "Running ML and data notebooks" },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "MySQL", tooltip: "Database management" }],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] py-20 sm:py-24 md:py-28 px-5"
      style={{
        backgroundImage: `url(${bgPink})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <FadeIn y={40}>
          <h2
            className="font-black uppercase tracking-tight leading-none text-center text-transparent mb-12 sm:mb-16"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 110px)",
              WebkitTextStroke: "1.5px #793951",
            }}
          >
            Skills &amp; Tools
          </h2>
        </FadeIn>

        <TooltipProvider delayDuration={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {groups.map((group, gi) => (
              <FadeIn key={group.title} delay={gi * 0.1} y={30}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 32px rgba(121,57,81,0.35)",
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-3xl border-2 border-[#793951] p-6 sm:p-8 h-full"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,200,221,0.55) 0%, rgba(255,182,205,0.35) 50%, rgba(255,220,232,0.5) 100%)",
                    backdropFilter: "blur(24px) saturate(1.4)",
                    WebkitBackdropFilter: "blur(24px) saturate(1.4)",
                    boxShadow: "0 8px 32px rgba(121,57,81,0.12)",
                    willChange: "transform",
                  }}
                >
                  <h3
                    className="font-bold uppercase text-[#793951] tracking-wide mb-5 sm:mb-6"
                    style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)" }}
                  >
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {group.skills.map((skill) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <motion.span
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm sm:text-base font-medium cursor-default select-none transition-colors"
                            style={{
                              background: "rgba(121,57,81,0.55)",
                              border: "1px solid rgba(121,57,81,0.6)",
                              willChange: "transform",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.background =
                                "rgba(121,57,81,0.95)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.background =
                                "rgba(121,57,81,0.55)";
                            }}
                          >
                            {skill.name}
                          </motion.span>
                        </TooltipTrigger>
                        <TooltipContent
                          side="bottom"
                          className="bg-[#793951] text-white border-[#793951]"
                        >
                          {skill.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default SkillsSection;
