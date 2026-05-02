import { useEffect } from "react";
import p5 from "p5";

export default function MusicSketch() {
  useEffect(() => {
    let instance: any;

    function initSketch() {
      const sketch = function (p: any) {
        let oscillator: any;
        let playing = false;
        let currentNote = -1;
        let tempoMultiplier = 300;
        let draggedNoteIndex = -1;
        let hasTriggered = false;
        let animationTimer = 0;
        let lastHoveredIndex = -1;

        const MAX_WIDTH = 1280;
        const MAX_HEIGHT = 600;

        let melody: any[] = [
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
          { note: "A4", dur: 3 },
          { note: "D4", dur: 3 },
          { note: "B4", dur: 3 },
          { note: "G3", dur: 3 },
          { note: "E3", dur: 1 },
          { note: "G3", dur: 1 },
          { note: "G3", dur: 1 },
          { note: "A4", dur: 2 },
          { note: "B4", dur: 1 },
          { note: "A4", dur: 3 },
          { note: "B4", dur: 1 },
          { note: "C4", dur: 1 },
          { note: "B4", dur: 1 },
          { note: "A4", dur: 1 },
          { note: "D4", dur: 2 },
          { note: "B4", dur: 1 },
          { note: "A4", dur: 1 },
          { note: "G3", dur: 3 },
          { note: "A4", dur: 1 },
          { note: "B4", dur: 2 },
          { note: "G3", dur: 1 },
          { note: "E3", dur: 2 },
          { note: "G3", dur: 1 },
          { note: "E3", dur: 1 },
          { note: "D3", dur: 3 },
          { note: "E3", dur: 1 },
          { note: "G3", dur: 2 },
          { note: "B4", dur: 1 },
          { note: "A4", dur: 2 },
          { note: "D3", dur: 1 },
          { note: "G3", dur: 2 },
          { note: "B4", dur: 1 },
          { note: "A4", dur: 2 },
          { note: "B4", dur: 1 },
          { note: "C4", dur: 1 },
          { note: "D4", dur: 1 },
          { note: "B4", dur: 1 },
          { note: "G3", dur: 2 },
          { note: "A3", dur: 1 },
          { note: "A3", dur: 1 },
          { note: "G3", dur: 6 },
        ];

        let celestialSymbols = [
          "@","♪","^","☆","♡","<","#","＊","&","!","+","~","=","?","%","♫","o","•","."
        ];

        p.setup = function () {
          let w = Math.min(p.windowWidth, MAX_WIDTH);
          let h = Math.min(p.windowHeight * 0.6, MAX_HEIGHT);

          let cnv = p.createCanvas(w, h);
          cnv.parent("sketch-container");
          cnv.style("background", "transparent");

          try {
            oscillator = new (p5 as any).Oscillator("square");
            oscillator.amp(0);
          } catch (e) {
            oscillator = null;
          }

          for (let n of melody) {
            n.x = p.random(w);
            n.y = p.random(h);
            n.char = p.random(celestialSymbols);
          }

          p.textAlign(p.CENTER, p.CENTER);
        };

        p.draw = function () {
          p.clear();

          for (let n of melody) {
            p.fill("#ffffff");
            p.textSize(24);
            p.text(n.char, n.x, n.y);
          }

          p.fill("#ffffff");
          p.text("play song", p.width / 2, p.height / 2);
        };

        p.mousePressed = function () {
          if (p.getAudioContext && p.getAudioContext().state !== "running") {
            p.getAudioContext().resume();
          }
        };
      };

      const container = document.getElementById("sketch-container");
      if (container) {
        instance = new p5(sketch, container);
      }
    }

    initSketch();

    return () => {
      if (instance && instance.remove) instance.remove();
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center px-6" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-foreground">
        Designing harmony, one pixel at a time.
      </h2>
      <p className="text-base md:text-lg text-muted-foreground mb-10">
        Play a song that holds a special place in my heart
      </p>
      <div id="sketch-container" className="w-full flex justify-center" />
    </section>
  );
}
