import { useState } from "react";
import { site } from "../data/site";
import SectionHead from "./SectionHead";
import { Reveal } from "./Reveal";

export default function About() {
  const [portrait, setPortrait] = useState("loading");

  return (
    <section id="about" className="border-t border-white/10 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHead index="05" kicker="about" title="مين محمد؟" />

        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          {/* portrait */}
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-ink-soft">
              <img
                src="/images/portrait.jpg"
                alt={`صورة ${site.name}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  portrait === "ok" ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => setPortrait("ok")}
                onError={() => setPortrait("error")}
              />

              {portrait !== "ok" && (
                <div className="absolute inset-0 grid place-items-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,46,0.18),transparent_60%)]" />
                  <div className="relative flex flex-col items-center gap-4">
                    <span className="grid h-20 w-20 place-items-center border border-white/20 font-mono-ui text-sm tracking-[0.3em] text-ember">
                      {site.monogram}
                    </span>
                    <span className="font-mono-ui text-[9px] text-muted">
                      portrait coming soon
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
                <div>
                  <p className="font-mono-ui text-[9px] text-ember">
                    {site.nameEn}
                  </p>
                  <p className="mt-1 font-mono-ui text-[9px] text-paper/60">
                    {site.location}
                  </p>
                </div>
                <span className="num-ltr font-mono-ui text-[9px] text-paper/50">
                  since 2019
                </span>
              </div>

              <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-ember/70" />
              <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-ember/70" />
            </div>
          </Reveal>

          {/* text */}
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <h3 className="text-2xl font-black leading-snug md:text-[2rem] md:leading-[1.35]">
                بمونتاج الحكاية قبل ما أقطّع أول لقطة.
              </h3>
            </Reveal>

            <div className="mt-5 space-y-4">
              {site.about.map((paragraph, i) => (
                <Reveal key={i} delay={130 + i * 60}>
                  <p className="text-[13.5px] leading-8 text-paper/75 md:text-[15px] md:leading-9">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={260}>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6">
                {site.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono-ui text-[9px] text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-paper/90">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={320}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-[13px] font-semibold transition-colors hover:border-ember hover:bg-ember hover:text-ink"
              >
                نشتغل مع بعض
                <span className="transition-transform group-hover:-translate-x-1">
                  ←
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
