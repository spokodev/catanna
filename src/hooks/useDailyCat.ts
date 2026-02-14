import { useState, useEffect } from "react";
import { getTodayKey } from "../utils/dailySeed";

interface UseDailyCatReturn {
  catUrl: string | null;
  isLoading: boolean;
  error: string | null;
  fetchBonusCat: () => void;
}

const STORAGE_KEY = "catanna-daily-cat";
const CAT_API_URL =
  "https://api.thecatapi.com/v1/images/search?has_breeds=true&mime_types=jpg,png&size=med";
const CATAAS_URL = "https://cataas.com/cat?json=true";

export function useDailyCat(): UseDailyCatReturn {
  const [catUrl, setCatUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const todayKey = getTodayKey();

  useEffect(() => {
    // Check localStorage cache first
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.date === todayKey && parsed.url) {
          setCatUrl(parsed.url);
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // Invalid cache, proceed to fetch
    }

    fetchCat();
  }, [todayKey]);

  async function fetchCat() {
    setIsLoading(true);
    setError(null);

    // Try TheCatAPI first
    try {
      const res = await fetch(CAT_API_URL);
      if (res.ok) {
        const data = await res.json();
        const url = data[0]?.url;
        if (url) {
          setCatUrl(url);
          saveToCache(url);
          setIsLoading(false);
          return;
        }
      }
    } catch {
      // TheCatAPI failed, try fallback
    }

    // Fallback to CATAAS
    try {
      const res = await fetch(CATAAS_URL);
      if (res.ok) {
        const data = await res.json();
        const url = `https://cataas.com${data.url}`;
        setCatUrl(url);
        saveToCache(url);
        setIsLoading(false);
        return;
      }
    } catch {
      // Both APIs failed
    }

    setError("Котик сховався, спробуй пізніше!");
    setIsLoading(false);
  }

  function saveToCache(url: string) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ date: todayKey, url })
      );
    } catch {
      // localStorage not available (private browsing) — ignore
    }
  }

  function fetchBonusCat() {
    setIsLoading(true);
    setError(null);

    fetch(CAT_API_URL)
      .then((res) => res.json())
      .then((data) => {
        const url = data[0]?.url;
        if (url) setCatUrl(url);
      })
      .catch(() => {
        // Try CATAAS fallback for bonus cat too
        return fetch(CATAAS_URL)
          .then((res) => res.json())
          .then((data) => setCatUrl(`https://cataas.com${data.url}`))
          .catch(() => setError("Котик сховався, спробуй пізніше!"));
      })
      .finally(() => setIsLoading(false));
  }

  return { catUrl, isLoading, error, fetchBonusCat };
}
