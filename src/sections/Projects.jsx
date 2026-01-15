import { motion } from "framer-motion";
import { useState } from "react";
import { PORTFOLIO_CONFIG } from "../config/portfolio";
import { ANIMATION_CONFIG } from "../config/animations";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import LivePreview from "../components/ui/LivePreview";

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={ANIMATION_CONFIG.staggerItem}
      custom={index}
    >
      <Card className="h-full flex flex-col">
        {/* Project Image or Live Preview */}
        {project.isLivePreview ? (
          <LivePreview title={project.title} />
        ) : (
          <div
            className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {project.image ? (
              <img
                src={isHovered && project.gif ? project.gif : project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            ) : (
              <span className="text-gray-400 dark:text-gray-600 text-sm">Project Image</span>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.github && (
              <Button href={project.github} variant="primary" className="text-sm">
                View Code
              </Button>
            )}
            {project.demo && (
              <Button href={project.demo} variant="secondary" className="text-sm">
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Full-stack applications and system design projects">
          Selected Work
        </SectionTitle>

        <motion.div
          variants={ANIMATION_CONFIG.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PORTFOLIO_CONFIG.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
