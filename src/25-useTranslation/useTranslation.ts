import { useLocalStorage } from "../8-useStorage/useStorage";
import * as translations from "./translations";

export const useTranslation = () => {
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "en"
  );

  const translate = (key: string) => {
    const keys = key.split(".");
    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
};

const getNestedTranslation = (language: string | undefined, keys: string[]) => {
  if (!language) return;
  return keys.reduce((obj, key) => {
    return obj?.[key];
  }, translations[language]);
};
