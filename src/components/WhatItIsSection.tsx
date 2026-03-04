import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const WhatItIsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("what.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t("what.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t("what.p1")}{" "}
            <span className="text-foreground font-semibold">{t("what.p1.bold")}</span>
            {t("what.p1.end")}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("what.p2")}{" "}
            <span className="text-foreground font-semibold">{t("what.p2.bold")}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatItIsSection;
