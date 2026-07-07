import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'Mariana P.',
    role: 'Cliente',
    text: 'Profissionalismo, agilidade e acabamento excelente. A equipe superou nossas expectativas.',
  },
  {
    name: 'Carlos A.',
    role: 'Marca própria',
    text: 'A produção e o atendimento foram impecáveis. Excelente parceria para nosso projeto.',
  },
  {
    name: 'Beatriz S.',
    role: 'Empresária',
    text: 'Muito satisfeita com a qualidade das peças e a dedicação em cada detalhe.',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div data-aos="fade-up">
        <SectionHeading eyebrow="Depoimentos" title="O que nossos clientes dizem." center />
      </div>

      <div className="mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">“{item.text}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-sm text-primary">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
