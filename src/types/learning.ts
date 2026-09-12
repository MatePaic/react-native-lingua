/**
 * Shared types for the hardcoded learning content system.
 * See `data/languages.ts`, `data/units.ts`, and `data/lessons.ts`.
 */

export type LanguageId =
  | "spanish"
  | "french"
  | "japanese"
  | "korean"
  | "german"
  | "chinese"
  | "italian"
  | "portuguese";

export interface Language {
  id: LanguageId;
  /** English display name, e.g. "Spanish". */
  name: string;
  /** Name in the language itself, e.g. "Español". */
  nativeName: string;
  /** Local asset (from `constants/images.ts`), not a remote URL. */
  flag: number;
  /** Pre-formatted learner count, e.g. "28.4M learners". */
  learners: string;
  /** Shown under the "Popular" section on the language selection screen. */
  popular: boolean;
}

export type LessonStatus = "completed" | "in-progress" | "locked";

export interface Unit {
  id: string;
  languageId: LanguageId;
  /** 1-based position within the language's learning path. */
  order: number;
  title: string;
  description: string;
  icon: string;
}

export type ActivityType = "multiple-choice" | "translate" | "listening";

export interface Activity {
  id: string;
  type: ActivityType;
  prompt: string;
  correctAnswer: string;
  /** Present for "multiple-choice" activities. */
  options?: string[];
}

export interface VocabularyItem {
  id: string;
  word: string;
  translation: string;
  example?: string;
}

export interface Phrase {
  id: string;
  phrase: string;
  translation: string;
  /** When/why a learner would use this phrase. */
  context?: string;
}

/**
 * Seeds the AI teacher's behavior for the audio/video Vision Agent lessons
 * (see prompts 12-14). Kept as plain text/strings so it can be dropped
 * straight into an agent system prompt later without reshaping the data.
 */
export interface AITeacherPrompt {
  systemPrompt: string;
  openingLine: string;
  focusPoints: string[];
}

export interface Lesson {
  id: string;
  unitId: string;
  languageId: LanguageId;
  /** 1-based position within the unit. */
  order: number;
  title: string;
  goal: string;
  icon: string;
  /** Mock progress state, overridden later by the Zustand store (prompt 08). */
  status: LessonStatus;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}
