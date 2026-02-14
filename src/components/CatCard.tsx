import { useState, useMemo } from "react";
import "./CatCard.css";

interface CatCardProps {
  catUrl: string | null;
  isLoading: boolean;
  error: string | null;
  onBonusCat: () => void;
}

const LOADING_TEXTS = [
  "Шукаю котика...",
  "Котик біжить до тебе...",
  "Мяу-мяу!",
  "Готую найміліше...",
];

function CatPawLoader() {
  return (
    <svg
      className="cat-paw-loader"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer left toe — angled outward */}
      <ellipse cx="7.5" cy="9" rx="3.8" ry="4.5" transform="rotate(-15 7.5 9)" fill="#ffb7c5" opacity="0.7" />
      {/* Inner left toe */}
      <ellipse cx="14.5" cy="4.5" rx="3.5" ry="4.2" fill="#ffb7c5" opacity="0.7" />
      {/* Inner right toe */}
      <ellipse cx="21.5" cy="4.5" rx="3.5" ry="4.2" fill="#ffb7c5" opacity="0.7" />
      {/* Outer right toe — angled outward */}
      <ellipse cx="28.5" cy="9" rx="3.8" ry="4.5" transform="rotate(15 28.5 9)" fill="#ffb7c5" opacity="0.7" />
      {/* Main pad */}
      <ellipse cx="18" cy="24" rx="10" ry="8.5" fill="#ffb7c5" opacity="0.6" />
    </svg>
  );
}

export function CatCard({ catUrl, isLoading, error, onBonusCat }: CatCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadingKey, setLoadingKey] = useState(0);

  const loadingText = useMemo(
    () => LOADING_TEXTS[Math.floor(Math.random() * LOADING_TEXTS.length)],
    [loadingKey]
  );

  const showLoader = isLoading || (!!catUrl && !imageLoaded && !error);
  const showError = !!error && !isLoading;

  return (
    <div className="cat-card">
      <div className="cat-card-inner">
        <div className={`cat-loading ${showLoader ? "active" : ""}`}>
          <CatPawLoader />
          <p className="cat-loading-text">{loadingText}</p>
        </div>

        <div className={`cat-error ${showError ? "active" : ""}`}>
          <p>{error}</p>
          <button className="retry-button" onClick={onBonusCat}>
            Спробувати ще раз
          </button>
        </div>

        {catUrl && (
          <div className={`cat-image-wrapper ${imageLoaded ? "revealed" : ""}`}>
            <img
              src={catUrl}
              alt=""
              aria-hidden="true"
              className="cat-image-bg"
            />
            <img
              key={catUrl}
              src={catUrl}
              alt="Милий котик для тебе"
              className="cat-image"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageLoaded(false);
                onBonusCat();
              }}
            />
          </div>
        )}
      </div>

      <button
        className="bonus-cat-button"
        onClick={() => {
          setImageLoaded(false);
          setLoadingKey((k) => k + 1);
          onBonusCat();
        }}
        aria-label="Отримати ще одного котика"
      >
        Ще котика
      </button>
    </div>
  );
}
