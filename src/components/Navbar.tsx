import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#nutricionistas', label: 'Nutricionistas' },
  { href: '#precos', label: 'Preços' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'border-b border-zinc-800 bg-background/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-base font-bold tracking-tight text-zinc-50">
          UseMeta<span className="text-brand">Fit</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#precos"
            className="inline-flex items-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-brand-dark"
          >
            Começar agora
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-zinc-800 bg-background px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#precos"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-zinc-950"
            >
              Começar agora
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
