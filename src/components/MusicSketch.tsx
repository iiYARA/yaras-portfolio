import { useEffect, useRef } from "react";
import p5 from "p5";

type MelodyNote = {
  note: keyof typeof noteFrequencies;
  dur: number;
};

type VisualNote = {
  x: number;
  y: number;
  char: string;
};

const noteFrequencies = {
  D4: 293.66,
  B4: 493.88,
  G3: 196,
  D3: 146.83,
  E3: 164.81,
  "F#3": 185,
} as const;

export default function MusicSketch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let audioCtx: AudioContext | null = null;
    const noteTimers: number[] = [];

    const sketch = (p: p5) => {
      let playing = false;
      const tempoMultiplier = 300;

      const MAX_WIDTH = 1280;
      const MAX_HEIGHT = 600;

      const melody: MelodyNote[] = [
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

      const celestialSymbols = ["♪", "♫", "☆", "+", "~", "."];
      let visualNotes: VisualNote[] = [];

      const playNote = (index: number) => {
        if (!audioCtx || index >= melody.length) {
          playing = false;
          return;
        }

        const current = melody[index];
        const now = audioCtx.currentTime;
        const duration = current.dur * 0.18;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "square";
        osc.frequency.setValueAtTime(noteFrequencies[current.note], now);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + duration);

        noteTimers.push(window.setTimeout(() => playNote(index + 1), current.dur * tempoMultiplier));
      };

      const startSong = async () => {
        audioCtx ??= new AudioContext();
        if (audioCtx.state !== "running") {
          await audioCtx.resume();
        }

        if (!playing) {
          playing = true;
          playNote(0);
        }
      };

      p.setup = () => {
        let w = Math.min(p.windowWidth, MAX_WIDTH);
        let h = Math.min(p.windowHeight * 0.5, MAX_HEIGHT);

        let cnv = p.createCanvas(w, h);
        if (containerRef.current) {
          cnv.parent(containerRef.current);
        }

        cnv.style("background", "transparent");

        visualNotes = melody.map(() => ({
          x: p.random(w),
          y: p.random(h),
          char: p.random(celestialSymbols),
        }));

        p.textAlign(p.CENTER, p.CENTER);
      };

      p.draw = () => {
        p.clear();

        for (let n of visualNotes) {
          p.fill("#ffffff");
          p.textSize(24);
          p.text(n.char, n.x, n.y);
        }

        p.fill("#ffffff");
        p.text("play song", p.width / 2, p.height / 2);
      };

      p.mousePressed = async () => {
        await startSong();
      };
    };

    const instance = new p5(sketch);

    return () => {
      noteTimers.forEach(window.clearTimeout);
      void audioCtx?.close();
      instance.remove();
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "120px 0" }}>
      <h2 style={{ color: "#fff" }}>Designing harmony, one pixel at a time.</h2>

      <p style={{ color: "#aaa" }}>Play a song that holds a special place in my heart</p>

      <div ref={containerRef}></div>
    </div>
  );
}
