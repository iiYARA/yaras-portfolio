import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import jackAvatar from "@/assets/jack-avatar.png";
import bgGif from "@/assets/background_pic.gif";

const navButtons = ["Projects", "Skills", "Education", "About Me", "Contact"];

const HeroSection = () => (
  <section className="h-screen flex flex-col items-center justify-center relative" style={{ overflowX: "clip", backgroundImage: `url(${bgGif})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "repeat" }}>
    {/* Portrait */}
    <FadeIn delay={0.3} y={30} className="absolute left-1/2 -translate-x-1/2 z-0 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] opacity-30">
      <Magnet padding={150} strength={3}>
        <img
          src={jackAvatar}
          alt="Yara 3D Avatar"
          className="w-full h-auto drop-shadow-2xl"
        />
      </Magnet>
    </FadeIn>

    {/* Center content */}
    <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
      <FadeIn delay={0.1} y={40}>
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw]">
          Hi, I&apos;m Yara
        </h1>
      </FadeIn>

      <FadeIn delay={0.25} y={20}>
        <p className="text-[#FF85A2] font-medium text-center tracking-wide" style={{ fontSize: "clamp(0.9rem, 2vw, 1.5rem)" }}>
          Computer Science Student | Effat University
        </p>
      </FadeIn>

      {/* Navigation Buttons */}
      <FadeIn delay={0.4} y={20}>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
          {navButtons.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(" ", "-")}`}
              className="liquid-glass-btn rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#FFB6C1] hover:text-white transition-colors duration-200 no-underline"
            >
              {label}
            </a>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
