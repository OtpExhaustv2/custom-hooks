import { useTranslation } from "./useTranslation";

interface TranslationComponentProps {}

const TranslationComponent: React.FC<TranslationComponentProps> = ({}) => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  return (
    <div>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <button onClick={() => setLanguage("fr")}>Change to French</button>
      <button onClick={() => setLanguage("en")}>Change to English</button>
    </div>
  );
};

export default TranslationComponent;
