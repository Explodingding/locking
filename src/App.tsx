import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import HistoryTimeline from './components/HistoryTimeline';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Set initial dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Locking Dance
          </motion.h1>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-6">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#history" className="hover:text-primary transition-colors">History</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Events</a></li>
            </ul>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-background-dark"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <AboutSection />
        <HistoryTimeline />
        <Gallery />
        <Events />
      </main>

      <Footer />
    </div>
  );
}

export default App;
