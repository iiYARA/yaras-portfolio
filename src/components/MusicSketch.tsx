import { useEffect } from "react";
import p5 from "p5";

export default function MusicSketch() {
  useEffect(() => {
    const sketch = (p: any) => {
      let oscillator: any;
      let playing = false;

      p.setup = () => {
        const canvas = p.createCanvas(900, 400);
        canvas.parent("sketch-container");

        oscillator = new (p5 as any).Oscillator("square");
        oscillator.amp(0);
      };

      p.draw = () => {
        p.background("#f6a5b5");

        p.fill("#793951");
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(18);
        p.text("click to play ✧", p.width / 2, p.height / 2);
      };

      p.mousePressed = () => {
        if (p.getAudioContext().state !== "running") {
          p.getAudioContext().resume();
        }

        if (!playing) {
          oscillator.start();
          oscillator.freq(440);
          oscillator.amp(0.3, 0.2);
          playing = true;
        } else {
          oscillator.amp(0, 0.2);
          playing = false;
        }
      };
    };

    const instance = new p5(sketch);

    return () => {
      instance.remove();
    };
  }, []);

  return (
    <div
      id="sketch-container"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "80px 0",
      }}
    />
  );
}
