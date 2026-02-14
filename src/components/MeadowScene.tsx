import { useMemo, useRef, useEffect, useCallback } from "react";
import "./MeadowScene.css";

/* ── Constants ── */
const SHEEP_WIDTH = 60;
const EXCITED_SPEED_MULTIPLIER = 2.5;
const EXCITEMENT_DURATION_MS = 2500;
const JUMP_DURATION_MS = 600;
const JUMP_HEIGHT_PX = 20;

/* ── Sheep config ── */
interface SheepConfig {
  speedFactor: number;
  bottom: number;
  scale: number;
  startFraction: number;
  startDir: 1 | -1;
}

const SHEEP_CONFIGS: readonly SheepConfig[] = [
  { speedFactor: 40, bottom: 38, scale: 0.85, startFraction: 0.15, startDir: 1 },
  { speedFactor: 55, bottom: 30, scale: 1.0, startFraction: 0.55, startDir: -1 },
  { speedFactor: 35, bottom: 44, scale: 0.7, startFraction: 0.8, startDir: 1 },
];

interface SheepMutable {
  x: number;
  direction: 1 | -1;
  speed: number;
  baseSpeed: number;
  excited: boolean;
  exciteEnd: number;
  jumpTime: number;
  jumpDuration: number;
}

function getBaseSpeed(speedFactor: number): number {
  return (window.innerWidth + 160) / speedFactor;
}

/* ── Animation hook ── */
function useSheepAnimation(configs: readonly SheepConfig[]) {
  const sheepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const states = useRef<SheepMutable[]>([]);
  const rafId = useRef(0);
  const lastTime = useRef(0);

  const excite = useCallback((index: number) => {
    const s = states.current[index];
    if (!s || s.excited) return;

    s.excited = true;
    s.speed = s.baseSpeed * EXCITED_SPEED_MULTIPLIER;
    s.exciteEnd = performance.now() + EXCITEMENT_DURATION_MS;
    s.jumpTime = JUMP_DURATION_MS;
    s.jumpDuration = JUMP_DURATION_MS;

    const el = sheepRefs.current[index];
    if (el) el.style.setProperty("--trot-speed", "0.3s");
  }, []);

  useEffect(() => {
    // Initialize mutable state
    states.current = configs.map((cfg) => {
      const baseSpeed = getBaseSpeed(cfg.speedFactor);
      return {
        x: window.innerWidth * cfg.startFraction,
        direction: cfg.startDir,
        speed: baseSpeed,
        baseSpeed,
        excited: false,
        exciteEnd: 0,
        jumpTime: 0,
        jumpDuration: JUMP_DURATION_MS,
      };
    });

    // Set initial positions
    configs.forEach((cfg, i) => {
      const el = sheepRefs.current[i];
      const s = states.current[i];
      if (el && s) {
        el.style.translate = `${s.x}px 0px`;
        el.style.scale = `${cfg.scale * s.direction} ${cfg.scale}`;
      }
    });

    const animate = (timestamp: number) => {
      if (!lastTime.current) lastTime.current = timestamp;
      const delta = Math.min(timestamp - lastTime.current, 50);
      lastTime.current = timestamp;

      for (let i = 0; i < configs.length; i++) {
        const s = states.current[i];
        const cfg = configs[i];
        const el = sheepRefs.current[i];
        if (!el || !s) continue;

        // Excitement expiry
        if (s.excited && timestamp > s.exciteEnd) {
          s.excited = false;
          s.speed = s.baseSpeed;
          el.style.setProperty("--trot-speed", "0.7s");
        }

        // Horizontal movement
        s.x += s.direction * s.speed * (delta / 1000);

        // Edge bouncing
        const maxX = window.innerWidth - SHEEP_WIDTH * cfg.scale;
        if (s.x >= maxX) {
          s.x = maxX;
          s.direction = -1;
        } else if (s.x <= 0) {
          s.x = 0;
          s.direction = 1;
        }

        // Jump vertical offset
        let jumpY = 0;
        if (s.jumpTime > 0) {
          s.jumpTime -= delta;
          if (s.jumpTime <= 0) {
            s.jumpTime = 0;
          } else {
            const progress = 1 - s.jumpTime / s.jumpDuration;
            jumpY =
              -JUMP_HEIGHT_PX *
              Math.abs(Math.sin(progress * Math.PI * 2)) *
              (1 - progress * 0.5);
          }
        }

        // Apply to DOM
        el.style.translate = `${s.x}px ${jumpY}px`;
        el.style.scale = `${cfg.scale * s.direction} ${cfg.scale}`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [configs]);

  return { sheepRefs, excite };
}

/* ── SVG Sheep (inline) ── */
function Sheep() {
  return (
    <svg width="60" height="45" viewBox="0 0 60 45" fill="none">
      {/* Body — fluffy cloud */}
      <ellipse cx="30" cy="22" rx="18" ry="14" fill="#FAFAFA" />
      <circle cx="17" cy="18" r="8" fill="#FAFAFA" />
      <circle cx="43" cy="18" r="8" fill="#FAFAFA" />
      <circle cx="25" cy="12" r="7" fill="#FAFAFA" />
      <circle cx="35" cy="12" r="7" fill="#FAFAFA" />
      <circle cx="30" cy="14" r="6" fill="#FAFAFA" />

      {/* Head */}
      <ellipse cx="48" cy="20" rx="7" ry="8" fill="#3D3D3D" />
      <circle cx="51" cy="18" r="1.5" fill="white" />
      {/* Ear */}
      <ellipse
        cx="44"
        cy="14"
        rx="3"
        ry="4"
        fill="#3D3D3D"
        transform="rotate(-15 44 14)"
      />

      {/* Legs (animated via CSS) */}
      <g className="sheep-legs-back">
        <rect x="20" y="32" width="3" height="12" rx="1.5" fill="#3D3D3D" />
        <rect x="37" y="32" width="3" height="12" rx="1.5" fill="#3D3D3D" />
      </g>
      <g className="sheep-legs-front">
        <rect x="26" y="32" width="3" height="12" rx="1.5" fill="#3D3D3D" />
        <rect x="31" y="32" width="3" height="12" rx="1.5" fill="#3D3D3D" />
      </g>
    </svg>
  );
}

/* ── SVG Flowers ── */
function Tulip({ color }: { color: string }) {
  return (
    <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
      <line x1="6" y1="24" x2="6" y2="10" stroke="#4ade80" strokeWidth="1.5" />
      <ellipse cx="6" cy="8" rx="4" ry="6" fill={color} />
      <ellipse cx="3.5" cy="10" rx="2.5" ry="4" fill={color} opacity="0.8" />
      <ellipse cx="8.5" cy="10" rx="2.5" ry="4" fill={color} opacity="0.8" />
    </svg>
  );
}

function Daisy() {
  return (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
      <line x1="7" y1="22" x2="7" y2="10" stroke="#4ade80" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="7"
          cy="5"
          rx="1.8"
          ry="4"
          fill="white"
          transform={`rotate(${angle} 7 7)`}
        />
      ))}
      <circle cx="7" cy="7" r="2.5" fill="#FBBF24" />
    </svg>
  );
}

function Poppy() {
  return (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
      <line x1="7" y1="22" x2="7" y2="10" stroke="#4ade80" strokeWidth="1.5" />
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="7"
          cy="4"
          rx="2.5"
          ry="4.5"
          fill="#E63946"
          transform={`rotate(${angle} 7 7)`}
        />
      ))}
      <circle cx="7" cy="7" r="2" fill="#2D3142" />
    </svg>
  );
}

const FLOWER_COMPONENTS = [
  () => <Tulip color="#FFB7C5" />,
  () => <Tulip color="#F9A8D4" />,
  () => <Daisy />,
  () => <Poppy />,
];

interface FlowerData {
  left: number;
  type: number;
  delay: number;
  scale: number;
}

export function MeadowScene() {
  const flowers = useMemo<FlowerData[]>(() => {
    const result: FlowerData[] = [];
    for (let i = 0; i < 14; i++) {
      result.push({
        left: 3 + (i / 14) * 94 + (Math.random() * 5 - 2.5),
        type: Math.floor(Math.random() * FLOWER_COMPONENTS.length),
        delay: Math.random() * 4,
        scale: 0.7 + Math.random() * 0.5,
      });
    }
    return result;
  }, []);

  const { sheepRefs, excite } = useSheepAnimation(SHEEP_CONFIGS);

  return (
    <div className="meadow-scene" aria-hidden="true">
      {/* Grass background */}
      <svg
        className="meadow-grass"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grass-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <path
          d="M0 30 Q60 10 120 25 Q180 40 240 20 Q300 5 360 28 Q420 45 480 22 Q540 8 600 30 Q660 42 720 18 Q780 5 840 25 Q900 40 960 15 Q1020 0 1080 28 Q1140 45 1200 20 Q1260 8 1320 30 Q1380 42 1440 22 L1440 100 L0 100 Z"
          fill="url(#grass-grad)"
        />
      </svg>

      {/* Flowers */}
      {flowers.map((f, i) => {
        const FlowerComp = FLOWER_COMPONENTS[f.type];
        return (
          <div
            key={i}
            className="meadow-flower"
            style={{
              left: `${f.left}%`,
              animationDelay: `${f.delay}s`,
              transform: `scale(${f.scale})`,
            }}
          >
            <FlowerComp />
          </div>
        );
      })}

      {/* Sheep */}
      {SHEEP_CONFIGS.map((cfg, i) => (
        <div
          key={i}
          ref={(el) => {
            sheepRefs.current[i] = el;
          }}
          className="sheep"
          style={{ bottom: `${cfg.bottom}px` }}
          onClick={() => excite(i)}
          onPointerEnter={() => excite(i)}
        >
          <Sheep />
        </div>
      ))}
    </div>
  );
}
