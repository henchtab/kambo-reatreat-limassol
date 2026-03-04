import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = ["🔇", "🛡️", "⚡", "🧬"];

const ResultsSection = () => {
  const { t } = useLanguage();

  const results = [
    { icon: icons[0], title: t("res.r1.title"), text: t("res.r1.text") },
    { icon: icons[1], title: t("res.r2.title"), text: t("res.r2.text") },
    { icon: icons[2], title: t("res.r3.title"), text: t("res.r3.text") },
    { icon: icons[3], title: t("res.r4.title"), text: t("res.r4.text") },
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("res.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("res.title")}
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-primary pl-6"
            >
              <span className="text-2xl mb-3 block">{r.icon}</span>
              <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
