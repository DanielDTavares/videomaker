import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Barcode, Flame, Beef, Wheat, Droplet } from 'lucide-react';

interface Macro {
  label: string;
  icon: typeof Beef;
  current: number;
  target: number;
  color: string;
}

const MACROS: Macro[] = [
  { label: 'Proteínas', icon: Beef, current: 118, target: 160, color: '#22c55e' },
  { label: 'Carboidratos', icon: Wheat, current: 142, target: 220, color: '#eab308' },
  { label: 'Gorduras', icon: Droplet, current: 38, target: 60, color: '#60a5fa' },
];

const FOOD_LOG = [
  { name: 'Peito de frango grelhado', kcal: 248 },
  { name: 'Arroz integral (100g)', kcal: 130 },
  { name: 'Pasta de amendoim', kcal: 95 },
];

export default function PhoneMockup() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(1), 500);
    return () => clearTimeout(timer);
  }, []);

  const caloriesTarget = 2180;
  const caloriesCurrent = 1640;
  const caloriesPct = Math.round((caloriesCurrent / caloriesTarget) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto w-[280px] sm:w-[300px]"
    >
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-b from-zinc-800/40 to-transparent blur-2xl" />

      <div className="relative rounded-[2.5rem] border border-zinc-800 bg-zinc-950 p-3 shadow-2xl shadow-black/60">
        <div className="absolute top-3 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-zinc-950" />

        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900">
          <div className="flex items-center justify-between px-5 pt-6 pb-3 text-[11px] text-zinc-400">
            <span>9:41</span>
            <span className="font-medium text-zinc-200">UseMetaFit</span>
            <span>100%</span>
          </div>

          <div className="px-4 pb-5">
            <div className="rounded-2xl border border-zinc-800 bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-zinc-400">Meta diária</p>
                <Flame className="h-3.5 w-3.5 text-brand" />
              </div>

              <div className="mt-3 flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0">
                  <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#27272a" strokeWidth="9" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 42}
                      initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                      animate={{
                        strokeDashoffset: progress
                          ? 2 * Math.PI * 42 * (1 - caloriesPct / 100)
                          : 2 * Math.PI * 42,
                      }}
                      transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold text-zinc-50">{caloriesPct}%</span>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-lg font-semibold text-zinc-50">
                    {caloriesCurrent} <span className="text-xs font-normal text-zinc-500">/ {caloriesTarget} kcal</span>
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-500">Restam {caloriesTarget - caloriesCurrent} kcal hoje</p>
                </div>
              </div>

              <div className="mt-4 space-y-2.5">
                {MACROS.map((macro, i) => {
                  const Icon = macro.icon;
                  const pct = Math.round((macro.current / macro.target) * 100);
                  return (
                    <div key={macro.label}>
                      <div className="mb-1 flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1.5 text-zinc-400">
                          <Icon className="h-3 w-3" style={{ color: macro.color }} />
                          {macro.label}
                        </span>
                        <span className="text-zinc-500">
                          {macro.current}g / {macro.target}g
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: macro.color }}
                          initial={{ width: 0 }}
                          animate={{ width: progress ? `${pct}%` : 0 }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 + i * 0.15 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-zinc-800 bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-zinc-400">Diário de hoje</p>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/15">
                  <Barcode className="h-3.5 w-3.5 text-brand" />
                </div>
              </div>
              <ul className="mt-3 space-y-2.5">
                {FOOD_LOG.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                    className="flex items-center justify-between border-b border-zinc-800/70 pb-2 text-[11px] last:border-0 last:pb-0"
                  >
                    <span className="text-zinc-300">{item.name}</span>
                    <span className="text-zinc-500">{item.kcal} kcal</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
