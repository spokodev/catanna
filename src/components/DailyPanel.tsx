import { useEffect } from "react";
import { holidays } from "../data/holidays";
import { songs } from "../data/songs";
import { getDailyItem } from "../utils/dailySeed";
import "./DailyPanel.css";

interface DailyPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

function getTodayKey(): string {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${mm}-${dd}`;
}

export function DailyPanel({ isOpen, onClose }: DailyPanelProps) {
  const todayHolidays = holidays[getTodayKey()] ?? ["Просто чудовий день!"];
  const song = getDailyItem(songs);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`daily-panel-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />
      <aside className={`daily-panel ${isOpen ? "open" : ""}`}>
        <button className="daily-panel-close" onClick={onClose} aria-label="Закрити">
          &times;
        </button>
        <div className="daily-panel-content">
          <section className="daily-section">
            <h2 className="daily-section-title">Сьогодні святкуємо</h2>
            <ul className="daily-holidays">
              {todayHolidays.map((h) => (
                <li key={h} className="daily-holiday-item">
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(h)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="daily-holiday-link"
                  >
                    {h}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="daily-section">
            <h2 className="daily-section-title">Пісня дня</h2>
            <p className="daily-song-title">
              {song.artist} — {song.title}
            </p>
            <iframe
              className="daily-spotify-embed"
              src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`${song.artist} — ${song.title}`}
            />
          </section>
        </div>
      </aside>
    </>
  );
}
