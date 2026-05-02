import { useEffect } from "react";
import p5 from "p5";

export default function MusicSketch() {
  useEffect(() => {
    const sketch = (p: any) => {
      let oscillator;
      let playing = false;
      let currentNote = -1;
      let tempoMultiplier = 300;

      const melody = [
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

      const noteFreq: any = {
        D3: 146.83,
        E3: 164.81,
        "F#3": 185,
        G3: 196,
        A3: 220,
        B3: 246.94,
        C4: 261.63,
        D4: 293.66,
        E4: 329.63,
        F4: 349.23,
        "F#4": 369.99,
        G4: 392,
        A4: 440,
        B4: 493.88,
      };

      let symbols = ["♪", "♫", "☆", "+", ".", "*", "~"];
      let notes: any[] = [];

      p.setup = () => {
        const canvas = p.createCanvas(1000, 500);
        canvas.parent("sketch-container");

        oscillator = new p5.Oscillator("square");
        oscillator.amp(0);

        for (let i = 0; i < 60; i++) {
          notes.push({
            x: p.random(p.width),
            y: p.random(p.height),
            char: p.random(symbols),
            size: p.random(14, 28),
            color: p.random(["#FA36A3", "#6FB5B6", "#D92731", "#ffffff"]),
          });
        }

        p.textAlign(p.CENTER, p.CENTER);
      };

      p.draw = () => {
        p.background("#1B191B");

        for (let n of notes) {
          p.fill(n.color);
          p.textSize(n.size);
          p.text(n.char, n.x, n.y);

          n.y += 0.2;
          if (n.y > p.height) n.y = 0;
        }

        p.fill("#ffffff");
        p.textSize(20);
        p.text("play song", p.width / 2, p.height / 2);
      };

      function playNote(i: number) {
        if (i >= melody.length) {
          oscillator.amp(0, 0.2);
          return;
        }

        let n = melody[i];
        oscillator.freq(noteFreq[n.note]);
        oscillator.amp(0.3, 0.05);

        setTimeout(
          () => {
            oscillator.amp(0, 0.05);
          },
          n.dur * tempoMultiplier - 50,
        );

        setTimeout(() => playNote(i + 1), n.dur * tempoMultiplier);
      }

      p.mousePressed = () => {
        if (p.getAudioContext().state !== "running") {
          p.getAudioContext().resume();
        }

        if (!playing) {
          oscillator.start();
          playing = true;
          playNote(0);
        }
      };
    };

    const instance = new p5(sketch);

    return () => instance.remove();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "120px 0" }}>
      <h2 style={{ color: "#fff", marginBottom: "10px" }}>Designing harmony, one pixel at a time.</h2>
      <p style={{ color: "#aaa", marginBottom: "40px" }}>Play a song that holds a special place in my heart</p>

      <div id="sketch-container"></div>
    </div>
  );
}
