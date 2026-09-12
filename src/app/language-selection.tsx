import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackButton } from "@/components/BackButton";
import { LanguageCard } from "@/components/LanguageCard";
import { PrimaryButton } from "@/components/PrimaryButton";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { languages } from "@/data/languages";
import type { LanguageId } from "@/types/learning";

export default function LanguageSelection() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<LanguageId>("spanish");

  const query = search.trim().toLowerCase();
  const results = query
    ? languages.filter(
        (language) =>
          language.name.toLowerCase().includes(query) ||
          language.nativeName.toLowerCase().includes(query),
      )
    : languages.filter((language) => language.popular);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }}>
      <View className="flex-row items-center px-6 pt-4">
        <BackButton />
        <Text className="heading-3 flex-1 text-center font-poppins-semibold!">
          Choose a language
        </Text>
        <View className="h-6 w-6" />
      </View>

      <View className="mx-6 mt-5 flex-row items-center rounded-full border border-border bg-surface px-4 py-3.5">
        <View className="relative h-[18px] w-[18px]">
          <View className="absolute left-0 top-0 h-3 w-3 rounded-full border-2 border-text-secondary" />
          <View className="absolute bottom-0 right-0 h-0.5 w-2 rotate-45 rounded-full bg-text-secondary" />
        </View>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search languages"
          placeholderTextColor={colors.neutral.textSecondary}
          accessibilityLabel="Search languages"
          autoCapitalize="none"
          autoCorrect={false}
          className="ml-3 flex-1 font-poppins-regular text-body-lg text-text-primary"
        />
      </View>

      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text className="caption font-poppins-semibold! uppercase tracking-wide">
          {query ? "Search results" : "Popular"}
        </Text>

        <View className="mt-3">
          {results.length ? (
            results.map((language) => (
              <LanguageCard
                key={language.id}
                language={language}
                selected={language.id === selectedId}
                onPress={() => setSelectedId(language.id)}
              />
            ))
          ) : (
            <Text className="body-medium mt-6 text-center text-text-secondary!">
              No languages match &ldquo;{search}&rdquo;.
            </Text>
          )}
        </View>

        <PrimaryButton
          label="Confirm"
          className="mt-2"
          onPress={() => router.back()}
        />

        <Image
          source={images.earth}
          contentFit="contain"
          style={{ width: "100%", aspectRatio: 1, marginTop: 24 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
