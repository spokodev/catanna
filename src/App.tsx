import { useState, useCallback } from "react";
import { GiftUnwrap } from "./components/GiftUnwrap";
import { FloatingHearts } from "./components/FloatingHearts";
import { SkyScene } from "./components/SkyScene";
import { DailyPanel } from "./components/DailyPanel";
import { Header } from "./components/Header";
import { CatCard } from "./components/CatCard";
import { Compliment } from "./components/Compliment";
import { MeadowScene } from "./components/MeadowScene";
import { useDailyCat } from "./hooks/useDailyCat";
import { getDailyCompliment } from "./utils/dailySeed";
import { compliments } from "./data/compliments";
import "./App.css";

const GIFT_STORAGE_KEY = "catanna-valentine-2026";

function getRandomCompliment(exclude: string): string {
  let next: string;
  do {
    next = compliments[Math.floor(Math.random() * compliments.length)];
  } while (next === exclude && compliments.length > 1);
  return next;
}

function App() {
  const [giftOpened, setGiftOpened] = useState(() => {
    try {
      return localStorage.getItem(GIFT_STORAGE_KEY) === "opened";
    } catch {
      return false;
    }
  });

  const handleGiftComplete = useCallback(() => {
    setGiftOpened(true);
    try {
      localStorage.setItem(GIFT_STORAGE_KEY, "opened");
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const { catUrl, isLoading, error, fetchBonusCat } = useDailyCat();
  const [compliment, setCompliment] = useState(() =>
    getDailyCompliment(compliments)
  );
  const [panelOpen, setPanelOpen] = useState(false);

  const handleNewCompliment = useCallback(() => {
    setCompliment((prev) => getRandomCompliment(prev));
  }, []);

  return (
    <div className="app">
      {!giftOpened && <GiftUnwrap onComplete={handleGiftComplete} />}
      <SkyScene onSunClick={() => setPanelOpen(true)} />
      <DailyPanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
      <FloatingHearts />
      <MeadowScene />
      <main className="main-content">
        <Header />
        <CatCard
          catUrl={catUrl}
          isLoading={isLoading}
          error={error}
          onBonusCat={fetchBonusCat}
        />
        <Compliment text={compliment} onNewCompliment={handleNewCompliment} />
      </main>
    </div>
  );
}

export default App;
