import { useEffect } from "react";

export default function MusicSketch() {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    };

    const start = async () => {
      const container = document.getElementById("sketch-container");
      if (container) container.innerHTML = "";

      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js");
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.min.js");

      // Important for GitHub Pages:
      // This loads public/sketch.js from /yaras-portfolio/sketch.js
      await loadScript(`${import.meta.env.BASE_URL}sketch.js`);
    };

    start();

    return () => {
      const container = document.getElementById("sketch-container");
      if (container) container.innerHTML = "";

      const sketchScript = document.querySelector(
        `script[src="${import.meta.env.BASE_URL}sketch.js"]`
      );
      if (sketchScript) sketchScript.remove();
    };
  }, []);

  return (
    <section
      style={{
        textAlign: "center",
        padding: "120px 0",
        overflow: "hidden",
        position: "relative",
        background: "#793951",
      }}
    >
      <h2
        style={{
          color: "#ffffff",
          fontSize: "clamp(1.4rem, 2vw, 2rem)",
          fontWeight: 500,
          marginBottom: "12px",
        }}
      >
        When Computers Learned to Sing
      </h2>

      <p
        style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
          marginBottom: "48px",
          maxWidth: "800px",
          margin: "0 auto 48px",
          whiteSpace: "pre-line",
        }}
      >
        In 1961, the IBM 7094 performed “Daisy Bell” for the first time,{"\n"}
        transforming a simple tune into one of the earliest moments when
        technology began to feel almost alive!
      </p>

      <div
        id="sketch-container"
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "48px auto 0",
          padding: "0 32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          color: "rgba(255,255,255,0.75)",
          fontSize: "0.9rem",
        }}
      >
        <span>© 2026, Designed and programmed by Yara Mohammad ♡</span>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a
            href="https://www.linkedin.com/in/yara-mohammad-a09996334/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "inherit", display: "inline-flex" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>

          <a
            href="https://github.com/iiYARA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: "inherit", display: "inline-flex" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

          <a
            href="mailto:YaraMohammadSA@gmail.com"
            aria-label="Email"
            style={{ color: "inherit", display: "inline-flex" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
