import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const products = [
  {
    title: 'Baby Doll',
    description: 'Peças femininas com acabamento refinado e conforto para todos os momentos.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Calcinhas',
    description: 'Modelos modernos, leves e com excelente caimento para o dia a dia.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Moda Feminina',
    description: 'Coleções com estilo, personalidade e acabamento impecável.',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Camisetas',
    description: 'Produção versátil para marcas e demandas de moda contemporânea.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pijamas',
    description: 'Conforto e estética em peças pensadas para repouso e estilo.',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="bg-slate-50/80 px-6 py-20 lg:px-8 lg:py-28 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl">
        <div data-aos="fade-up">
          <SectionHeading eyebrow="Produtos" title="Peças com identidade, conforto e acabamento premium." />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950"
            >
              <img src={product.image} alt={product.title} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{product.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{product.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
