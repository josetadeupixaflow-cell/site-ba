import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div data-aos="fade-right" className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Sobre a empresa"
            title="Uma história construída com dedicação, técnica e visão de futuro."
            description="A B/A Confecções nasceu durante a pandemia produzindo máscaras e, com dedicação e qualidade, expandiu sua atuação para a fabricação de baby dolls, pijamas, camisetas, moda feminina e muito mais. Hoje também oferecemos serviços especializados de corte, costura e desenvolvimento de moldes."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Qualidade garantida', 'Atendimento personalizado', 'Produção própria', 'Entrega confiável'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <p className="font-medium text-slate-800 dark:text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div data-aos="fade-left" className="order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
            alt="Equipe trabalhando na confecção"
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-soft"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
