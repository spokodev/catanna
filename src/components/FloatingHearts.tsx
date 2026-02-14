import { useMemo } from "react";
import "./FloatingHearts.css";

const COLORS = [
  "rgba(230, 57, 70, 0.25)",
  "rgba(255, 183, 197, 0.35)",
  "rgba(177, 156, 217, 0.3)",
  "rgba(255, 107, 129, 0.25)",
  "rgba(255, 200, 160, 0.3)",
  "rgba(255, 154, 158, 0.3)",
  "rgba(220, 180, 255, 0.25)",
];

interface Particle {
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  color: string;
  blur: number;
  driftX: number;
  driftY: number;
  kind: "bokeh" | "sparkle";
}

export function FloatingHearts() {
  const particles = useMemo(() => {
    const result: Particle[] = [];

    // Bokeh circles — soft blurred orbs
    for (let i = 0; i < 18; i++) {
      result.push({
        size: 30 + Math.random() * 100,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 22,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        blur: 20 + Math.random() * 40,
        driftX: -30 + Math.random() * 60,
        driftY: -30 + Math.random() * 60,
        kind: "bokeh",
      });
    }

    // Sparkles — tiny bright dots
    for (let i = 0; i < 8; i++) {
      result.push({
        size: 3 + Math.random() * 5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 4 + Math.random() * 6,
        color: "rgba(255, 255, 255, 0.8)",
        blur: 0,
        driftX: -5 + Math.random() * 10,
        driftY: -5 + Math.random() * 10,
        kind: "sparkle",
      });
    }

    return result;
  }, []);

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map((p, i) => (
        <div
          key={i}
          className={`particle particle--${p.kind}`}
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            backgroundColor: p.color,
            filter: p.blur > 0 ? `blur(${p.blur}px)` : "none",
            ["--drift-x" as string]: `${p.driftX}px`,
            ["--drift-y" as string]: `${p.driftY}px`,
          }}
        />
      ))}
    </div>
  );
}
