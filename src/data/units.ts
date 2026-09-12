import type { Unit } from "@/types/learning";

/**
 * Hardcoded units per language. Each unit groups a handful of lessons
 * (see `data/lessons.ts`, matched by `unitId`).
 */
export const units: Unit[] = [
  // Spanish
  {
    id: "es-u1",
    languageId: "spanish",
    order: 1,
    title: "Greetings Basics",
    description: "Say hello, count, and ask simple questions in Spanish.",
    icon: "👋",
  },
  {
    id: "es-u2",
    languageId: "spanish",
    order: 2,
    title: "Everyday Life",
    description: "Talk about your day, the time, and food you like.",
    icon: "🏡",
  },
  {
    id: "es-u3",
    languageId: "spanish",
    order: 3,
    title: "At the Café",
    description: "Order food, ask for directions, shop, and talk family.",
    icon: "☕",
  },

  // French
  {
    id: "fr-u1",
    languageId: "french",
    order: 1,
    title: "Greetings Basics",
    description: "Say hello, count, and ask simple questions in French.",
    icon: "👋",
  },

  // Japanese
  {
    id: "ja-u1",
    languageId: "japanese",
    order: 1,
    title: "Greetings Basics",
    description: "Say hello and count in Japanese.",
    icon: "👋",
  },
];

export const getUnitsByLanguage = (languageId: string) =>
  units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);

export const getUnitById = (id: string) =>
  units.find((unit) => unit.id === id);
