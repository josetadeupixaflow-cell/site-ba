import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-6 py-14 text-slate-300 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold text-white">B/A Confecções</h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">Confecção moderna com excelência em moda, produção e serviços especializados para marcas e clientes.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Links rápidos</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><a href="#inicio" className="transition hover:text-white">Início</a></li>
            <li><a href="#sobre" className="transition hover:text-white">Sobre</a></li>
            <li><a href="#produtos" className="transition hover:text-white">Produtos</a></li>
            <li><a href="#servicos" className="transition hover:text-white">Serviços</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>(96) 96608-7912</li>
            <li>contato@baconfeccoes.com.br</li>
            <li>Atendimento personalizado</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Redes sociais</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary"><FaFacebookF /></a>
            <a href="https://wa.me/55969966087912" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 B/A Confecções. Todos os direitos reservados.</p>
        <p>Desenvolvido para forte presença digital e novos negócios.</p>
      </div>
    </footer>
  );
}
