import { FaCut, FaTools, FaDraftingCompass, FaIndustry } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const services = [
  { title: 'Corte de tecidos', description: 'Precisão e cuidado em cada corte para melhor aproveitamento e qualidade.', icon: <FaCut /> },
  { title: 'Costura industrial', description: 'Processos eficientes e acabamento profissional para grandes volumes.', icon: <FaTools /> },
  { title: 'Desenvolvimento de moldes', description: 'Criação de bases técnicas para novas coleções e peças exclusivas.', icon: <FaDraftingCompass /> },
  { title: 'Produção para marcas', description: 'Confecção sob medida e private label para marcas que valorizam excelência.', icon: <FaIndustry /> },
];

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div data-aos="fade-up">
        <SectionHeading eyebrow="Serviços" title="Soluções completas para moda, produção e personalização." />
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <div key={service.title} data-aos="fade-up" data-aos-delay={index * 100} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-purple-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-2xl text-white">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
