import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(199,125,255,0.25),_transparent_40%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
          <div className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Confecção moderna • Qualidade • Excelência
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            B/A Confecções
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Qualidade, dedicação e excelência na produção de roupas, com soluções completas em moda, corte, costura e produção sob encomenda.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contato" className="rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3 text-center font-semibold text-white shadow-soft transition hover:scale-[1.02]">
              Solicitar orçamento
            </a>
            <a href="https://wa.me/55969966087912" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-green-500 px-7 py-3 font-semibold text-green-600 transition hover:bg-green-50 dark:hover:bg-green-500/10">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
            alt="Linha de produção de confecção moderna"
            className="h-[480px] w-full rounded-[2rem] object-cover shadow-soft"
            loading="eager"
          />
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
