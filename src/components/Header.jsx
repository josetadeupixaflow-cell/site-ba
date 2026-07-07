import { useState } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#contato', label: 'Contato' },
];

export default function Header({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#inicio" className="text-xl font-semibold tracking-[0.2em] text-primary">
          B/A CONFECÇÕES
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 transition hover:text-primary dark:text-slate-300">
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:text-primary dark:border-slate-700 dark:text-slate-100"
            aria-label="Alternar tema"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href="#contato" className="rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02]">
            Solicitar Orçamento
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-100"
            aria-label="Alternar tema"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-100" onClick={() => setOpen(!open)}>
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-300" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contato" className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-center text-sm font-semibold text-white" onClick={() => setOpen(false)}>
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
