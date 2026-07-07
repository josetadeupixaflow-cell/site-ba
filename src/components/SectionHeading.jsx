export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {description && <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  );
}
