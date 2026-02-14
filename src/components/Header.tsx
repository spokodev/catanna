import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <p className="header-subtitle">Для тебе, Анечко</p>
      <div className="header-line" aria-hidden="true">
        <svg width="120" height="16" viewBox="0 0 120 16" fill="none">
          <path
            d="M0 8 Q30 0 60 8 Q90 16 120 8"
            stroke="url(#line-grad)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="60" cy="8" r="3" fill="#E63946" opacity="0.6" />
          <defs>
            <linearGradient id="line-grad" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFB7C5" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFB7C5" />
              <stop offset="50%" stopColor="#E63946" />
              <stop offset="70%" stopColor="#B19CD9" />
              <stop offset="100%" stopColor="#B19CD9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
  );
}
