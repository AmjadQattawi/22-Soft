import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function FeatureHeader() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center  "
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-[#c94f00]">
        {t("home.features.header.label")}
      </span>

      <h2 className="text-2xl mt-3 md:text-4xl font-bold text-[#18395b]">
        {t("home.features.header.title")}{" "}
        <span className="text-[#c94f00]">
          {t("home.features.header.highlight")}
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm md:text-base leading-relaxed text-slate-600">
        {t("home.features.header.description")}
      </p>
    </motion.div>
  );
}