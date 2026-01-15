import { motion } from "framer-motion";
import { PORTFOLIO_CONFIG } from "../config/portfolio";
import { ANIMATION_CONFIG } from "../config/animations";
import SectionTitle from "../components/ui/SectionTitle";

function EducationItem({ education, index }) {
  const isEven = index % 2 === 0;
  const animationVariant = isEven
    ? ANIMATION_CONFIG.slideInLeft
    : ANIMATION_CONFIG.slideInRight;

  return (
    <motion.div
      {...animationVariant}
      className="relative flex items-center"
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-gray-900 z-10" />

      {/* Content card */}
      <div
        className={`w-[calc(50%-2rem)] ${
          isEven ? "mr-auto pr-8 text-right" : "ml-auto pl-8 text-left"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"
        >
          <div className={`mb-3`}>
            <h3 className="text-xl font-bold">{education.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{education.year}</p>
            {education.gpa && (
              <p className="text-gray-600 dark:text-gray-400 font-medium">GPA: {education.gpa}</p>
            )}
          </div>

          <p className="text-gray-700 dark:text-gray-300">{education.details}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900" id="education">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Academic background and qualifications">
          Education
        </SectionTitle>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 -translate-x-1/2" />

          <div className="space-y-12">
            {PORTFOLIO_CONFIG.education.map((edu, index) => (
              <EducationItem key={edu.id} education={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
