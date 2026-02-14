/**
 * Mulberry32 — fast, deterministic PRNG.
 * Same seed → always the same sequence of numbers.
 */
function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Fisher-Yates shuffle with a seeded PRNG.
 * Same seed → always the same permutation.
 */
function seededShuffle<T>(array: T[], seed: number): T[] {
  const rng = mulberry32(seed);
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Get day of year (0-based) in local timezone.
 */
export function getDayOfYear(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24)) - 1;
}

/**
 * Get today's date as a string key for localStorage caching.
 */
export function getTodayKey(): string {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

/**
 * Pick today's compliment — guaranteed no repeats for the whole year.
 * Shuffles the array with the year as seed, then uses dayOfYear as index.
 */
export function getDailyCompliment(compliments: string[]): string {
  const year = new Date().getFullYear();
  const shuffled = seededShuffle(compliments, year);
  const day = getDayOfYear();
  return shuffled[day % shuffled.length];
}

/**
 * Pick today's item from an array — same logic as getDailyCompliment.
 * Useful for song-of-the-day, etc.
 */
export function getDailyItem<T>(items: T[]): T {
  const year = new Date().getFullYear();
  const shuffled = seededShuffle(items, year);
  const day = getDayOfYear();
  return shuffled[day % shuffled.length];
}
