import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import "./GiftUnwrap.css";

type GiftPhase =
  | "idle"
  | "unwrapping"
  | "opening"
  | "revealing"
  | "transitioning"
  | "done";

interface GiftUnwrapProps {
  onComplete: () => void;
}

/* ─── Petal config ─── */

const PETAL_COLORS = [
  "#e63946",
  "#ff6b81",
  "#ffb7c5",
  "#b19cd9",
  "#ff8fa3",
  "#d4a5d0",
];

interface PetalConfig {
  left: number;
  size: number;
  delay: number;
  duration: number;
  sway: number;
  rotation: number;
  color: string;
}

/* ─── Star config ─── */

interface StarConfig {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

/* ─── Confetti particle ─── */

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  shape: "circle" | "heart" | "rect";
  life: number;
}

const CONFETTI_COLORS = [
  "#E63946",
  "#FFB7C5",
  "#B19CD9",
  "#FFD700",
  "#FF6B81",
  "#FFFFFF",
];

/* ─── Draw a small heart on canvas ─── */

function drawHeart(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number
) {
  const s = size / 2;
  ctx.beginPath();
  ctx.moveTo(x, y + s * 0.3);
  ctx.bezierCurveTo(x, y - s * 0.5, x - s, y - s * 0.5, x - s, y + s * 0.1);
  ctx.bezierCurveTo(x - s, y + s * 0.6, x, y + s, x, y + s);
  ctx.bezierCurveTo(x, y + s, x + s, y + s * 0.6, x + s, y + s * 0.1);
  ctx.bezierCurveTo(x + s, y - s * 0.5, x, y - s * 0.5, x, y + s * 0.3);
  ctx.closePath();
  ctx.fill();
}

/* ─── Main Component ─── */

export function GiftUnwrap({ onComplete }: GiftUnwrapProps) {
  const [phase, setPhase] = useState<GiftPhase>("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<ConfettiParticle[]>([]);
  const rafRef = useRef<number>(0);

  // Skip animation for reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      onComplete();
    }
  }, [onComplete]);

  // Lock body scroll while overlay is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Escape key to skip
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onComplete();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onComplete]);

  // Generate petals
  const petals = useMemo<PetalConfig[]>(() => {
    const result: PetalConfig[] = [];
    for (let i = 0; i < 18; i++) {
      result.push({
        left: Math.random() * 100,
        size: 8 + Math.random() * 14,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        sway: -40 + Math.random() * 80,
        rotation: 180 + Math.random() * 360,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
      });
    }
    return result;
  }, []);

  // Generate stars
  const stars = useMemo<StarConfig[]>(() => {
    const result: StarConfig[] = [];
    for (let i = 0; i < 30; i++) {
      result.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 3,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.7,
      });
    }
    return result;
  }, []);

  // Confetti fire function
  const fireConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width / 2;
    const cy = canvas.height * 0.45;
    const particles: ConfettiParticle[] = [];

    for (let i = 0; i < 80; i++) {
      const angle = (Math.PI * 2 * i) / 80 + (Math.random() - 0.5) * 0.5;
      const speed = 4 + Math.random() * 12;
      const shapes: ConfettiParticle["shape"][] = ["circle", "heart", "rect"];
      particles.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        size: 4 + Math.random() * 8,
        color:
          CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        rotationSpeed: -6 + Math.random() * 12,
        opacity: 1,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        life: 1,
      });
    }

    particlesRef.current = particles;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = 0;

      for (const p of particlesRef.current) {
        if (p.life <= 0) continue;
        alive++;

        p.vy += 0.15; // gravity
        p.vx *= 0.99; // air resistance
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.life -= 0.006;
        p.opacity = Math.max(0, p.life);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.shape === "circle") {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "heart") {
          ctx.fillStyle = p.color;
          drawHeart(ctx, 0, 0, p.size);
        } else {
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.65);
        }

        ctx.restore();
      }

      if (alive > 0) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Phase transition chain
  const handleTap = useCallback(() => {
    if (phase !== "idle") return;

    if (navigator.vibrate) navigator.vibrate(50);

    setPhase("unwrapping");

    setTimeout(() => setPhase("opening"), 800);

    setTimeout(() => {
      setPhase("revealing");
      fireConfetti();
    }, 1700);

    setTimeout(() => setPhase("transitioning"), 4000);

    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 5000);
  }, [phase, onComplete, fireConfetti]);

  if (phase === "done") return null;

  return (
    <div
      className={`gift-overlay phase-${phase}`}
      onClick={handleTap}
      role="button"
      tabIndex={0}
      aria-label="Натисни, щоб розпакувати подарунок"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleTap();
      }}
    >
      {/* Stars background */}
      <div className="gift-stars" aria-hidden="true">
        {stars.map((s, i) => (
          <div
            key={i}
            className="gift-star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              ["--star-size" as string]: `${s.size}px`,
              ["--star-delay" as string]: `${s.delay}s`,
              ["--star-duration" as string]: `${s.duration}s`,
              ["--star-opacity" as string]: s.opacity,
            }}
          />
        ))}
      </div>

      {/* Rose petals */}
      <div className="gift-petals" aria-hidden="true">
        {petals.map((p, i) => (
          <div
            key={i}
            className="gift-petal"
            style={{
              left: `${p.left}%`,
              background: p.color,
              ["--petal-size" as string]: `${p.size}px`,
              ["--petal-delay" as string]: `${p.delay}s`,
              ["--petal-duration" as string]: `${p.duration}s`,
              ["--petal-sway" as string]: `${p.sway}px`,
              ["--petal-rotation" as string]: `${p.rotation}deg`,
            }}
          />
        ))}
      </div>

      {/* Content that fades out during reveal */}
      <div className="gift-content">
        {/* Text above */}
        <p className="gift-text-above">Анечко, у мене є щось для тебе...</p>

        {/* Gift scene */}
        <div className="gift-scene">
          {/* Gift box */}
          <div className={`gift-box phase-${phase}`}>
            {/* Bow */}
            <div className="gift-bow">
              <svg
                width="80"
                height="60"
                viewBox="0 0 80 60"
                fill="none"
                aria-hidden="true"
              >
                {/* Left loop */}
                <ellipse
                  cx="25"
                  cy="22"
                  rx="18"
                  ry="14"
                  fill="#FFD700"
                  transform="rotate(-15 25 22)"
                />
                <ellipse
                  cx="25"
                  cy="22"
                  rx="14"
                  ry="10"
                  fill="#FFC300"
                  transform="rotate(-15 25 22)"
                />
                {/* Right loop */}
                <ellipse
                  cx="55"
                  cy="22"
                  rx="18"
                  ry="14"
                  fill="#FFD700"
                  transform="rotate(15 55 22)"
                />
                <ellipse
                  cx="55"
                  cy="22"
                  rx="14"
                  ry="10"
                  fill="#FFC300"
                  transform="rotate(15 55 22)"
                />
                {/* Center knot */}
                <ellipse cx="40" cy="25" rx="8" ry="10" fill="#DAA520" />
                <ellipse cx="40" cy="25" rx="6" ry="8" fill="#B8860B" />
                {/* Left tail */}
                <path
                  d="M32 30 Q20 45 10 55"
                  stroke="#FFD700"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Right tail */}
                <path
                  d="M48 30 Q60 45 70 55"
                  stroke="#FFD700"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Lid */}
            <div className="gift-lid">
              <div className="gift-ribbon-v-lid" />
            </div>

            {/* Body */}
            <div className="gift-body">
              <div className="gift-ribbon-v" />
              <div className="gift-ribbon-h" />
              <div className="gift-glow" />
            </div>
          </div>
        </div>

        {/* Instruction text */}
        {phase === "idle" && (
          <p className="gift-text-below">Натисни, щоб розпакувати 💝</p>
        )}
      </div>

      {/* Valentine greeting — independent, stays centered when content fades */}
      <div className="gift-heart-card">
        <svg
          className="gift-heart-shape"
          viewBox="0 0 100 90"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="heart-grad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#ffb7c5" />
              <stop offset="50%" stopColor="#ff6b81" />
              <stop offset="100%" stopColor="#e63946" />
            </linearGradient>
          </defs>
          <path
            d="M50 85 C25 60 0 45 0 25 C0 10 10 0 25 0 C35 0 45 8 50 18 C55 8 65 0 75 0 C90 0 100 10 100 25 C100 45 75 60 50 85Z"
            fill="url(#heart-grad)"
          />
        </svg>
        <span className="gift-heart-card-title">
          З Днем Святого Валентина<span className="gift-exclaim">!</span>
        </span>
      </div>

      {/* Confetti canvas */}
      <canvas ref={canvasRef} className="gift-confetti-canvas" />
    </div>
  );
}
