import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "../../config/animations";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = ""
}) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-colors";
  const variants = {
    primary: "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200",
    secondary: "bg-white dark:bg-gray-800 text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-50 dark:hover:bg-gray-700",
    ghost: "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div
      whileTap={ANIMATION_CONFIG.buttonTap}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
