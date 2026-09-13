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
  // ---------------------------------------------------------------------
  // Korean · Unit 1 · Everyday Essentials (ko-u1)
  // ---------------------------------------------------------------------
  {
    id: "ko-u1-l1",
    unitId: "ko-u1",
    languageId: "korean",
    order: 1,
    title: "Greetings & Introductions",
    goal: "Review greetings and introduce yourself with confidence.",
    icon: "👋",
    status: "completed",
    vocabulary: [
      { id: "ko-u1-l1-v1", word: "반갑습니다 (bangapseumnida)", translation: "nice to meet you" },
      { id: "ko-u1-l1-v2", word: "저도요 (jeodoyo)", translation: "also / too" },
    ],
    phrases: [
      {
        id: "ko-u1-l1-p1",
        phrase: "만나서 반가워요. (Mannaseo bangawoyo.)",
        translation: "Nice to meet you.",
        context: "When meeting someone for the first time.",
      },
      {
        id: "ko-u1-l1-p2",
        phrase: "저도 반가워요. (Jeodo bangawoyo.)",
        translation: "Likewise.",
        context: "Reply to \"만나서 반가워요.\"",
      },
    ],
    activities: [
      {
        id: "ko-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you respond to \"만나서 반가워요\"?",
        correctAnswer: "저도 반가워요.",
        options: ["저도 반가워요.", "안녕히 가세요.", "부탁드립니다.", "몇 시예요?"],
      },
      {
        id: "ko-u1-l1-a2",
        type: "translate",
        prompt: "Translate: nice to meet you",
        correctAnswer: "만나서 반가워요.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Somin, reviewing greetings before diving into the café unit, keeping the tone upbeat and encouraging.",
      openingLine: "다시 만나서 반가워요! 오늘 기분 어때요?",
      focusPoints: ["Greeting review", "Polite introductions", "Confidence building"],
    },
  },
  {
    id: "ko-u1-l2",
    unitId: "ko-u1",
    languageId: "korean",
    order: 2,
    title: "Daily Life",
    goal: "Chat about everyday activities and plans.",
    icon: "🗞️",
    status: "completed",
    vocabulary: [
      { id: "ko-u1-l2-v1", word: "일하다 (ilhada)", translation: "to work" },
      { id: "ko-u1-l2-v2", word: "쉬다 (swida)", translation: "to rest" },
    ],
    phrases: [
      {
        id: "ko-u1-l2-p1",
        phrase: "오늘 뭐 해요? (Oneul mwo haeyo?)",
        translation: "What are you doing today?",
        context: "Ask about someone's plans.",
      },
      {
        id: "ko-u1-l2-p2",
        phrase: "저는 일하러 가요. (Jeoneun ilhareo gayo.)",
        translation: "I'm going to work.",
        context: "Talk about your plans.",
      },
    ],
    activities: [
      {
        id: "ko-u1-l2-a1",
        type: "multiple-choice",
        prompt: "Translate \"쉬다 (swida)\".",
        correctAnswer: "to rest",
        options: ["to rest", "to work", "to eat", "to travel"],
      },
      {
        id: "ko-u1-l2-a2",
        type: "translate",
        prompt: "Translate: What are you doing today?",
        correctAnswer: "오늘 뭐 해요?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Somin, having a casual check-in conversation about the student's day before the café roleplay.",
      openingLine: "오늘 뭐 해요? 말해 주세요.",
      focusPoints: ["Present tense verbs", "Daily activities", "Conversational flow"],
    },
  },
  {
    id: "ko-u1-l3",
    unitId: "ko-u1",
    languageId: "korean",
    order: 3,
    title: "At the Café",
    goal: "Order food and drinks confidently at a café.",
    icon: "☕",
    status: "in-progress",
    vocabulary: [
      { id: "ko-u1-l3-v1", word: "메뉴 (menyu)", translation: "the menu" },
      { id: "ko-u1-l3-v2", word: "계산서 (gyesanseo)", translation: "the bill" },
    ],
    phrases: [
      {
        id: "ko-u1-l3-p1",
        phrase: "계산서 주시겠어요? (Gyesanseo jusigesseoyo?)",
        translation: "Could you bring me the bill, please?",
        context: "Ask for the bill at the end of a meal.",
      },
      {
        id: "ko-u1-l3-p2",
        phrase: "뭘 추천하세요? (Mwol chucheonhaseyo?)",
        translation: "What do you recommend?",
        context: "Ask the server for a recommendation.",
      },
    ],
    activities: [
      {
        id: "ko-u1-l3-a1",
        type: "multiple-choice",
        prompt: "How do you ask for the bill?",
        correctAnswer: "계산서 주시겠어요?",
        options: [
          "계산서 주시겠어요?",
          "뭘 추천하세요?",
          "커피 주세요.",
          "화장실이 어디예요?",
        ],
      },
      {
        id: "ko-u1-l3-a2",
        type: "translate",
        prompt: "Translate: What do you recommend?",
        correctAnswer: "뭘 추천하세요?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Somin, roleplaying as a café barista in Seoul. Stay fully in character, speak naturally, and gently correct the student's café-related vocabulary.",
      openingLine: "어서 오세요! 오늘 뭐 주문하시겠어요?",
      focusPoints: ["Ordering food and drinks", "Polite requests", "Café vocabulary"],
    },
  },
  {
    id: "ko-u1-l4",
    unitId: "ko-u1",
    languageId: "korean",
    order: 4,
    title: "Travel & Directions",
    goal: "Ask for and understand directions while traveling.",
    icon: "🧭",
    status: "locked",
    vocabulary: [
      { id: "ko-u1-l4-v1", word: "왼쪽 (oenjjok)", translation: "left" },
      { id: "ko-u1-l4-v2", word: "오른쪽 (oreunjjok)", translation: "right" },
    ],
    phrases: [
      {
        id: "ko-u1-l4-p1",
        phrase: "역에 어떻게 가요? (Yeoge eotteoke gayo?)",
        translation: "How do I get to the station?",
        context: "Ask for directions.",
      },
      {
        id: "ko-u1-l4-p2",
        phrase: "쭉 가세요. (Jjuk gaseyo.)",
        translation: "Go straight ahead.",
        context: "Give directions.",
      },
    ],
    activities: [
      {
        id: "ko-u1-l4-a1",
        type: "multiple-choice",
        prompt: "Translate \"왼쪽 (oenjjok)\".",
        correctAnswer: "left",
        options: ["left", "right", "straight", "back"],
      },
      {
        id: "ko-u1-l4-a2",
        type: "translate",
        prompt: "Translate: How do I get to the station?",
        correctAnswer: "역에 어떻게 가요?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Somin, roleplaying as a local giving directions to a tourist in the city.",
      openingLine: "길을 잃으셨어요? 어디로 가고 싶은지 말해 주세요.",
      focusPoints: ["Directions", "Prepositions of place", "Travel vocabulary"],
    },
  },
  {
    id: "ko-u1-l5",
    unitId: "ko-u1",
    languageId: "korean",
    order: 5,
    title: "Shopping",
    goal: "Shop for clothes and ask about prices.",
    icon: "🛍️",
    status: "locked",
    vocabulary: [
      { id: "ko-u1-l5-v1", word: "사이즈 (saijeu)", translation: "size" },
      { id: "ko-u1-l5-v2", word: "가격 (gagyeok)", translation: "price" },
    ],
    phrases: [
      {
        id: "ko-u1-l5-p1",
        phrase: "이거 얼마예요? (Igeo eolmayeyo?)",
        translation: "How much does this cost?",
        context: "Ask about a price.",
      },
      {
        id: "ko-u1-l5-p2",
        phrase: "다른 사이즈 있어요? (Dareun saijeu isseoyo?)",
        translation: "Do you have another size?",
        context: "Ask for a different size.",
      },
    ],
    activities: [
      {
        id: "ko-u1-l5-a1",
        type: "multiple-choice",
        prompt: "Translate \"가격 (gagyeok)\".",
        correctAnswer: "price",
        options: ["price", "size", "color", "store"],
      },
      {
        id: "ko-u1-l5-a2",
        type: "translate",
        prompt: "Translate: How much does this cost?",
        correctAnswer: "이거 얼마예요?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Somin, roleplaying as a shop assistant helping the student find and pay for clothing.",
      openingLine: "가게에 오신 걸 환영해요, 뭘 도와드릴까요?",
      focusPoints: ["Shopping vocabulary", "Asking about price and size", "Numbers"],
    },
  },
  {
    id: "ko-u1-l6",
    unitId: "ko-u1",
    languageId: "korean",
    order: 6,
    title: "Family & Friends",
    goal: "Talk about your family and friends.",
    icon: "👨‍👩‍👧",
    status: "locked",
    vocabulary: [
      { id: "ko-u1-l6-v1", word: "친구 (chingu)", translation: "friend" },
      { id: "ko-u1-l6-v2", word: "언니/누나 (eonni/nuna)", translation: "older sister" },
    ],
    phrases: [
      {
        id: "ko-u1-l6-p1",
        phrase: "이 사람은 제 가족이에요. (I saramun je gajogieyo.)",
        translation: "This is my family.",
        context: "Introduce your family.",
      },
      {
        id: "ko-u1-l6-p2",
        phrase: "그는 제 가장 친한 친구예요. (Geuneun je gajang chinhan chinguyeyo.)",
        translation: "He is my best friend.",
        context: "Talk about a friend.",
      },
    ],
    activities: [
      {
        id: "ko-u1-l6-a1",
        type: "multiple-choice",
        prompt: "Translate \"친구 (chingu)\".",
        correctAnswer: "friend",
        options: ["friend", "brother", "mother", "sister"],
      },
      {
        id: "ko-u1-l6-a2",
        type: "translate",
        prompt: "Translate: This is my family.",
        correctAnswer: "이 사람은 제 가족이에요.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Somin, encouraging the student to describe their own family and friends using photos as a prompt.",
      openingLine: "가족에 대해 말해 주세요. 형제자매가 몇 명이에요?",
      focusPoints: ["Family vocabulary", "Possessive adjectives", "Personal descriptions"],
    },
  },

  // ---------------------------------------------------------------------
  // German · Unit 1 · Everyday Essentials (de-u1)
  // ---------------------------------------------------------------------
  {
    id: "de-u1-l1",
    unitId: "de-u1",
    languageId: "german",
    order: 1,
    title: "Greetings & Introductions",
    goal: "Review greetings and introduce yourself with confidence.",
    icon: "👋",
    status: "completed",
    vocabulary: [
      { id: "de-u1-l1-v1", word: "sehr erfreut", translation: "nice to meet you" },
      { id: "de-u1-l1-v2", word: "auch", translation: "also / too" },
    ],
    phrases: [
      {
        id: "de-u1-l1-p1",
        phrase: "Sehr erfreut.",
        translation: "Nice to meet you.",
        context: "When meeting someone for the first time.",
      },
      {
        id: "de-u1-l1-p2",
        phrase: "Ganz meinerseits.",
        translation: "Likewise.",
        context: "Reply to \"Sehr erfreut.\"",
      },
    ],
    activities: [
      {
        id: "de-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you respond to \"Sehr erfreut\"?",
        correctAnswer: "Ganz meinerseits.",
        options: ["Ganz meinerseits.", "Auf Wiedersehen.", "Bitte.", "Wie spät ist es?"],
      },
      {
        id: "de-u1-l1-a2",
        type: "translate",
        prompt: "Translate: nice to meet you",
        correctAnswer: "Sehr erfreut.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Anna, reviewing greetings before diving into the café unit, keeping the tone upbeat and encouraging.",
      openingLine: "Schön, dich wiederzusehen! Wie geht es dir heute?",
      focusPoints: ["Greeting review", "Polite introductions", "Confidence building"],
    },
  },
  {
    id: "de-u1-l2",
    unitId: "de-u1",
    languageId: "german",
    order: 2,
    title: "Daily Life",
    goal: "Chat about everyday activities and plans.",
    icon: "🗞️",
    status: "completed",
    vocabulary: [
      { id: "de-u1-l2-v1", word: "arbeiten", translation: "to work" },
      { id: "de-u1-l2-v2", word: "sich ausruhen", translation: "to rest" },
    ],
    phrases: [
      {
        id: "de-u1-l2-p1",
        phrase: "Was machst du heute?",
        translation: "What are you doing today?",
        context: "Ask about someone's plans.",
      },
      {
        id: "de-u1-l2-p2",
        phrase: "Ich gehe arbeiten.",
        translation: "I'm going to work.",
        context: "Talk about your plans.",
      },
    ],
    activities: [
      {
        id: "de-u1-l2-a1",
        type: "multiple-choice",
        prompt: "Translate \"sich ausruhen\".",
        correctAnswer: "to rest",
        options: ["to rest", "to work", "to eat", "to travel"],
      },
      {
        id: "de-u1-l2-a2",
        type: "translate",
        prompt: "Translate: What are you doing today?",
        correctAnswer: "Was machst du heute?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Anna, having a casual check-in conversation about the student's day before the café roleplay.",
      openingLine: "Was machst du heute? Erzähl mir.",
      focusPoints: ["Present tense verbs", "Daily activities", "Conversational flow"],
    },
  },
  {
    id: "de-u1-l3",
    unitId: "de-u1",
    languageId: "german",
    order: 3,
    title: "At the Café",
    goal: "Order food and drinks confidently at a café.",
    icon: "☕",
    status: "in-progress",
    vocabulary: [
      { id: "de-u1-l3-v1", word: "die Speisekarte", translation: "the menu" },
      { id: "de-u1-l3-v2", word: "die Rechnung", translation: "the bill" },
    ],
    phrases: [
      {
        id: "de-u1-l3-p1",
        phrase: "Bringen Sie mir bitte die Rechnung?",
        translation: "Could you bring me the bill, please?",
        context: "Ask for the bill at the end of a meal.",
      },
      {
        id: "de-u1-l3-p2",
        phrase: "Was empfehlen Sie?",
        translation: "What do you recommend?",
        context: "Ask the server for a recommendation.",
      },
    ],
    activities: [
      {
        id: "de-u1-l3-a1",
        type: "multiple-choice",
        prompt: "How do you ask for the bill?",
        correctAnswer: "Bringen Sie mir bitte die Rechnung?",
        options: [
          "Bringen Sie mir bitte die Rechnung?",
          "Was empfehlen Sie?",
          "Ich möchte einen Kaffee.",
          "Wo ist die Toilette?",
        ],
      },
      {
        id: "de-u1-l3-a2",
        type: "translate",
        prompt: "Translate: What do you recommend?",
        correctAnswer: "Was empfehlen Sie?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Anna, roleplaying as a café barista in Berlin. Stay fully in character, speak naturally, and gently correct the student's café-related vocabulary.",
      openingLine: "Willkommen im Café! Was möchten Sie heute bestellen?",
      focusPoints: ["Ordering food and drinks", "Polite requests", "Café vocabulary"],
    },
  },
  {
    id: "de-u1-l4",
    unitId: "de-u1",
    languageId: "german",
    order: 4,
    title: "Travel & Directions",
    goal: "Ask for and understand directions while traveling.",
    icon: "🧭",
    status: "locked",
    vocabulary: [
      { id: "de-u1-l4-v1", word: "links", translation: "left" },
      { id: "de-u1-l4-v2", word: "rechts", translation: "right" },
    ],
    phrases: [
      {
        id: "de-u1-l4-p1",
        phrase: "Wie komme ich zum Bahnhof?",
        translation: "How do I get to the station?",
        context: "Ask for directions.",
      },
      {
        id: "de-u1-l4-p2",
        phrase: "Gehen Sie geradeaus.",
        translation: "Go straight ahead.",
        context: "Give directions.",
      },
    ],
    activities: [
      {
        id: "de-u1-l4-a1",
        type: "multiple-choice",
        prompt: "Translate \"links\".",
        correctAnswer: "left",
        options: ["left", "right", "straight", "back"],
      },
      {
        id: "de-u1-l4-a2",
        type: "translate",
        prompt: "Translate: How do I get to the station?",
        correctAnswer: "Wie komme ich zum Bahnhof?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Anna, roleplaying as a local giving directions to a tourist in the city.",
      openingLine: "Haben Sie sich verlaufen? Sagen Sie mir, wohin Sie möchten.",
      focusPoints: ["Directions", "Prepositions of place", "Travel vocabulary"],
    },
  },
  {
    id: "de-u1-l5",
    unitId: "de-u1",
    languageId: "german",
    order: 5,
    title: "Shopping",
    goal: "Shop for clothes and ask about prices.",
    icon: "🛍️",
    status: "locked",
    vocabulary: [
      { id: "de-u1-l5-v1", word: "die Größe", translation: "size" },
      { id: "de-u1-l5-v2", word: "der Preis", translation: "price" },
    ],
    phrases: [
      {
        id: "de-u1-l5-p1",
        phrase: "Wie viel kostet das?",
        translation: "How much does this cost?",
        context: "Ask about a price.",
      },
      {
        id: "de-u1-l5-p2",
        phrase: "Haben Sie eine andere Größe?",
        translation: "Do you have another size?",
        context: "Ask for a different size.",
      },
    ],
    activities: [
      {
        id: "de-u1-l5-a1",
        type: "multiple-choice",
        prompt: "Translate \"der Preis\".",
        correctAnswer: "price",
        options: ["price", "size", "color", "store"],
      },
      {
        id: "de-u1-l5-a2",
        type: "translate",
        prompt: "Translate: How much does this cost?",
        correctAnswer: "Wie viel kostet das?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Anna, roleplaying as a shop assistant helping the student find and pay for clothing.",
      openingLine: "Willkommen im Geschäft, wie kann ich Ihnen helfen?",
      focusPoints: ["Shopping vocabulary", "Asking about price and size", "Numbers"],
    },
  },
  {
    id: "de-u1-l6",
    unitId: "de-u1",
    languageId: "german",
    order: 6,
    title: "Family & Friends",
    goal: "Talk about your family and friends.",
    icon: "👨‍👩‍👧",
    status: "locked",
    vocabulary: [
      { id: "de-u1-l6-v1", word: "die Schwester", translation: "sister" },
      { id: "de-u1-l6-v2", word: "der Freund", translation: "friend (male)" },
    ],
    phrases: [
      {
        id: "de-u1-l6-p1",
        phrase: "Das ist meine Familie.",
        translation: "This is my family.",
        context: "Introduce your family.",
      },
      {
        id: "de-u1-l6-p2",
        phrase: "Er ist mein bester Freund.",
        translation: "He is my best friend.",
        context: "Talk about a friend.",
      },
    ],
    activities: [
      {
        id: "de-u1-l6-a1",
        type: "multiple-choice",
        prompt: "Translate \"die Schwester\".",
        correctAnswer: "sister",
        options: ["sister", "brother", "mother", "friend"],
      },
      {
        id: "de-u1-l6-a2",
        type: "translate",
        prompt: "Translate: This is my family.",
        correctAnswer: "Das ist meine Familie.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Anna, encouraging the student to describe their own family and friends using photos as a prompt.",
      openingLine: "Erzähl mir von deiner Familie. Wie viele Geschwister hast du?",
      focusPoints: ["Family vocabulary", "Possessive adjectives", "Personal descriptions"],
    },
  },

  // ---------------------------------------------------------------------
  // Chinese · Unit 1 · Everyday Essentials (zh-u1)
  // ---------------------------------------------------------------------
  {
    id: "zh-u1-l1",
    unitId: "zh-u1",
    languageId: "chinese",
    order: 1,
    title: "Greetings & Introductions",
    goal: "Review greetings and introduce yourself with confidence.",
    icon: "👋",
    status: "completed",
    vocabulary: [
      { id: "zh-u1-l1-v1", word: "很高兴认识你 (hěn gāoxìng rènshi nǐ)", translation: "nice to meet you" },
      { id: "zh-u1-l1-v2", word: "也 (yě)", translation: "also / too" },
    ],
    phrases: [
      {
        id: "zh-u1-l1-p1",
        phrase: "很高兴认识你。(Hěn gāoxìng rènshi nǐ.)",
        translation: "Nice to meet you.",
        context: "When meeting someone for the first time.",
      },
      {
        id: "zh-u1-l1-p2",
        phrase: "我也是。(Wǒ yě shì.)",
        translation: "Likewise.",
        context: "Reply to \"很高兴认识你。\"",
      },
    ],
    activities: [
      {
        id: "zh-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you respond to \"很高兴认识你\"?",
        correctAnswer: "我也是。",
        options: ["我也是。", "再见。", "请。", "几点了？"],
      },
      {
        id: "zh-u1-l1-a2",
        type: "translate",
        prompt: "Translate: nice to meet you",
        correctAnswer: "很高兴认识你。",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mei, reviewing greetings before diving into the café unit, keeping the tone upbeat and encouraging.",
      openingLine: "很高兴再见到你！你今天怎么样？(Hěn gāoxìng zài jiàndào nǐ! Nǐ jīntiān zěnme yàng?)",
      focusPoints: ["Greeting review", "Polite introductions", "Confidence building"],
    },
  },
  {
    id: "zh-u1-l2",
    unitId: "zh-u1",
    languageId: "chinese",
    order: 2,
    title: "Daily Life",
    goal: "Chat about everyday activities and plans.",
    icon: "🗞️",
    status: "completed",
    vocabulary: [
      { id: "zh-u1-l2-v1", word: "工作 (gōngzuò)", translation: "to work" },
      { id: "zh-u1-l2-v2", word: "休息 (xiūxi)", translation: "to rest" },
    ],
    phrases: [
      {
        id: "zh-u1-l2-p1",
        phrase: "你今天要做什么？(Nǐ jīntiān yào zuò shénme?)",
        translation: "What are you doing today?",
        context: "Ask about someone's plans.",
      },
      {
        id: "zh-u1-l2-p2",
        phrase: "我要去工作。(Wǒ yào qù gōngzuò.)",
        translation: "I'm going to work.",
        context: "Talk about your plans.",
      },
    ],
    activities: [
      {
        id: "zh-u1-l2-a1",
        type: "multiple-choice",
        prompt: "Translate \"休息 (xiūxi)\".",
        correctAnswer: "to rest",
        options: ["to rest", "to work", "to eat", "to travel"],
      },
      {
        id: "zh-u1-l2-a2",
        type: "translate",
        prompt: "Translate: What are you doing today?",
        correctAnswer: "你今天要做什么？",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mei, having a casual check-in conversation about the student's day before the café roleplay.",
      openingLine: "你今天要做什么？告诉我吧。",
      focusPoints: ["Present tense verbs", "Daily activities", "Conversational flow"],
    },
  },
  {
    id: "zh-u1-l3",
    unitId: "zh-u1",
    languageId: "chinese",
    order: 3,
    title: "At the Café",
    goal: "Order food and drinks confidently at a café.",
    icon: "☕",
    status: "in-progress",
    vocabulary: [
      { id: "zh-u1-l3-v1", word: "菜单 (càidān)", translation: "the menu" },
      { id: "zh-u1-l3-v2", word: "账单 (zhàngdān)", translation: "the bill" },
    ],
    phrases: [
      {
        id: "zh-u1-l3-p1",
        phrase: "可以给我账单吗？(Kěyǐ gěi wǒ zhàngdān ma?)",
        translation: "Could you bring me the bill, please?",
        context: "Ask for the bill at the end of a meal.",
      },
      {
        id: "zh-u1-l3-p2",
        phrase: "你推荐什么？(Nǐ tuījiàn shénme?)",
        translation: "What do you recommend?",
        context: "Ask the server for a recommendation.",
      },
    ],
    activities: [
      {
        id: "zh-u1-l3-a1",
        type: "multiple-choice",
        prompt: "How do you ask for the bill?",
        correctAnswer: "可以给我账单吗？",
        options: ["可以给我账单吗？", "你推荐什么？", "我要一杯咖啡。", "洗手间在哪里？"],
      },
      {
        id: "zh-u1-l3-a2",
        type: "translate",
        prompt: "Translate: What do you recommend?",
        correctAnswer: "你推荐什么？",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mei, roleplaying as a café barista in Shanghai. Stay fully in character, speak naturally, and gently correct the student's café-related vocabulary.",
      openingLine: "欢迎光临！今天想点什么？(Huānyíng guānglín! Jīntiān xiǎng diǎn shénme?)",
      focusPoints: ["Ordering food and drinks", "Polite requests", "Café vocabulary"],
    },
  },
  {
    id: "zh-u1-l4",
    unitId: "zh-u1",
    languageId: "chinese",
    order: 4,
    title: "Travel & Directions",
    goal: "Ask for and understand directions while traveling.",
    icon: "🧭",
    status: "locked",
    vocabulary: [
      { id: "zh-u1-l4-v1", word: "左边 (zuǒbiān)", translation: "left" },
      { id: "zh-u1-l4-v2", word: "右边 (yòubiān)", translation: "right" },
    ],
    phrases: [
      {
        id: "zh-u1-l4-p1",
        phrase: "车站怎么走？(Chēzhàn zěnme zǒu?)",
        translation: "How do I get to the station?",
        context: "Ask for directions.",
      },
      {
        id: "zh-u1-l4-p2",
        phrase: "一直走。(Yīzhí zǒu.)",
        translation: "Go straight ahead.",
        context: "Give directions.",
      },
    ],
    activities: [
      {
        id: "zh-u1-l4-a1",
        type: "multiple-choice",
        prompt: "Translate \"左边 (zuǒbiān)\".",
        correctAnswer: "left",
        options: ["left", "right", "straight", "back"],
      },
      {
        id: "zh-u1-l4-a2",
        type: "translate",
        prompt: "Translate: How do I get to the station?",
        correctAnswer: "车站怎么走？",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mei, roleplaying as a local giving directions to a tourist in the city.",
      openingLine: "你迷路了吗？告诉我你想去哪里。",
      focusPoints: ["Directions", "Prepositions of place", "Travel vocabulary"],
    },
  },
  {
    id: "zh-u1-l5",
    unitId: "zh-u1",
    languageId: "chinese",
    order: 5,
    title: "Shopping",
    goal: "Shop for clothes and ask about prices.",
    icon: "🛍️",
    status: "locked",
    vocabulary: [
      { id: "zh-u1-l5-v1", word: "尺码 (chǐmǎ)", translation: "size" },
      { id: "zh-u1-l5-v2", word: "价格 (jiàgé)", translation: "price" },
    ],
    phrases: [
      {
        id: "zh-u1-l5-p1",
        phrase: "这个多少钱？(Zhège duōshǎo qián?)",
        translation: "How much does this cost?",
        context: "Ask about a price.",
      },
      {
        id: "zh-u1-l5-p2",
        phrase: "有别的尺码吗？(Yǒu bié de chǐmǎ ma?)",
        translation: "Do you have another size?",
        context: "Ask for a different size.",
      },
    ],
    activities: [
      {
        id: "zh-u1-l5-a1",
        type: "multiple-choice",
        prompt: "Translate \"价格 (jiàgé)\".",
        correctAnswer: "price",
        options: ["price", "size", "color", "store"],
      },
      {
        id: "zh-u1-l5-a2",
        type: "translate",
        prompt: "Translate: How much does this cost?",
        correctAnswer: "这个多少钱？",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mei, roleplaying as a shop assistant helping the student find and pay for clothing.",
      openingLine: "欢迎光临，我能帮您什么？",
      focusPoints: ["Shopping vocabulary", "Asking about price and size", "Numbers"],
    },
  },
  {
    id: "zh-u1-l6",
    unitId: "zh-u1",
    languageId: "chinese",
    order: 6,
    title: "Family & Friends",
    goal: "Talk about your family and friends.",
    icon: "👨‍👩‍👧",
    status: "locked",
    vocabulary: [
      { id: "zh-u1-l6-v1", word: "姐妹 (jiěmèi)", translation: "sister" },
      { id: "zh-u1-l6-v2", word: "朋友 (péngyǒu)", translation: "friend" },
    ],
    phrases: [
      {
        id: "zh-u1-l6-p1",
        phrase: "这是我的家人。(Zhè shì wǒ de jiārén.)",
        translation: "This is my family.",
        context: "Introduce your family.",
      },
      {
        id: "zh-u1-l6-p2",
        phrase: "他是我最好的朋友。(Tā shì wǒ zuì hǎo de péngyǒu.)",
        translation: "He is my best friend.",
        context: "Talk about a friend.",
      },
    ],
    activities: [
      {
        id: "zh-u1-l6-a1",
        type: "multiple-choice",
        prompt: "Translate \"姐妹 (jiěmèi)\".",
        correctAnswer: "sister",
        options: ["sister", "brother", "mother", "friend"],
      },
      {
        id: "zh-u1-l6-a2",
        type: "translate",
        prompt: "Translate: This is my family.",
        correctAnswer: "这是我的家人。",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Mei, encouraging the student to describe their own family and friends using photos as a prompt.",
      openingLine: "跟我说说你的家人吧。你有几个兄弟姐妹？",
      focusPoints: ["Family vocabulary", "Possessive adjectives", "Personal descriptions"],
    },
  },

  // ---------------------------------------------------------------------
  // Italian · Unit 1 · Everyday Essentials (it-u1)
  // ---------------------------------------------------------------------
  {
    id: "it-u1-l1",
    unitId: "it-u1",
    languageId: "italian",
    order: 1,
    title: "Greetings & Introductions",
    goal: "Review greetings and introduce yourself with confidence.",
    icon: "👋",
    status: "completed",
    vocabulary: [
      { id: "it-u1-l1-v1", word: "piacere", translation: "nice to meet you" },
      { id: "it-u1-l1-v2", word: "anche", translation: "also / too" },
    ],
    phrases: [
      {
        id: "it-u1-l1-p1",
        phrase: "Piacere di conoscerti.",
        translation: "Nice to meet you.",
        context: "When meeting someone for the first time.",
      },
      {
        id: "it-u1-l1-p2",
        phrase: "Piacere mio.",
        translation: "Likewise.",
        context: "Reply to \"Piacere di conoscerti.\"",
      },
    ],
    activities: [
      {
        id: "it-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you respond to \"Piacere di conoscerti\"?",
        correctAnswer: "Piacere mio.",
        options: ["Piacere mio.", "Arrivederci.", "Per favore.", "Che ore sono?"],
      },
      {
        id: "it-u1-l1-a2",
        type: "translate",
        prompt: "Translate: nice to meet you",
        correctAnswer: "Piacere di conoscerti.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Giulia, reviewing greetings before diving into the café unit, keeping the tone upbeat and encouraging.",
      openingLine: "Che piacere rivederti! Come stai oggi?",
      focusPoints: ["Greeting review", "Polite introductions", "Confidence building"],
    },
  },
  {
    id: "it-u1-l2",
    unitId: "it-u1",
    languageId: "italian",
    order: 2,
    title: "Daily Life",
    goal: "Chat about everyday activities and plans.",
    icon: "🗞️",
    status: "completed",
    vocabulary: [
      { id: "it-u1-l2-v1", word: "lavorare", translation: "to work" },
      { id: "it-u1-l2-v2", word: "riposare", translation: "to rest" },
    ],
    phrases: [
      {
        id: "it-u1-l2-p1",
        phrase: "Cosa fai oggi?",
        translation: "What are you doing today?",
        context: "Ask about someone's plans.",
      },
      {
        id: "it-u1-l2-p2",
        phrase: "Vado a lavorare.",
        translation: "I'm going to work.",
        context: "Talk about your plans.",
      },
    ],
    activities: [
      {
        id: "it-u1-l2-a1",
        type: "multiple-choice",
        prompt: "Translate \"riposare\".",
        correctAnswer: "to rest",
        options: ["to rest", "to work", "to eat", "to travel"],
      },
      {
        id: "it-u1-l2-a2",
        type: "translate",
        prompt: "Translate: What are you doing today?",
        correctAnswer: "Cosa fai oggi?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Giulia, having a casual check-in conversation about the student's day before the café roleplay.",
      openingLine: "Cosa fai oggi? Raccontami.",
      focusPoints: ["Present tense verbs", "Daily activities", "Conversational flow"],
    },
  },
  {
    id: "it-u1-l3",
    unitId: "it-u1",
    languageId: "italian",
    order: 3,
    title: "At the Café",
    goal: "Order food and drinks confidently at a café.",
    icon: "☕",
    status: "in-progress",
    vocabulary: [
      { id: "it-u1-l3-v1", word: "il menù", translation: "the menu" },
      { id: "it-u1-l3-v2", word: "il conto", translation: "the bill" },
    ],
    phrases: [
      {
        id: "it-u1-l3-p1",
        phrase: "Mi porta il conto, per favore?",
        translation: "Could you bring me the bill, please?",
        context: "Ask for the bill at the end of a meal.",
      },
      {
        id: "it-u1-l3-p2",
        phrase: "Cosa mi consiglia?",
        translation: "What do you recommend?",
        context: "Ask the server for a recommendation.",
      },
    ],
    activities: [
      {
        id: "it-u1-l3-a1",
        type: "multiple-choice",
        prompt: "How do you ask for the bill?",
        correctAnswer: "Mi porta il conto, per favore?",
        options: [
          "Mi porta il conto, per favore?",
          "Cosa mi consiglia?",
          "Vorrei un caffè.",
          "Dov'è il bagno?",
        ],
      },
      {
        id: "it-u1-l3-a2",
        type: "translate",
        prompt: "Translate: What do you recommend?",
        correctAnswer: "Cosa mi consiglia?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Giulia, roleplaying as a café barista in Rome. Stay fully in character, speak naturally, and gently correct the student's café-related vocabulary.",
      openingLine: "Benvenuto al caffè! Cosa vorrebbe ordinare oggi?",
      focusPoints: ["Ordering food and drinks", "Polite requests", "Café vocabulary"],
    },
  },
  {
    id: "it-u1-l4",
    unitId: "it-u1",
    languageId: "italian",
    order: 4,
    title: "Travel & Directions",
    goal: "Ask for and understand directions while traveling.",
    icon: "🧭",
    status: "locked",
    vocabulary: [
      { id: "it-u1-l4-v1", word: "sinistra", translation: "left" },
      { id: "it-u1-l4-v2", word: "destra", translation: "right" },
    ],
    phrases: [
      {
        id: "it-u1-l4-p1",
        phrase: "Come arrivo alla stazione?",
        translation: "How do I get to the station?",
        context: "Ask for directions.",
      },
      {
        id: "it-u1-l4-p2",
        phrase: "Vada sempre dritto.",
        translation: "Go straight ahead.",
        context: "Give directions.",
      },
    ],
    activities: [
      {
        id: "it-u1-l4-a1",
        type: "multiple-choice",
        prompt: "Translate \"sinistra\".",
        correctAnswer: "left",
        options: ["left", "right", "straight", "back"],
      },
      {
        id: "it-u1-l4-a2",
        type: "translate",
        prompt: "Translate: How do I get to the station?",
        correctAnswer: "Come arrivo alla stazione?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Giulia, roleplaying as a local giving directions to a tourist in the city.",
      openingLine: "Si è perso? Mi dica dove vuole andare.",
      focusPoints: ["Directions", "Prepositions of place", "Travel vocabulary"],
    },
  },
  {
    id: "it-u1-l5",
    unitId: "it-u1",
    languageId: "italian",
    order: 5,
    title: "Shopping",
    goal: "Shop for clothes and ask about prices.",
    icon: "🛍️",
    status: "locked",
    vocabulary: [
      { id: "it-u1-l5-v1", word: "la taglia", translation: "size" },
      { id: "it-u1-l5-v2", word: "il prezzo", translation: "price" },
    ],
    phrases: [
      {
        id: "it-u1-l5-p1",
        phrase: "Quanto costa questo?",
        translation: "How much does this cost?",
        context: "Ask about a price.",
      },
      {
        id: "it-u1-l5-p2",
        phrase: "Ha un'altra taglia?",
        translation: "Do you have another size?",
        context: "Ask for a different size.",
      },
    ],
    activities: [
      {
        id: "it-u1-l5-a1",
        type: "multiple-choice",
        prompt: "Translate \"il prezzo\".",
        correctAnswer: "price",
        options: ["price", "size", "color", "store"],
      },
      {
        id: "it-u1-l5-a2",
        type: "translate",
        prompt: "Translate: How much does this cost?",
        correctAnswer: "Quanto costa questo?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Giulia, roleplaying as a shop assistant helping the student find and pay for clothing.",
      openingLine: "Benvenuto al negozio, come posso aiutarla?",
      focusPoints: ["Shopping vocabulary", "Asking about price and size", "Numbers"],
    },
  },
  {
    id: "it-u1-l6",
    unitId: "it-u1",
    languageId: "italian",
    order: 6,
    title: "Family & Friends",
    goal: "Talk about your family and friends.",
    icon: "👨‍👩‍👧",
    status: "locked",
    vocabulary: [
      { id: "it-u1-l6-v1", word: "la sorella", translation: "sister" },
      { id: "it-u1-l6-v2", word: "l'amico", translation: "friend (male)" },
    ],
    phrases: [
      {
        id: "it-u1-l6-p1",
        phrase: "Questa è la mia famiglia.",
        translation: "This is my family.",
        context: "Introduce your family.",
      },
      {
        id: "it-u1-l6-p2",
        phrase: "Lui è il mio migliore amico.",
        translation: "He is my best friend.",
        context: "Talk about a friend.",
      },
    ],
    activities: [
      {
        id: "it-u1-l6-a1",
        type: "multiple-choice",
        prompt: "Translate \"la sorella\".",
        correctAnswer: "sister",
        options: ["sister", "brother", "mother", "friend"],
      },
      {
        id: "it-u1-l6-a2",
        type: "translate",
        prompt: "Translate: This is my family.",
        correctAnswer: "Questa è la mia famiglia.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Giulia, encouraging the student to describe their own family and friends using photos as a prompt.",
      openingLine: "Parlami della tua famiglia. Quanti fratelli hai?",
      focusPoints: ["Family vocabulary", "Possessive adjectives", "Personal descriptions"],
    },
  },

  // ---------------------------------------------------------------------
  // Portuguese · Unit 1 · Everyday Essentials (pt-u1)
  // ---------------------------------------------------------------------
  {
    id: "pt-u1-l1",
    unitId: "pt-u1",
    languageId: "portuguese",
    order: 1,
    title: "Greetings & Introductions",
    goal: "Review greetings and introduce yourself with confidence.",
    icon: "👋",
    status: "completed",
    vocabulary: [
      { id: "pt-u1-l1-v1", word: "prazer", translation: "nice to meet you" },
      { id: "pt-u1-l1-v2", word: "também", translation: "also / too" },
    ],
    phrases: [
      {
        id: "pt-u1-l1-p1",
        phrase: "Muito prazer.",
        translation: "Nice to meet you.",
        context: "When meeting someone for the first time.",
      },
      {
        id: "pt-u1-l1-p2",
        phrase: "Igualmente.",
        translation: "Likewise.",
        context: "Reply to \"Muito prazer.\"",
      },
    ],
    activities: [
      {
        id: "pt-u1-l1-a1",
        type: "multiple-choice",
        prompt: "How do you respond to \"Muito prazer\"?",
        correctAnswer: "Igualmente.",
        options: ["Igualmente.", "Tchau.", "Por favor.", "Que horas são?"],
      },
      {
        id: "pt-u1-l1-a2",
        type: "translate",
        prompt: "Translate: nice to meet you",
        correctAnswer: "Muito prazer.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Beatriz, reviewing greetings before diving into the café unit, keeping the tone upbeat and encouraging.",
      openingLine: "Que bom te ver de novo! Como você está hoje?",
      focusPoints: ["Greeting review", "Polite introductions", "Confidence building"],
    },
  },
  {
    id: "pt-u1-l2",
    unitId: "pt-u1",
    languageId: "portuguese",
    order: 2,
    title: "Daily Life",
    goal: "Chat about everyday activities and plans.",
    icon: "🗞️",
    status: "completed",
    vocabulary: [
      { id: "pt-u1-l2-v1", word: "trabalhar", translation: "to work" },
      { id: "pt-u1-l2-v2", word: "descansar", translation: "to rest" },
    ],
    phrases: [
      {
        id: "pt-u1-l2-p1",
        phrase: "O que você vai fazer hoje?",
        translation: "What are you doing today?",
        context: "Ask about someone's plans.",
      },
      {
        id: "pt-u1-l2-p2",
        phrase: "Vou trabalhar.",
        translation: "I'm going to work.",
        context: "Talk about your plans.",
      },
    ],
    activities: [
      {
        id: "pt-u1-l2-a1",
        type: "multiple-choice",
        prompt: "Translate \"descansar\".",
        correctAnswer: "to rest",
        options: ["to rest", "to work", "to eat", "to travel"],
      },
      {
        id: "pt-u1-l2-a2",
        type: "translate",
        prompt: "Translate: What are you doing today?",
        correctAnswer: "O que você vai fazer hoje?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Beatriz, having a casual check-in conversation about the student's day before the café roleplay.",
      openingLine: "O que você vai fazer hoje? Me conta.",
      focusPoints: ["Present tense verbs", "Daily activities", "Conversational flow"],
    },
  },
  {
    id: "pt-u1-l3",
    unitId: "pt-u1",
    languageId: "portuguese",
    order: 3,
    title: "At the Café",
    goal: "Order food and drinks confidently at a café.",
    icon: "☕",
    status: "in-progress",
    vocabulary: [
      { id: "pt-u1-l3-v1", word: "o cardápio", translation: "the menu" },
      { id: "pt-u1-l3-v2", word: "a conta", translation: "the bill" },
    ],
    phrases: [
      {
        id: "pt-u1-l3-p1",
        phrase: "Pode trazer a conta, por favor?",
        translation: "Could you bring me the bill, please?",
        context: "Ask for the bill at the end of a meal.",
      },
      {
        id: "pt-u1-l3-p2",
        phrase: "O que você recomenda?",
        translation: "What do you recommend?",
        context: "Ask the server for a recommendation.",
      },
    ],
    activities: [
      {
        id: "pt-u1-l3-a1",
        type: "multiple-choice",
        prompt: "How do you ask for the bill?",
        correctAnswer: "Pode trazer a conta, por favor?",
        options: [
          "Pode trazer a conta, por favor?",
          "O que você recomenda?",
          "Eu quero um café.",
          "Onde é o banheiro?",
        ],
      },
      {
        id: "pt-u1-l3-a2",
        type: "translate",
        prompt: "Translate: What do you recommend?",
        correctAnswer: "O que você recomenda?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Beatriz, roleplaying as a café barista in Lisbon. Stay fully in character, speak naturally, and gently correct the student's café-related vocabulary.",
      openingLine: "Bem-vindo ao café! O que você gostaria de pedir hoje?",
      focusPoints: ["Ordering food and drinks", "Polite requests", "Café vocabulary"],
    },
  },
  {
    id: "pt-u1-l4",
    unitId: "pt-u1",
    languageId: "portuguese",
    order: 4,
    title: "Travel & Directions",
    goal: "Ask for and understand directions while traveling.",
    icon: "🧭",
    status: "locked",
    vocabulary: [
      { id: "pt-u1-l4-v1", word: "esquerda", translation: "left" },
      { id: "pt-u1-l4-v2", word: "direita", translation: "right" },
    ],
    phrases: [
      {
        id: "pt-u1-l4-p1",
        phrase: "Como chego à estação?",
        translation: "How do I get to the station?",
        context: "Ask for directions.",
      },
      {
        id: "pt-u1-l4-p2",
        phrase: "Siga em frente.",
        translation: "Go straight ahead.",
        context: "Give directions.",
      },
    ],
    activities: [
      {
        id: "pt-u1-l4-a1",
        type: "multiple-choice",
        prompt: "Translate \"esquerda\".",
        correctAnswer: "left",
        options: ["left", "right", "straight", "back"],
      },
      {
        id: "pt-u1-l4-a2",
        type: "translate",
        prompt: "Translate: How do I get to the station?",
        correctAnswer: "Como chego à estação?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Beatriz, roleplaying as a local giving directions to a tourist in the city.",
      openingLine: "Você se perdeu? Me diga para onde quer ir.",
      focusPoints: ["Directions", "Prepositions of place", "Travel vocabulary"],
    },
  },
  {
    id: "pt-u1-l5",
    unitId: "pt-u1",
    languageId: "portuguese",
    order: 5,
    title: "Shopping",
    goal: "Shop for clothes and ask about prices.",
    icon: "🛍️",
    status: "locked",
    vocabulary: [
      { id: "pt-u1-l5-v1", word: "o tamanho", translation: "size" },
      { id: "pt-u1-l5-v2", word: "o preço", translation: "price" },
    ],
    phrases: [
      {
        id: "pt-u1-l5-p1",
        phrase: "Quanto custa isso?",
        translation: "How much does this cost?",
        context: "Ask about a price.",
      },
      {
        id: "pt-u1-l5-p2",
        phrase: "Tem outro tamanho?",
        translation: "Do you have another size?",
        context: "Ask for a different size.",
      },
    ],
    activities: [
      {
        id: "pt-u1-l5-a1",
        type: "multiple-choice",
        prompt: "Translate \"o preço\".",
        correctAnswer: "price",
        options: ["price", "size", "color", "store"],
      },
      {
        id: "pt-u1-l5-a2",
        type: "translate",
        prompt: "Translate: How much does this cost?",
        correctAnswer: "Quanto custa isso?",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Beatriz, roleplaying as a shop assistant helping the student find and pay for clothing.",
      openingLine: "Bem-vindo à loja, como posso ajudar?",
      focusPoints: ["Shopping vocabulary", "Asking about price and size", "Numbers"],
    },
  },
  {
    id: "pt-u1-l6",
    unitId: "pt-u1",
    languageId: "portuguese",
    order: 6,
    title: "Family & Friends",
    goal: "Talk about your family and friends.",
    icon: "👨‍👩‍👧",
    status: "locked",
    vocabulary: [
      { id: "pt-u1-l6-v1", word: "a irmã", translation: "sister" },
      { id: "pt-u1-l6-v2", word: "o amigo", translation: "friend (male)" },
    ],
    phrases: [
      {
        id: "pt-u1-l6-p1",
        phrase: "Esta é a minha família.",
        translation: "This is my family.",
        context: "Introduce your family.",
      },
      {
        id: "pt-u1-l6-p2",
        phrase: "Ele é meu melhor amigo.",
        translation: "He is my best friend.",
        context: "Talk about a friend.",
      },
    ],
    activities: [
      {
        id: "pt-u1-l6-a1",
        type: "multiple-choice",
        prompt: "Translate \"a irmã\".",
        correctAnswer: "sister",
        options: ["sister", "brother", "mother", "friend"],
      },
      {
        id: "pt-u1-l6-a2",
        type: "translate",
        prompt: "Translate: This is my family.",
        correctAnswer: "Esta é a minha família.",
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are Beatriz, encouraging the student to describe their own family and friends using photos as a prompt.",
      openingLine: "Me conta sobre sua família. Quantos irmãos você tem?",
      focusPoints: ["Family vocabulary", "Possessive adjectives", "Personal descriptions"],
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
