import { Reveal } from "./Reveal";

export default function SectionHead({ index, kicker, title, desc, action }) {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal>
        <div className="flex items-center gap-3 font-mono-ui text-[10px] text-muted">
          <span className="text-ember">{index}</span>
          <span className="h-px w-8 bg-white/20" />
          <span>{kicker}</span>
        </div>
      </Reveal>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <Reveal delay={80}>
          <h2 className="max-w-2xl text-balance-ar text-[clamp(1.9rem,4.6vw,3.5rem)] font-black leading-[1.08] tracking-tight">
            {title}
          </h2>
        </Reveal>
        {action && <Reveal delay={140}>{action}</Reveal>}
      </div>

      {desc && (
        <Reveal delay={140}>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted md:text-[15px] md:leading-8">
            {desc}
          </p>
        </Reveal>
      )}
    </div>
  );
}
