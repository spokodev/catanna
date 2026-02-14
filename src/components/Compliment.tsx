import "./Compliment.css";

interface ComplimentProps {
  text: string;
  onNewCompliment: () => void;
}

export function Compliment({ text, onNewCompliment }: ComplimentProps) {
  return (
    <div className="compliment">
      <blockquote className="compliment-text">{text}</blockquote>
      <button
        className="new-compliment-button"
        onClick={onNewCompliment}
        aria-label="Отримати новий комплімент"
      >
        Ще приємного
      </button>
    </div>
  );
}
