import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <section id="contato" className="bg-gradient-to-br from-primary/10 via-white to-accent/10 px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-aos="fade-right">
          <SectionHeading eyebrow="Contato" title="Vamos transformar sua ideia em uma peça de alto padrão." description="Entre em contato para solicitar um orçamento, discutir um projeto ou conhecer mais sobre nossos serviços." />

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-sm dark:bg-slate-950/70">
              <FaPhoneAlt className="text-primary" />
              <span>(11) 96608-7912</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-sm dark:bg-slate-950/70">
              <FaEnvelope className="text-primary" />
              <span>contato@baconfeccoes.com.br</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4 shadow-sm dark:bg-slate-950/70">
              <FaMapMarkerAlt className="text-primary" />
              <span>Vila Nova Galvão</span>
            </div>
          </div>

          <a href="https://wa.me/5511966087912" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg shadow-green-500/20">
            <FaWhatsapp /> Falar no WhatsApp
          </a>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950" data-aos="fade-left">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Nome</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-primary dark:border-slate-700 dark:bg-slate-900" placeholder="Seu nome" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Telefone</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-primary dark:border-slate-700 dark:bg-slate-900" placeholder="(xx) xxxxx-xxxx" />
            </div>
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">E-mail</label>
            <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-primary dark:border-slate-700 dark:bg-slate-900" placeholder="seu@email.com" />
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">Mensagem</label>
            <textarea rows="5" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 focus:border-primary dark:border-slate-700 dark:bg-slate-900" placeholder="Conte-nos sobre seu projeto" />
          </div>
          <button className="mt-8 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-semibold text-white shadow-soft transition hover:scale-[1.02]">Enviar</button>
        </form>
      </div>

      <div className="mx-auto mt-12 max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
        <iframe
          src="https://www.google.com/maps?q=Rua%20Morro%20do%20Livramento&output=embed"
          title="Localização Rua Morro do Livramento"
          className="h-72 w-full rounded-[1.5rem] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
