import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Barcode, Calculator, ListChecks, LineChart, ClipboardList, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
}

const FEATURES: Feature[] = [
  {
    icon: Barcode,
    title: 'Diário com leitor de código de barras',
    description: 'Registre alimentos em segundos escaneando a embalagem direto da câmera do celular.',
    detail: 'Base com milhares de produtos brasileiros, sem precisar digitar nada.',
  },
  {
    icon: Calculator,
    title: 'Calculadora metabólica de TMB',
    description: 'Cálculo automático da Taxa Metabólica Basal e do gasto calórico total diário.',
    detail: 'Ajusta metas de macros automaticamente conforme peso, atividade e objetivo.',
  },
  {
    icon: ListChecks,
    title: 'Checklist de aderência à dieta',
    description: 'Acompanhamento diário do cumprimento do plano alimentar prescrito.',
    detail: 'Visualização clara de quantos dias da semana o aluno seguiu a dieta corretamente.',
  },
  {
    icon: LineChart,
    title: 'Gráficos de evolução de peso',
    description: 'Histórico visual do progresso, com tendências de curto e longo prazo.',
    detail: 'Identifica platôs e oscilações para ajustes de estratégia em tempo real.',
  },
  {
    icon: ClipboardList,
    title: 'Respostas de anamnese',
    description: 'Formulário completo de anamnese nutricional integrado ao perfil do aluno.',
    detail: 'Toda a história clínica e de hábitos disponível para o nutricionista revisar.',
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const ActiveIcon = FEATURES[active].icon;

  return (
    <section id="funcionalidades" className="border-b border-zinc-800 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full border border-zinc-800 bg-card px-3 py-1 text-xs font-medium text-brand">
            Funcionalidades do app
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            Tudo que o aluno precisa para evoluir todos os dias
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Um ecossistema único conectando o dia a dia do aluno às decisões clínicas do
            nutricionista.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-3 lg:grid-cols-[320px_1fr] lg:gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              const isActive = i === active;
              return (
                <button
                  key={feature.title}
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors lg:shrink ${
                    isActive
                      ? 'border-brand/40 bg-card'
                      : 'border-zinc-800 bg-transparent hover:border-zinc-700 hover:bg-card/60'
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                      isActive ? 'border-brand/30 bg-brand/10 text-brand' : 'border-zinc-800 text-zinc-500'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span
                    className={`text-sm font-medium whitespace-nowrap lg:whitespace-normal ${
                      isActive ? 'text-zinc-50' : 'text-zinc-400'
                    }`}
                  >
                    {feature.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-zinc-800 bg-card p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                  <ActiveIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-50 sm:text-2xl">
                  {FEATURES[active].title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {FEATURES[active].description}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-500">
                  {FEATURES[active].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
