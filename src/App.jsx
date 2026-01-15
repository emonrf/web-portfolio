import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Education from './sections/Education'
import ContactSection from './sections/ContactSection'
import ScrollProgress from './components/ui/ScrollProgress'
import ThemeToggle from './components/ui/ThemeToggle'
import { ThemeProvider } from './hooks/useTheme'
import './tailwind.css'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white antialiased">
        <ScrollProgress />
        <ThemeToggle />

        <main>
          <Hero />
          <Projects />
          <Education />
          <ContactSection />
        </main>

        <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
          <p>&copy; 2025 Emanuel Feria. Built with React + Framer Motion.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App