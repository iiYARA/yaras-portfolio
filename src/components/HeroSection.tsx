import FadeIn from "./FadeIn";
import yaraAvatar from "@/assets/yara-avatar.png";

const navButtons = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-16"
    style={{ background: "linear-gradient(180deg, #FFF0F5 0%, #FFE4EF 40%, #FCD5E6 100%)" }}>
    
    {/* Floating decorative circles */}
    <div className="absolute top-[10%] left-[8%] w-20 h-20 rounded-full bg-pink-200/40 blur-xl animate-pulse" />
    <div className="absolute top-[20%] right-[12%] w-14 h-14 rounded-full bg-purple-200/30 blur-lg animate-pulse" style={{ animationDelay: "1s" }} />
    <div className="absolute bottom-[15%] left-[15%] w-16 h-16 rounded-full bg-pink-100/50 blur-xl animate-pulse" style={{ animationDelay: "2s" }} />
    <div className="absolute bottom-[25%] right-[8%] w-10 h-10 rounded-full bg-purple-100/40 blur-lg animate-pulse" style={{ animationDelay: "0.5s" }} />

    {/* Avatar */}
    <FadeIn delay={0.1} y={20} className="mb-6">
      <img
        src={yaraAvatar}
        alt="Yara Avatar"
        width={512}
        height={512}
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/80 shadow-lg"
      />
    </FadeIn>

    {/* Main heading */}
    <FadeIn delay={0.2} y={30}>
      <h1 className="hero-heading font-black uppercase tracking-tight text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm Yara
      </h1>
    </FadeIn>

    {/* Subheading */}
    <FadeIn delay={0.3} y={20}>
      <p className="mt-3 text-center text-sm sm:text-base md:text-lg font-medium tracking-wide"
        style={{ color: "#9B6B8A" }}>
        Computer Science Student &nbsp;|&nbsp; Effat University
      </p>
    </FadeIn>

    {/* Description */}
    <FadeIn delay={0.4} y={20}>
      <p className="mt-5 text-center max-w-md sm:max-w-lg md:max-w-xl text-sm sm:text-base leading-relaxed font-light"
        style={{ color: "#7A5A6B" }}>
        I am a junior Computer Science student at Effat University with a strong interest in Artificial Intelligence. My academic journey has provided me with a strong foundation in programming, problem-solving, and data analysis.
      </p>
    </FadeIn>

    {/* Navigation Buttons */}
    <FadeIn delay={0.55} y={20} className="mt-10">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {navButtons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className="nav-pill-btn rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium tracking-wide cursor-pointer transition-all duration-300"
          >
            {btn.label}
          </a>
        ))}
      </div>
    </FadeIn>
  </section>
);

export default HeroSection;
