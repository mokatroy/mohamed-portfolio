import { useEffect, useState } from "react";
import { site } from "../data/site";
import { prefersReducedMotion } from "./Reveal";

function Timecode() {
  const [frames, setFrames] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrames((f) => f + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const total = 18 * 24 * 60 + 4 * 24 + frames; // starts at a random-ish point
  const f = total % 24;
  const s = Math.floor(total / 24) % 60;
  const m = Math.floor(total / (24 * 60)) % 60;
  const h = Math.floor(total / (24 * 60 * 60)) % 24;

  return (
    <span className="num-ltr font-mono-ui text-[10px] text-paper/60">
      {pad(h)}:{pad(m)}:{pad(s)}:{pad(f)}
    </span>
  );
}

export default function Hero({ ready, onPlayReel }) {
  const reduce = prefersReducedMotion();

  return (
    <section id="top" className={`relative ${ready ? "is-ready" : ""}`}>
      {/* background reel */}
      <div className="absolute inset-0 overflow-hidden">
        {!reduce && (
          <video
            className="h-full w-full scale-105 object-cover opacity-35"
            src={site.showreel.src}
            poster={site.showreel.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,77,46,0.16),transparent_58%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col px-5 md:px-10">
        {/* top meta */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 py-5">
          <div className="flex items-center gap-3 font-mono-ui text-[10px] text-muted">
            <span className="text-ember">01</span>
            <span className="h-px w-7 bg-white/20" />
            <span>portfolio 2026</span>
          </div>
          <div className="hidden items-center gap-6 font-mono-ui text-[10px] text-muted sm:flex">
            <span>{site.location}</span>
            <span className="num-ltr">TCR</span>
            <Timecode />
          </div>
        </div>

        {/* main */}
        <div className="flex flex-1 flex-col justify-center py-14 md:py-20">
          <h1 className="display-xl text-[clamp(3.4rem,13.5vw,10.5rem)]">
            <span className="line-mask">
              <span className="line-inner" style={{ transitionDelay: "60ms" }}>
                محمد
              </span>
            </span>
            <span className="line-mask">
              <span className="line-inner" style={{ transitionDelay: "170ms" }}>
                عبد العزيز<span className="text-ember">.</span>
              </span>
            </span>
          </h1>

          <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="line-mask">
                <span
                  className="line-inner font-mono-ui text-[10px] text-ember md:text-[11px]"
                  style={{ transitionDelay: "300ms" }}
                >
                  {site.roleEn} — {site.role}
                </span>
              </div>
              <div className="line-mask mt-4">
                <span
                  className="line-inner max-w-xl text-sm leading-7 text-paper/80 md:text-base md:leading-8"
                  style={{ transitionDelay: "380ms" }}
                >
                  {site.intro}
                </span>
              </div>
            </div>

            <div
              className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end"
              style={{
                opacity: ready ? 1 : 0,
                transform: ready ? "none" : "translateY(14px)",
                transition: "opacity .8s ease .5s, transform .8s ease .5s",
              }}
            >
              <button
                type="button"
                onClick={onPlayReel}
                className="group inline-flex items-center gap-3 bg-paper px-5 py-3.5 text-[13px] font-bold text-ink transition-colors hover:bg-ember"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-paper transition-colors group-hover:bg-ink">
                  <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 fill-current">
                    <path d="M2 0.8l7 4.2-7 4.2z" />
                  </svg>
                </span>
                اتفرج على الشوريل
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/25 px-5 py-3.5 text-[13px] font-semibold text-paper transition-colors hover:border-paper/60 hover:bg-white/5"
              >
                عندي مشروع
              </a>
            </div>
          </div>
        </div>

        {/* bottom meta */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 py-5">
          <div className="flex items-center gap-3">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-ember" />
            <span className="text-[11px] text-paper/70">
              {site.availabilityText}
            </span>
          </div>

          <a
            href="#showreel"
            className="group flex items-center gap-2 font-mono-ui text-[9px] text-muted transition-colors hover:text-paper"
          >
            <span>scroll</span>
            <span className="relative block h-6 w-px overflow-hidden bg-white/20">
              <span className="absolute inset-x-0 top-0 h-2 animate-[scroll-cue_1.8s_ease-in-out_infinite] bg-ember" />
            </span>
          </a>

          <div className="hidden items-center gap-5 font-mono-ui text-[10px] text-muted sm:flex">
            {site.showreel.specs.map((s) => (
              <span key={s} className="num-ltr">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
