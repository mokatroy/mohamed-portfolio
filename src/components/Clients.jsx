import { site } from "../data/site";
import Marquee from "./Marquee";
import { Reveal } from "./Reveal";

export default function Clients() {
  return (
    <section className="border-t border-white/10 bg-ink-soft/30">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-0">
          {site.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 60}
              className={
                i === 0
                  ? "md:pe-6"
                  : "md:border-e md:border-white/10 md:px-6 md:last:border-e-0 md:last:pe-0"
              }
            >
              <p className="text-3xl font-black tracking-tight md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] text-muted md:text-[12px]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <Marquee items={site.clients.map((client) => client)} className="border-x-0" />
    </section>
  );
}
