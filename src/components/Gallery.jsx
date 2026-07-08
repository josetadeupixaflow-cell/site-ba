import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const images = [
  '/site-ba/1000083186.jpg',
  '/site-ba/1000083193.jpg',
  '/site-ba/1000083197.jpg',
  '/site-ba/1000083203.jpg',
  '/site-ba/1000083208.jpg',
  '/site-ba/1000083255.jpg',
  '/site-ba/1000083258.jpg',
  '/site-ba/1000084922.jpg',
  '/site-ba/1000084933.jpg',
  '/site-ba/IMG-20260707-WA0098.jpg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galeria" className="bg-slate-50/80 px-6 py-20 lg:px-8 lg:py-28 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl">
        <div data-aos="fade-up">
          <SectionHeading eyebrow="Galeria" title="Momentos de produção, estilo e excelência." />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.button
              key={image + index}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              className="overflow-hidden rounded-[1.25rem]"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <img src={image} alt={`Galeria ${index + 1}`} className="h-64 w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4">
            <motion.button onClick={() => setSelectedImage(null)} className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white" aria-label="Fechar galeria">
              <FiX size={24} />
            </motion.button>
            <motion.img initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} src={selectedImage} alt="Imagem ampliada" className="max-h-[85vh] max-w-full rounded-[1.5rem] object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
