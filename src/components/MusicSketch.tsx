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
      await loadScript("/sketch.js?v=10");
    };

    start();

    return () => {
      const container = document.getElementById("sketch-container");
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <section
      style={{
        textAlign: "center",
        padding: "120px 0",
        overflow: "hidden",
        position: "relative",
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
        }}
      >
        In 1961, the IBM 7094 performed “Daisy Bell” for the first time, transforming a simple tune into one of the earliest moments when technology began to feel almost alive.
      </p>

      <div
        id="sketch-container"
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      />
    </section>
  );
}
