import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const OfferSection = () => {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gradient-amber">
            {t("offer.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("offer.text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
