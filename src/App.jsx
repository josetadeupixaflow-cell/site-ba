import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showTop, setShowTop] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('ba-theme');
    if (storedTheme) return storedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 120 });
    const handleScroll = () => setShowTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('ba-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-slate-800 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <a
        href="https://wa.me/5511966087912"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {showTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-white text-primary shadow-lg transition hover:scale-105 dark:bg-slate-900"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}

export default App;
