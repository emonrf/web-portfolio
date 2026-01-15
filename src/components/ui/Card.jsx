import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "../../config/animations";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      variants={ANIMATION_CONFIG.cardHover}
      initial="rest"
      whileHover="hover"
      className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
