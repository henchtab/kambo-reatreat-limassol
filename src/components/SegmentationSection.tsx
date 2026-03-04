import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = ["🔋", "🧠", "😶", "🌪️"];

const SegmentationSection = () => {
  const { t } = useLanguage();

  const symptoms = [
    { icon: icons[0], title: t("seg.s1.title"), text: t("seg.s1.text") },
    { icon: icons[1], title: t("seg.s2.title"), text: t("seg.s2.text") },
    { icon: icons[2], title: t("seg.s3.title"), text: t("seg.s3.text") },
    { icon: icons[3], title: t("seg.s4.title"), text: t("seg.s4.text") },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("seg.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t("seg.title")}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {symptoms.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border p-6 md:p-8"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentationSection;
