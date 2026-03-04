import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const WhoSection = () => {
  const { t } = useLanguage();

  const fits = [t("who.f1"), t("who.f2"), t("who.f3"), t("who.f4")];

  const notFor = [
    { title: t("who.n1.title"), text: t("who.n1.text") },
    { title: t("who.n2.title"), text: t("who.n2.text") },
    { title: t("who.n3.title"), text: t("who.n3.text") },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Who it fits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("who.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t("who.title")}
          </h2>
          <div className="space-y-4">
            {fits.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary font-bold mt-0.5">✔</span>
                <p className="text-muted-foreground leading-relaxed">{f}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What it is NOT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] uppercase text-primary mb-4">
            {t("who.not.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t("who.not.title")}
          </h2>
          <div className="space-y-6">
            {notFor.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-lg">✕</span>
                  <div>
                    <h3 className="font-semibold mb-2">{n.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{n.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoSection;
