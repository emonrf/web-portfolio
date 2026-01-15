export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Emanuel Feria",
    title: "Computer Science Senior",
    tagline: "Building scalable systems & elegant user experiences",
    email: "emanuel.rferia@gmail.com",
    github: "https://github.com/emonrf",
    linkedin: "https://linkedin.com/in/emanuelrf",
    resume: "/resume.pdf"
  },

  projects: [
    {
      id: 1,
      title: "DungeonDive",
      description: "Full-stack Java game with procedural generation, database persistence, and responsive UI. Features Factory/Builder patterns, state management, and turn-based combat engine.",
      tags: ["Java 17", "JavaFX", "SQLite", "Jackson", "JUnit"],
      github: "https://github.com/glavavlada/DungeonDive",
      image: "/projects/dungeondive.png",
      gif: "/projects/dungeondive.gif"
    },
    {
      id: 2,
      title: "CNMI Bar Association Management System",
      description: "Full-stack member management platform for licensed attorneys with authentication, member directory, off-island calendar tracking, and admin panel. Firebase + Firestore + SendGrid integration. Ongoing project with payment processing and CLE tracking planned.",
      tags: ["JavaScript", "Firebase", "Firestore", "Node.js", "SendGrid", "Cloud Functions"],
      demo: "https://cnmi-bar.netlify.app/",
      image: "/projects/cnmi-bar.png"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Minimalist portfolio with dark mode, smooth animations, and hover effects. Built with React 19, Framer Motion, and Tailwind CSS v4.",
      tags: ["React 19", "Framer Motion", "Tailwind CSS", "Vite"],
      github: "https://github.com/emonrf/web-portfolio",
      demo: window.location.href,
      isLivePreview: true // Special flag for live preview
    }
  ],

  education: [
    {
      id: 1,
      year: "September 2024 – Present",
      title: "University of Washington, Tacoma",
      details: "Bachelor of Science in Computer Science and Systems. Expected graduation: Fall 2026.",
      gpa: "3.5"
    },
    {
      id: 2,
      year: "September 2022 – June 2024",
      title: "Tacoma Community College, Tacoma",
      details: "Completed coursework in Computer Science and Systems.",
      gpa: "3.7"
    },
    {
      id: 3,
      year: "August 2019 – June 2022",
      title: "Saipan Southern High School, Saipan",
      details: "High School Diploma."
    }
  ],

};
