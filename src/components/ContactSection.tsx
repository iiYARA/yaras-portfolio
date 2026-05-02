import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import FadeIn from "./FadeIn";

type Contact = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  Icon: typeof Linkedin;
};

const contacts: Contact[] = [
  {
    label: "LinkedIn",
    value: "Yara Mohammad",
    href: "https://www.linkedin.com/in/yara-mohammad-a09996334/",
    external: true,
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/iiYARA",
    href: "https://github.com/iiYARA",
    external: true,
    Icon: Github,
  },
  {
    label: "Email",
    value: "YaraMohammadSA@gmail.com",
    href: "mailto:YaraMohammadSA@gmail.com",
    Icon: Mail,
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative z-10 py-16 sm:py-20 md:py-24 px-5"
    >
      <div className="max-w-[1100px] mx-auto">
        <FadeIn y={40}>
          <h2
            className="font-black uppercase tracking-tight leading-none text-center text-transparent mb-14 sm:mb-20"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 110px)",
              WebkitTextStroke: "1.5px #793951",
            }}
          >
            Contact
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {contacts.map(({ label, value, href, external, Icon }, i) => (
            <FadeIn key={label} y={40} delay={i * 0.1}>
              <motion.a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 40px rgba(121,57,81,0.25)",
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="block rounded-3xl border-2 border-[#793951] p-6 sm:p-8 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,200,221,0.55) 0%, rgba(255,182,205,0.35) 50%, rgba(255,220,232,0.5) 100%)",
                  backdropFilter: "blur(24px) saturate(1.4)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.4)",
                  boxShadow: "0 8px 32px rgba(121,57,81,0.12)",
                }}
              >
                <div
                  className="mx-auto mb-4 flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#793951]"
                  style={{ background: "rgba(255,255,255,0.45)" }}
                >
                  <Icon size={26} color="#793951" strokeWidth={2} />
                </div>
                <h3
                  className="font-bold uppercase text-[#793951] tracking-wide mb-1"
                  style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)" }}
                >
                  {label}
                </h3>
                <p
                  className="font-medium text-[#793951]/80 break-words"
                  style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}
                >
                  {value}
                </p>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
