import { motion } from 'framer-motion';
import { Users, FileText, ClipboardCheck, Gift, type LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ADVANTAGES: Advantage[] = [
  {
    icon: Users,
    title: 'Painel para até 50 alunos ativos',
    description: 'Gerencie toda a sua base de pacientes em um só lugar, com visão completa do progresso de cada um.',
  },
  {
    icon: FileText,
    title: 'Criação rápida de planos alimentares',
    description: 'Monte e edite prescrições em minutos, com templates reutilizáveis para agilizar sua rotina clínica.',
  },
  {
    icon: ClipboardCheck,
    title: 'Revisão de anamneses',
    description: 'Acesse as respostas completas de anamnese de cada aluno antes mesmo da primeira consulta.',
  },
  {
    icon: Gift,
    title: 'Subsídio de acesso para alunos',
    description: 'No Plano Pro-All-Inclusive, você oferece o app a preço reduzido para quem está sob sua consultoria.',
  },
];

export default function NutriSection() {
  return (
    <section id="nutricionistas" className="border-b border-zinc-800 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full border border-zinc-800 bg-card px-3 py-1 text-xs font-medium text-brand">
              Espaço do nutricionista
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              Escale sua consultoria sem perder o controle clínico
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400">
              O UseMetaFit dá ao nutricionista uma estrutura completa de gestão: do primeiro
              contato com o aluno até o acompanhamento diário, tudo organizado em um único
              painel — para você atender mais gente sem abrir mão da qualidade.
            </p>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-card p-6">
              <p className="text-sm font-medium text-zinc-200">Plano Pro-All-Inclusive</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Subsidie o acesso ao app para os seus alunos vinculados, reduzindo a mensalidade
                deles a apenas <span className="font-semibold text-brand">R$ 9,90/mês</span> —
                um diferencial competitivo para fechar mais contratos de consultoria.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-zinc-800 bg-card p-5 transition-colors hover:border-zinc-700"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-zinc-50">{adv.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{adv.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
