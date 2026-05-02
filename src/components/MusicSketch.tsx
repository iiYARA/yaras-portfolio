import { useEffect } from "react";
import p5 from "p5";

export default function MusicSketch() {
  useEffect(() => {
    const sketch = (p: any) => {
      let oscillator;
      let playing = false;
      let currentNote = -1;
      let tempoMultiplier = 300;
      let draggedNoteIndex = -1;
      let hasTriggered = false;
      let animationTimer = 0;
      let lastHoveredIndex = -1;

      const MAX_WIDTH = 1280;
      const MAX_HEIGHT = 600;

      let melody = [
        { note: "D4", dur: 3 },
        { note: "B4", dur: 3 },
        { note: "G3", dur: 3 },
        { note: "D3", dur: 3 },
        { note: "E3", dur: 1 },
        { note: "F#3", dur: 1 },
        { note: "G3", dur: 1 },
        { note: "E3", dur: 1.5 },
        { note: "G3", dur: 1.5 },
        { note: "D3", dur: 3 },
      ];

      let celestialSymbols = ["♪", "♫", "☆", "+", "~", "."];

      p.setup = () => {
        let w = Math.min(p.windowWidth, MAX_WIDTH);
        let h = Math.min(p.windowHeight * 0.5, MAX_HEIGHT);

        let cnv = p.createCanvas(w, h);
        cnv.parent("sketch-container");

        cnv.style("background", "transparent");

        oscillator = new p5.Oscillator("square");
        oscillator.amp(0);

        for (let n of melody) {
          n.x = p.random(w);
          n.y = p.random(h);
          n.char = p.random(celestialSymbols);
        }

        p.textAlign(p.CENTER, p.CENTER);
      };

      p.draw = () => {
        p.clear();

        for (let n of melody) {
          p.fill("#ffffff");
          p.textSize(24);
          p.text(n.char, n.x, n.y);
        }

        p.fill("#ffffff");
        p.text("play song", p.width / 2, p.height / 2);
      };

      p.mousePressed = () => {
        if (p.getAudioContext().state !== "running") {
          p.getAudioContext().resume();
        }
      };
    };

    const instance = new p5(sketch);

    return () => instance.remove();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "120px 0" }}>
      <h2 style={{ color: "#fff" }}>Designing harmony, one pixel at a time.</h2>

      <p style={{ color: "#aaa" }}>Play a song that holds a special place in my heart</p>

      <div id="sketch-container"></div>
    </div>
  );
}
