import { useLanguage } from "@/i18n/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setLang(lang === "en" ? "ru" : "en")}
        className="bg-card/80 backdrop-blur-md border border-border px-4 py-2 font-mono text-sm tracking-wider hover:border-primary/50 transition-colors uppercase"
      >
        {lang === "en" ? "RU" : "EN"}
      </button>
    </div>
  );
};

export default LanguageToggle;
