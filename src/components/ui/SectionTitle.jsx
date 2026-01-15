import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "../../config/animations";

export default function SectionTitle({ children, subtitle }) {
  return (
    <motion.div
      className="mb-16 text-center"
      {...ANIMATION_CONFIG.fadeInUp}
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
