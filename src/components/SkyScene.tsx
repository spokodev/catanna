import "./SkyScene.css";

interface SkySceneProps {
  onSunClick?: () => void;
}

/* ── Sun SVG ── */
function Sun() {
  return (
    <svg width="70" height="70" viewBox="0 0 50 50" fill="none">
      <defs>
        <radialGradient id="sun-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="100%" stopColor="#FFB830" />
        </radialGradient>
      </defs>
      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="25"
          y1="25"
          x2="25"
          y2="4"
          stroke="#FFD93D"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
          transform={`rotate(${angle} 25 25)`}
        />
      ))}
      {/* Core */}
      <circle cx="25" cy="25" r="10" fill="url(#sun-grad)" />
    </svg>
  );
}

/* ── Cloud SVG ── */
function Cloud({ size }: { size: "sm" | "md" | "lg" }) {
  const dims = { sm: { w: 60, h: 24 }, md: { w: 90, h: 32 }, lg: { w: 120, h: 40 } };
  const { w, h } = dims[size];

  // Scale factor relative to lg
  const s = w / 120;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <ellipse cx={50 * s} cy={h * 0.6} rx={40 * s} ry={16 * s} fill="white" opacity="0.75" />
      <ellipse cx={30 * s} cy={h * 0.5} rx={24 * s} ry={14 * s} fill="white" opacity="0.8" />
      <ellipse cx={75 * s} cy={h * 0.5} rx={26 * s} ry={14 * s} fill="white" opacity="0.8" />
      <ellipse cx={50 * s} cy={h * 0.35} rx={22 * s} ry={12 * s} fill="white" opacity="0.85" />
    </svg>
  );
}

export function SkyScene({ onSunClick }: SkySceneProps) {
  return (
    <div className="sky-scene" aria-hidden="true">
      <button
        className="sky-sun"
        onClick={onSunClick}
        aria-label="Відкрити меню дня"
        aria-hidden="false"
      >
        <Sun />
      </button>
      <div className="sky-cloud cloud-1">
        <Cloud size="lg" />
      </div>
      <div className="sky-cloud cloud-2">
        <Cloud size="md" />
      </div>
      <div className="sky-cloud cloud-3">
        <Cloud size="sm" />
      </div>
    </div>
  );
}
