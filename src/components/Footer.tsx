export default function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <span className="font-semibold text-zinc-300">
          UseMeta<span className="text-brand">Fit</span>
        </span>
        <p>© {new Date().getFullYear()} UseMetaFit. Todos os direitos reservados.</p>
        <a href="https://usemetafit.com.br" className="transition-colors hover:text-zinc-300">
          usemetafit.com.br
        </a>
      </div>
    </footer>
  );
}
