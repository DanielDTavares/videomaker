import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface Plan {
  audience: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  note?: string;
}

const PLANS: Plan[] = [
  {
    audience: 'Nutricionista',
    name: 'Essencial',
    price: 'R$ 43,90',
    period: '/mês',
    description: 'Para começar a estruturar sua consultoria digital.',
    features: [
      'Até 50 alunos ativos',
      'Criação de planos alimentares',
      'Revisão de anamneses',
      'Acompanhamento de evolução de peso',
    ],
  },
  {
    audience: 'Nutricionista',
    name: 'Pro-All-Inclusive',
    price: 'R$ 80,90',
    period: '/mês',
    description: 'Tudo do Essencial, com subsídio de acesso para seus alunos.',
    features: [
      'Tudo do plano Essencial',
      'Acesso subsidiado para alunos vinculados',
      'Aluno paga apenas R$ 9,90/mês',
      'Suporte prioritário',
    ],
    highlighted: true,
  },
  {
    audience: 'Aluno',
    name: 'Avulso',
    price: 'R$ 23,90',
    period: '/mês',
    description: 'Para quem usa o diário de macros sem nutricionista vinculado.',
    features: [
      'Diário de macros completo',
      'Leitor de código de barras',
      'Calculadora de TMB',
      'Gráficos de evolução de peso',
    ],
    note: 'Vinculado a um nutricionista Pro-All-Inclusive: R$ 9,90/mês',
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-zinc-800 bg-card px-3 py-1 text-xs font-medium text-brand">
            Planos e preços
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Um plano para cada momento da sua jornada
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Preços transparentes para nutricionistas e alunos, com desconto exclusivo para quem
            está vinculado a um profissional parceiro.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col rounded-2xl border p-7 ${
                plan.highlighted ? 'border-brand/40 bg-card' : 'border-zinc-800 bg-card'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  {plan.audience}
                </span>
                {plan.highlighted && (
                  <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-zinc-950">
                    Mais popular
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-lg font-semibold text-zinc-50">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-zinc-400">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-zinc-50">{plan.price}</span>
                <span className="text-sm text-zinc-500">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.note && (
                <div className="mt-6 rounded-lg border border-brand/30 bg-brand/10 px-3.5 py-3 text-xs leading-relaxed text-brand">
                  {plan.note}
                </div>
              )}

              <a
                href="#"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-brand text-zinc-950 hover:bg-brand-dark'
                    : 'border border-zinc-800 text-zinc-200 hover:border-zinc-700'
                }`}
              >
                Assinar agora
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
