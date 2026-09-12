import { images } from "@/constants/images";
import type { Language } from "@/types/learning";

/**
 * Supported languages. "Popular" languages are shown first on the
 * language selection screen; the rest appear under "See all languages".
 */
export const languages: Language[] = [
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Español",
    flag: images.flags.spanish,
    learners: "28.4M learners",
    popular: true,
  },
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    flag: images.flags.french,
    learners: "19.4M learners",
    popular: true,
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "日本語",
    flag: images.flags.japanese,
    learners: "12.7M learners",
    popular: true,
  },
  {
    id: "korean",
    name: "Korean",
    nativeName: "한국어",
    flag: images.flags.korean,
    learners: "9.3M learners",
    popular: true,
  },
  {
    id: "german",
    name: "German",
    nativeName: "Deutsch",
    flag: images.flags.german,
    learners: "8.1M learners",
    popular: true,
  },
  {
    id: "chinese",
    name: "Chinese",
    nativeName: "中文",
    flag: images.flags.chinese,
    learners: "7.4M learners",
    popular: true,
  },
  {
    id: "italian",
    name: "Italian",
    nativeName: "Italiano",
    flag: images.flags.italian,
    learners: "5.2M learners",
    popular: false,
  },
  {
    id: "portuguese",
    name: "Portuguese",
    nativeName: "Português",
    flag: images.flags.portuguese,
    learners: "4.6M learners",
    popular: false,
  },
];

export const getLanguageById = (id: string) =>
  languages.find((language) => language.id === id);
