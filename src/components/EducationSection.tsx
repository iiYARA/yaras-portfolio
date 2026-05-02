import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

type Item = {
  title: string;
  subtitle: string;
  side: "left" | "right";
};

const items: Item[] = [
  {
    title: "High School Diploma",
    subtitle: "2018 – 2022 | Dar Al Bushra Private Schools",
    side: "left",
  },
  {
    title: "Bachelor's in Computer Science",
    subtitle: "2022 – Present | Effat University",
    side: "right",
  },
];

const Card = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(244,166,184,0.45)" }}
    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    className="rounded-2xl p-6 sm:p-7 border border-white/30"
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,200,221,0.12) 100%)",
      backdropFilter: "blur(20px) saturate(1.4)",
      WebkitBackdropFilter: "blur(20px) saturate(1.4)",
      boxShadow:
        "0 8px 32px rgba(121,57,81,0.18), 0 0 24px rgba(244,166,184,0.25)",
    }}
  >
    <h3
      className="font-bold text-white mb-2"
      style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)" }}
    >
      {title}
    </h3>
    <p
      className="font-medium"
      style={{
        color: "#FFE3EC",
        fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
      }}
    >
      {subtitle}
    </p>
  </motion.div>
);

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative z-10 py-16 sm:py-20 md:py-24 px-5"
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <FadeIn y={40}>
          <h2
            className="font-black uppercase tracking-tight leading-none text-center text-transparent mb-14 sm:mb-20"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 110px)",
              WebkitTextStroke: "1.5px #793951",
            }}
          >
            Education
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Center timeline line - desktop */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(244,166,184,0) 0%, #F4A6B8 10%, #F4A6B8 90%, rgba(244,166,184,0) 100%)",
              boxShadow: "0 0 12px rgba(244,166,184,0.6)",
            }}
          />
          {/* Left timeline line - mobile */}
          <div
            className="md:hidden absolute left-5 top-0 bottom-0 w-[3px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(244,166,184,0) 0%, #F4A6B8 10%, #F4A6B8 90%, rgba(244,166,184,0) 100%)",
              boxShadow: "0 0 12px rgba(244,166,184,0.6)",
            }}
          />

          <ul className="flex flex-col gap-12 sm:gap-16">
            {items.map((item, i) => (
              <li
                key={item.title}
                className="relative md:grid md:grid-cols-2 md:gap-12 items-center pl-12 md:pl-0"
              >
                {/* Node */}
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{
                    delay: 0.15 + i * 0.1,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute left-5 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full border-2 border-white"
                  style={{
                    background: "#F4A6B8",
                    boxShadow:
                      "0 0 0 4px rgba(244,166,184,0.25), 0 0 20px rgba(244,166,184,0.7)",
                  }}
                />

                {item.side === "left" ? (
                  <>
                    <FadeIn x={-60} y={0} duration={0.8} delay={i * 0.1}>
                      <Card title={item.title} subtitle={item.subtitle} />
                    </FadeIn>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <FadeIn x={60} y={0} duration={0.8} delay={i * 0.1}>
                      <Card title={item.title} subtitle={item.subtitle} />
                    </FadeIn>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
