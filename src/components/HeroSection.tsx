import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import jackAvatar from "@/assets/jack-avatar.png";
import bgGif from "@/assets/background_pic.gif";

const navLinks = ["About Me", "Education", "Projects", "Skills"];

const HeroSection = () => (
  <section className="h-screen flex flex-col relative" style={{ overflowX: "clip", backgroundImage: `url(${bgGif})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "repeat" }}>
    {/* Navbar */}
    <FadeIn delay={0} y={-20} className="px-6 md:px-10 pt-6 md:pt-8">
      <nav className="flex justify-between">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#FF85A2] font-semibold uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 drop-shadow-sm"
          >
            {link}
          </a>
        ))}
      </nav>
    </FadeIn>

    {/* Hero Heading */}
    <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
      <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] text-center">
        Hi, i&apos;m yara
      </h1>
      <p className="text-center text-[#FF85A2] font-medium tracking-wide mt-2 text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-sm">
        Computer Science Student | Effat University
      </p>
    </FadeIn>

    {/* Portrait */}
    <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
      <Magnet padding={200} strength={6}>
        <img
          src={jackAvatar}
          alt="Yara 3D Avatar"
          className="w-full h-auto drop-shadow-2xl animate-float"
        />
      </Magnet>
    </FadeIn>

    {/* Navigation Buttons */}
    <FadeIn delay={0.35} y={20} className="mt-auto pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {["Projects", "Skills", "Education", "About Me", "Contact"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase().replace(" ", "-")}`}
            className="liquid-glass-btn rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#FF85A2] cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            {label}
          </a>
        ))}
      </div>
    </FadeIn>
  </section>
);

export default HeroSection;
