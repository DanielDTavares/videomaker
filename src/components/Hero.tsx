import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={ref} className="relative overflow-hidden border-b border-zinc-800 bg-background pt-28 pb-20 sm:pt-36 sm:pb-28">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-zinc-800/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #3f3f46 1px, transparent 1px), linear-gradient(to bottom, #3f3f46 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-card px-3.5 py-1.5 text-xs font-medium text-zinc-300"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            App para alunos · Plataforma para nutricionistas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl lg:text-[3.4rem]"
          >
            Resultados na dieta não dependem de sorte.
            <br />
            <span className="text-brand">Dependem de dados.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            O UseMetaFit é o diário de macros inteligente que mantém alunos no controle todos os
            dias — e a plataforma completa que dá aos nutricionistas a estrutura para escalar
            consultorias sem perder qualidade no acompanhamento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#precos"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-brand-dark"
            >
              Começar agora
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#nutricionistas"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-transparent px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-card"
            >
              Sou nutricionista
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-xs text-zinc-500"
          >
            <span>Sem cartão para testar</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>Cancele quando quiser</span>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: phoneY }} className="flex justify-center">
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
