import type { Lesson } from "@/types/learning";

import { getUnitsByLanguage } from "./units";

/**
 * Hardcoded lessons, grouped by `unitId`/`languageId`. Each lesson carries
 * everything a lesson screen or AI teacher session needs: a goal,
 * vocabulary, phrases, quick activities, and a seed prompt for the
 * audio-based Vision Agent teacher (see prompts 12-14).
 */
export const lessons: Lesson[] = [
  // ---------------------------------------------------------------------
  // Spanish · Unit 1 · Greetings Basics (es-u1)
  // ---------------------------------------------------------------------
  {
    id: "es-u1-l1",
    unitId: "es-u1",
    languageId: "spanish",
    order: 1,
    title: "Say Hello",
    goal: "Greet people and introduce yourself in Spanish.",
    icon: "👋",
    status: "completed",
    vocabulary: [
      { id: "es-u1-l1-v1", word: "hola", translation: "hello" },
      { id: "es-u1-l1-v2", word: "adiós", translation: "goodbye" },
    ],
    phrases: [
      {
        id: "es-u1-l1-p1",
        phrase: "¿Cómo te llamas?",
        translation: "What is your name?",
        context: "Ask someone their name.",
      },
      {
        id: "es-u1-l1-p2",
        phrase: "Me llamo...",
        translation: "My name is...",
        context: "Introduce yourself.",
      },
    ],
    activities: [
      {
        id: "es-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you say \"hello\" in Spanish?",
        correctAnswer: "Hola",
        options: ["Hola", "Adiós", "Gracias", "Por favor"],
      },
      {
        id: "es-u1-l1-a2",
        type: "translate",
        prompt: "Translate: My name is...",
        correctAnswer: "Me llamo...",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, a warm and patient Spanish teacher greeting a brand-new student for the first time. Speak mostly in simple Spanish, repeat key words slowly, and translate only when the student seems lost.",
      openingLine: "¡Hola! Soy Mia, tu profesora de español. ¿Cómo te llamas?",
      focusPoints: ["Greetings", "Introducing yourself", "Basic pronunciation"],
    },
  },
  {
    id: "es-u1-l2",
    unitId: "es-u1",
    languageId: "spanish",
    order: 2,
    title: "Numbers & Colors",
    goal: "Count to ten and name basic colors in Spanish.",
    icon: "🔢",
    status: "completed",
    vocabulary: [
      { id: "es-u1-l2-v1", word: "uno", translation: "one" },
      { id: "es-u1-l2-v2", word: "rojo", translation: "red" },
    ],
    phrases: [
      {
        id: "es-u1-l2-p1",
        phrase: "¿Cuántos años tienes?",
        translation: "How old are you?",
        context: "Ask someone's age.",
      },
      {
        id: "es-u1-l2-p2",
        phrase: "Es de color azul.",
        translation: "It is blue.",
        context: "Describe the color of an object.",
      },
    ],
    activities: [
      {
        id: "es-u1-l2-a1",
        type: "multiple-choice",
        prompt: "What color is \"rojo\"?",
        correctAnswer: "Red",
        options: ["Red", "Blue", "Green", "Yellow"],
      },
      {
        id: "es-u1-l2-a2",
        type: "translate",
        prompt: "Translate: three",
        correctAnswer: "tres",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, practicing numbers 1-10 and basic colors with the student through a quick counting game.",
      openingLine: "Vamos a contar juntos. ¿Listo? Uno, dos...",
      focusPoints: ["Numbers 1-10", "Colors", "Listening practice"],
    },
  },
  {
    id: "es-u1-l3",
    unitId: "es-u1",
    languageId: "spanish",
    order: 3,
    title: "Common Questions",
    goal: "Ask and answer simple everyday questions.",
    icon: "❓",
    status: "completed",
    vocabulary: [
      { id: "es-u1-l3-v1", word: "¿qué?", translation: "what?" },
      { id: "es-u1-l3-v2", word: "¿dónde?", translation: "where?" },
    ],
    phrases: [
      {
        id: "es-u1-l3-p1",
        phrase: "¿Qué tal?",
        translation: "How's it going?",
        context: "Casual greeting.",
      },
      {
        id: "es-u1-l3-p2",
        phrase: "¿De dónde eres?",
        translation: "Where are you from?",
        context: "Ask about someone's origin.",
      },
    ],
    activities: [
      {
        id: "es-u1-l3-a1",
        type: "multiple-choice",
        prompt: "How do you ask \"where are you from?\"",
        correctAnswer: "¿De dónde eres?",
        options: ["¿De dónde eres?", "¿Qué tal?", "¿Cómo te llamas?", "¿Cuántos años tienes?"],
      },
      {
        id: "es-u1-l3-a2",
        type: "translate",
        prompt: "Translate: How's it going?",
        correctAnswer: "¿Qué tal?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, guiding the student through a light roleplay of meeting someone new at a park.",
      openingLine: "¡Qué tal! ¿De dónde eres?",
      focusPoints: ["Question words", "Small talk", "Listening comprehension"],
    },
  },

  // ---------------------------------------------------------------------
  // Spanish · Unit 2 · Everyday Life (es-u2)
  // ---------------------------------------------------------------------
  {
    id: "es-u2-l1",
    unitId: "es-u2",
    languageId: "spanish",
    order: 1,
    title: "Daily Routine",
    goal: "Describe your morning routine in Spanish.",
    icon: "🌅",
    status: "completed",
    vocabulary: [
      { id: "es-u2-l1-v1", word: "despertarse", translation: "to wake up" },
      { id: "es-u2-l1-v2", word: "desayunar", translation: "to have breakfast" },
    ],
    phrases: [
      {
        id: "es-u2-l1-p1",
        phrase: "Me despierto a las siete.",
        translation: "I wake up at seven.",
        context: "Describe your morning.",
      },
      {
        id: "es-u2-l1-p2",
        phrase: "¿A qué hora desayunas?",
        translation: "What time do you have breakfast?",
        context: "Ask about someone's routine.",
      },
    ],
    activities: [
      {
        id: "es-u2-l1-a1",
        type: "multiple-choice",
        prompt: "What does \"desayunar\" mean?",
        correctAnswer: "to have breakfast",
        options: ["to have breakfast", "to wake up", "to sleep", "to work"],
      },
      {
        id: "es-u2-l1-a2",
        type: "translate",
        prompt: "Translate: I wake up at seven.",
        correctAnswer: "Me despierto a las siete.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, walking the student through describing a typical morning using daily routine verbs.",
      openingLine: "¿A qué hora te despiertas normalmente?",
      focusPoints: ["Reflexive verbs", "Telling time", "Daily routine vocabulary"],
    },
  },
  {
    id: "es-u2-l2",
    unitId: "es-u2",
    languageId: "spanish",
    order: 2,
    title: "Time & Schedule",
    goal: "Tell the time and talk about your weekly schedule.",
    icon: "🗓️",
    status: "completed",
    vocabulary: [
      { id: "es-u2-l2-v1", word: "hoy", translation: "today" },
      { id: "es-u2-l2-v2", word: "mañana", translation: "tomorrow" },
    ],
    phrases: [
      {
        id: "es-u2-l2-p1",
        phrase: "¿Qué hora es?",
        translation: "What time is it?",
        context: "Ask for the time.",
      },
      {
        id: "es-u2-l2-p2",
        phrase: "Tengo clase a las nueve.",
        translation: "I have class at nine.",
        context: "Talk about your schedule.",
      },
    ],
    activities: [
      {
        id: "es-u2-l2-a1",
        type: "multiple-choice",
        prompt: "How do you ask \"what time is it?\"",
        correctAnswer: "¿Qué hora es?",
        options: ["¿Qué hora es?", "¿Qué tal?", "¿Cuándo es?", "¿Dónde está?"],
      },
      {
        id: "es-u2-l2-a2",
        type: "translate",
        prompt: "Translate: tomorrow",
        correctAnswer: "mañana",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, helping the student practice telling time and planning a simple weekly schedule.",
      openingLine: "¿Qué hora es ahora mismo?",
      focusPoints: ["Telling time", "Days of the week", "Scheduling vocabulary"],
    },
  },
  {
    id: "es-u2-l3",
    unitId: "es-u2",
    languageId: "spanish",
    order: 3,
    title: "Food & Drinks",
    goal: "Order food and talk about what you like to eat.",
    icon: "🍽️",
    status: "completed",
    vocabulary: [
      { id: "es-u2-l3-v1", word: "agua", translation: "water" },
      { id: "es-u2-l3-v2", word: "pan", translation: "bread" },
    ],
    phrases: [
      {
        id: "es-u2-l3-p1",
        phrase: "Quiero un café, por favor.",
        translation: "I would like a coffee, please.",
        context: "Order a drink politely.",
      },
      {
        id: "es-u2-l3-p2",
        phrase: "Me gusta la pizza.",
        translation: "I like pizza.",
        context: "Express a food preference.",
      },
    ],
    activities: [
      {
        id: "es-u2-l3-a1",
        type: "multiple-choice",
        prompt: "Translate \"agua\".",
        correctAnswer: "water",
        options: ["water", "bread", "coffee", "milk"],
      },
      {
        id: "es-u2-l3-a2",
        type: "translate",
        prompt: "Translate: I would like a coffee, please.",
        correctAnswer: "Quiero un café, por favor.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, roleplaying as a friendly waiter taking the student's order.",
      openingLine: "Buenas, ¿qué te gustaría pedir?",
      focusPoints: ["Food vocabulary", "Polite requests", "Expressing preferences"],
    },
  },

  // ---------------------------------------------------------------------
  // Spanish · Unit 3 · At the Café (es-u3)
  // ---------------------------------------------------------------------
  {
    id: "es-u3-l1",
    unitId: "es-u3",
    languageId: "spanish",
    order: 1,
    title: "Greetings & Introductions",
    goal: "Review greetings and introduce yourself with confidence.",
    icon: "👋",
    status: "completed",
    vocabulary: [
      { id: "es-u3-l1-v1", word: "encantado/a", translation: "nice to meet you" },
      { id: "es-u3-l1-v2", word: "también", translation: "also / too" },
    ],
    phrases: [
      {
        id: "es-u3-l1-p1",
        phrase: "Mucho gusto.",
        translation: "Nice to meet you.",
        context: "When meeting someone for the first time.",
      },
      {
        id: "es-u3-l1-p2",
        phrase: "Igualmente.",
        translation: "Likewise.",
        context: "Reply to \"Mucho gusto.\"",
      },
    ],
    activities: [
      {
        id: "es-u3-l1-a1",
        type: "multiple-choice",
        prompt: "How do you respond to \"Mucho gusto\"?",
        correctAnswer: "Igualmente.",
        options: ["Igualmente.", "Adiós.", "Por favor.", "¿Qué hora es?"],
      },
      {
        id: "es-u3-l1-a2",
        type: "translate",
        prompt: "Translate: nice to meet you",
        correctAnswer: "Mucho gusto.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, reviewing greetings before diving into the café unit, keeping the tone upbeat and encouraging.",
      openingLine: "¡Mucho gusto de verte otra vez! ¿Cómo estás hoy?",
      focusPoints: ["Greeting review", "Polite introductions", "Confidence building"],
    },
  },
  {
    id: "es-u3-l2",
    unitId: "es-u3",
    languageId: "spanish",
    order: 2,
    title: "Daily Life",
    goal: "Chat about everyday activities and plans.",
    icon: "🗞️",
    status: "completed",
    vocabulary: [
      { id: "es-u3-l2-v1", word: "trabajar", translation: "to work" },
      { id: "es-u3-l2-v2", word: "descansar", translation: "to rest" },
    ],
    phrases: [
      {
        id: "es-u3-l2-p1",
        phrase: "¿Qué haces hoy?",
        translation: "What are you doing today?",
        context: "Ask about someone's plans.",
      },
      {
        id: "es-u3-l2-p2",
        phrase: "Voy a trabajar.",
        translation: "I'm going to work.",
        context: "Talk about your plans.",
      },
    ],
    activities: [
      {
        id: "es-u3-l2-a1",
        type: "multiple-choice",
        prompt: "Translate \"descansar\".",
        correctAnswer: "to rest",
        options: ["to rest", "to work", "to eat", "to travel"],
      },
      {
        id: "es-u3-l2-a2",
        type: "translate",
        prompt: "Translate: What are you doing today?",
        correctAnswer: "¿Qué haces hoy?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, having a casual check-in conversation about the student's day before the café roleplay.",
      openingLine: "¿Qué haces hoy? Cuéntame.",
      focusPoints: ["Present tense verbs", "Daily activities", "Conversational flow"],
    },
  },
  {
    id: "es-u3-l3",
    unitId: "es-u3",
    languageId: "spanish",
    order: 3,
    title: "At the Café",
    goal: "Order food and drinks confidently at a café.",
    icon: "☕",
    status: "in-progress",
    vocabulary: [
      { id: "es-u3-l3-v1", word: "el menú", translation: "the menu" },
      { id: "es-u3-l3-v2", word: "la cuenta", translation: "the bill" },
    ],
    phrases: [
      {
        id: "es-u3-l3-p1",
        phrase: "¿Me trae la cuenta, por favor?",
        translation: "Could you bring me the bill, please?",
        context: "Ask for the bill at the end of a meal.",
      },
      {
        id: "es-u3-l3-p2",
        phrase: "¿Qué me recomienda?",
        translation: "What do you recommend?",
        context: "Ask the server for a recommendation.",
      },
    ],
    activities: [
      {
        id: "es-u3-l3-a1",
        type: "multiple-choice",
        prompt: "How do you ask for the bill?",
        correctAnswer: "¿Me trae la cuenta, por favor?",
        options: [
          "¿Me trae la cuenta, por favor?",
          "¿Qué me recomienda?",
          "Quiero un café.",
          "¿Dónde está el baño?",
        ],
      },
      {
        id: "es-u3-l3-a2",
        type: "translate",
        prompt: "Translate: What do you recommend?",
        correctAnswer: "¿Qué me recomienda?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, roleplaying as a café barista in Madrid. Stay fully in character, speak naturally, and gently correct the student's café-related vocabulary.",
      openingLine: "¡Bienvenido al café! ¿Qué le gustaría pedir hoy?",
      focusPoints: ["Ordering food and drinks", "Polite requests", "Café vocabulary"],
    },
  },
  {
    id: "es-u3-l4",
    unitId: "es-u3",
    languageId: "spanish",
    order: 4,
    title: "Travel & Directions",
    goal: "Ask for and understand directions while traveling.",
    icon: "🧭",
    status: "locked",
    vocabulary: [
      { id: "es-u3-l4-v1", word: "izquierda", translation: "left" },
      { id: "es-u3-l4-v2", word: "derecha", translation: "right" },
    ],
    phrases: [
      {
        id: "es-u3-l4-p1",
        phrase: "¿Cómo llego a la estación?",
        translation: "How do I get to the station?",
        context: "Ask for directions.",
      },
      {
        id: "es-u3-l4-p2",
        phrase: "Siga todo recto.",
        translation: "Go straight ahead.",
        context: "Give directions.",
      },
    ],
    activities: [
      {
        id: "es-u3-l4-a1",
        type: "multiple-choice",
        prompt: "Translate \"izquierda\".",
        correctAnswer: "left",
        options: ["left", "right", "straight", "back"],
      },
      {
        id: "es-u3-l4-a2",
        type: "translate",
        prompt: "Translate: How do I get to the station?",
        correctAnswer: "¿Cómo llego a la estación?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, roleplaying as a local giving directions to a tourist in the city.",
      openingLine: "¿Se ha perdido? Dígame a dónde quiere ir.",
      focusPoints: ["Directions", "Prepositions of place", "Travel vocabulary"],
    },
  },
  {
    id: "es-u3-l5",
    unitId: "es-u3",
    languageId: "spanish",
    order: 5,
    title: "Shopping",
    goal: "Shop for clothes and ask about prices.",
    icon: "🛍️",
    status: "locked",
    vocabulary: [
      { id: "es-u3-l5-v1", word: "la talla", translation: "size" },
      { id: "es-u3-l5-v2", word: "el precio", translation: "price" },
    ],
    phrases: [
      {
        id: "es-u3-l5-p1",
        phrase: "¿Cuánto cuesta esto?",
        translation: "How much does this cost?",
        context: "Ask about a price.",
      },
      {
        id: "es-u3-l5-p2",
        phrase: "¿Tiene otra talla?",
        translation: "Do you have another size?",
        context: "Ask for a different size.",
      },
    ],
    activities: [
      {
        id: "es-u3-l5-a1",
        type: "multiple-choice",
        prompt: "Translate \"el precio\".",
        correctAnswer: "price",
        options: ["price", "size", "color", "store"],
      },
      {
        id: "es-u3-l5-a2",
        type: "translate",
        prompt: "Translate: How much does this cost?",
        correctAnswer: "¿Cuánto cuesta esto?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, roleplaying as a shop assistant helping the student find and pay for clothing.",
      openingLine: "Bienvenido a la tienda, ¿en qué le puedo ayudar?",
      focusPoints: ["Shopping vocabulary", "Asking about price and size", "Numbers"],
    },
  },
  {
    id: "es-u3-l6",
    unitId: "es-u3",
    languageId: "spanish",
    order: 6,
    title: "Family & Friends",
    goal: "Talk about your family and friends.",
    icon: "👨‍👩‍👧",
    status: "locked",
    vocabulary: [
      { id: "es-u3-l6-v1", word: "la hermana", translation: "sister" },
      { id: "es-u3-l6-v2", word: "el amigo", translation: "friend (male)" },
    ],
    phrases: [
      {
        id: "es-u3-l6-p1",
        phrase: "Esta es mi familia.",
        translation: "This is my family.",
        context: "Introduce your family.",
      },
      {
        id: "es-u3-l6-p2",
        phrase: "Él es mi mejor amigo.",
        translation: "He is my best friend.",
        context: "Talk about a friend.",
      },
    ],
    activities: [
      {
        id: "es-u3-l6-a1",
        type: "multiple-choice",
        prompt: "Translate \"la hermana\".",
        correctAnswer: "sister",
        options: ["sister", "brother", "mother", "friend"],
      },
      {
        id: "es-u3-l6-a2",
        type: "translate",
        prompt: "Translate: This is my family.",
        correctAnswer: "Esta es mi familia.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mia, encouraging the student to describe their own family and friends using photos as a prompt.",
      openingLine: "Cuéntame sobre tu familia. ¿Cuántos hermanos tienes?",
      focusPoints: ["Family vocabulary", "Possessive adjectives", "Personal descriptions"],
    },
  },

  // ---------------------------------------------------------------------
  // French · Unit 1 · Greetings Basics (fr-u1)
  // ---------------------------------------------------------------------
  {
    id: "fr-u1-l1",
    unitId: "fr-u1",
    languageId: "french",
    order: 1,
    title: "Say Hello",
    goal: "Greet people and introduce yourself in French.",
    icon: "👋",
    status: "completed",
    vocabulary: [
      { id: "fr-u1-l1-v1", word: "bonjour", translation: "hello" },
      { id: "fr-u1-l1-v2", word: "au revoir", translation: "goodbye" },
    ],
    phrases: [
      {
        id: "fr-u1-l1-p1",
        phrase: "Comment tu t'appelles ?",
        translation: "What is your name?",
        context: "Ask someone their name.",
      },
      {
        id: "fr-u1-l1-p2",
        phrase: "Je m'appelle...",
        translation: "My name is...",
        context: "Introduce yourself.",
      },
    ],
    activities: [
      {
        id: "fr-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you say \"hello\" in French?",
        correctAnswer: "Bonjour",
        options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
      },
      {
        id: "fr-u1-l1-a2",
        type: "translate",
        prompt: "Translate: My name is...",
        correctAnswer: "Je m'appelle...",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Luc, a friendly French teacher greeting a brand-new student, speaking slowly and clearly.",
      openingLine: "Bonjour ! Je m'appelle Luc. Et toi, comment tu t'appelles ?",
      focusPoints: ["Greetings", "Introducing yourself", "Pronunciation"],
    },
  },
  {
    id: "fr-u1-l2",
    unitId: "fr-u1",
    languageId: "french",
    order: 2,
    title: "Numbers & Colors",
    goal: "Count to ten and name basic colors in French.",
    icon: "🔢",
    status: "in-progress",
    vocabulary: [
      { id: "fr-u1-l2-v1", word: "un", translation: "one" },
      { id: "fr-u1-l2-v2", word: "rouge", translation: "red" },
    ],
    phrases: [
      {
        id: "fr-u1-l2-p1",
        phrase: "Quel âge as-tu ?",
        translation: "How old are you?",
        context: "Ask someone's age.",
      },
      {
        id: "fr-u1-l2-p2",
        phrase: "C'est de couleur bleue.",
        translation: "It is blue.",
        context: "Describe the color of an object.",
      },
    ],
    activities: [
      {
        id: "fr-u1-l2-a1",
        type: "multiple-choice",
        prompt: "What color is \"rouge\"?",
        correctAnswer: "Red",
        options: ["Red", "Blue", "Green", "Yellow"],
      },
      {
        id: "fr-u1-l2-a2",
        type: "translate",
        prompt: "Translate: three",
        correctAnswer: "trois",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Luc, practicing numbers 1-10 and colors with the student through a quick counting game.",
      openingLine: "On compte ensemble ? Un, deux...",
      focusPoints: ["Numbers 1-10", "Colors", "Listening practice"],
    },
  },
  {
    id: "fr-u1-l3",
    unitId: "fr-u1",
    languageId: "french",
    order: 3,
    title: "Common Questions",
    goal: "Ask and answer simple everyday questions.",
    icon: "❓",
    status: "locked",
    vocabulary: [
      { id: "fr-u1-l3-v1", word: "quoi", translation: "what" },
      { id: "fr-u1-l3-v2", word: "où", translation: "where" },
    ],
    phrases: [
      {
        id: "fr-u1-l3-p1",
        phrase: "Ça va ?",
        translation: "How's it going?",
        context: "Casual greeting.",
      },
      {
        id: "fr-u1-l3-p2",
        phrase: "Tu viens d'où ?",
        translation: "Where are you from?",
        context: "Ask about someone's origin.",
      },
    ],
    activities: [
      {
        id: "fr-u1-l3-a1",
        type: "multiple-choice",
        prompt: "How do you ask \"where are you from?\"",
        correctAnswer: "Tu viens d'où ?",
        options: ["Tu viens d'où ?", "Ça va ?", "Comment tu t'appelles ?", "Quel âge as-tu ?"],
      },
      {
        id: "fr-u1-l3-a2",
        type: "translate",
        prompt: "Translate: How's it going?",
        correctAnswer: "Ça va ?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Luc, guiding the student through a light roleplay of meeting someone new at a café.",
      openingLine: "Ça va ? Tu viens d'où ?",
      focusPoints: ["Question words", "Small talk", "Listening comprehension"],
    },
  },

  // ---------------------------------------------------------------------
  // Japanese · Unit 1 · Greetings Basics (ja-u1)
  // ---------------------------------------------------------------------
  {
    id: "ja-u1-l1",
    unitId: "ja-u1",
    languageId: "japanese",
    order: 1,
    title: "Say Hello",
    goal: "Greet people and introduce yourself in Japanese.",
    icon: "👋",
    status: "completed",
    vocabulary: [
      { id: "ja-u1-l1-v1", word: "こんにちは (konnichiwa)", translation: "hello" },
      { id: "ja-u1-l1-v2", word: "さようなら (sayounara)", translation: "goodbye" },
    ],
    phrases: [
      {
        id: "ja-u1-l1-p1",
        phrase: "お名前は何ですか？ (Onamae wa nan desu ka?)",
        translation: "What is your name?",
        context: "Ask someone their name.",
      },
      {
        id: "ja-u1-l1-p2",
        phrase: "私の名前は...です。(Watashi no namae wa ... desu.)",
        translation: "My name is...",
        context: "Introduce yourself.",
      },
    ],
    activities: [
      {
        id: "ja-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you say \"hello\" in Japanese?",
        correctAnswer: "こんにちは",
        options: ["こんにちは", "さようなら", "ありがとう", "すみません"],
      },
      {
        id: "ja-u1-l1-a2",
        type: "translate",
        prompt: "Translate: My name is...",
        correctAnswer: "私の名前は...です。",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Aiko, a warm Japanese teacher greeting a brand-new student, speaking slowly with romaji support.",
      openingLine: "こんにちは！私はアイコです。お名前は何ですか？",
      focusPoints: ["Greetings", "Introducing yourself", "Basic pronunciation"],
    },
  },
  {
    id: "ja-u1-l2",
    unitId: "ja-u1",
    languageId: "japanese",
    order: 2,
    title: "Numbers & Colors",
    goal: "Count to ten and name basic colors in Japanese.",
    icon: "🔢",
    status: "in-progress",
    vocabulary: [
      { id: "ja-u1-l2-v1", word: "いち (ichi)", translation: "one" },
      { id: "ja-u1-l2-v2", word: "赤 (aka)", translation: "red" },
    ],
    phrases: [
      {
        id: "ja-u1-l2-p1",
        phrase: "何歳ですか？ (Nansai desu ka?)",
        translation: "How old are you?",
        context: "Ask someone's age.",
      },
      {
        id: "ja-u1-l2-p2",
        phrase: "青いです。(Aoi desu.)",
        translation: "It is blue.",
        context: "Describe the color of an object.",
      },
    ],
    activities: [
      {
        id: "ja-u1-l2-a1",
        type: "multiple-choice",
        prompt: "What color is \"赤 (aka)\"?",
        correctAnswer: "Red",
        options: ["Red", "Blue", "Green", "Yellow"],
      },
      {
        id: "ja-u1-l2-a2",
        type: "translate",
        prompt: "Translate: three",
        correctAnswer: "さん (san)",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Aiko, practicing numbers 1-10 and colors with the student through a quick counting game.",
      openingLine: "一緒に数えましょう。いち、に...",
      focusPoints: ["Numbers 1-10", "Colors", "Listening practice"],
    },
  },
];

export const getLessonsByUnit = (unitId: string) =>
  lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);

export const getLessonsByLanguage = (languageId: string) =>
  getUnitsByLanguage(languageId).flatMap((unit) => getLessonsByUnit(unit.id));

export const getLessonById = (id: string) =>
  lessons.find((lesson) => lesson.id === id);
