import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const WhySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("why.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t("why.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {t("why.p1")}{" "}
            <span className="text-foreground font-semibold">{t("why.p1.bold")}</span>
            {t("why.p1.end")}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("why.p2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
