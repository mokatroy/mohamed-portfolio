import { useRef, useState } from "react";
import { site } from "../data/site";
import SectionHead from "./SectionHead";
import { Reveal, useCanHover } from "./Reveal";

export default function Showreel({ onPlay }) {
  const canHover = useCanHover();
  const videoRef = useRef(null);
  const [previewing, setPreviewing] = useState(false);

  const startPreview = () => {
    if (!canHover) return;
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play()
      .then(() => setPreviewing(true))
      .catch(() => {});
  };

  const stopPreview = () => {
    videoRef.current?.pause();
    setPreviewing(false);
  };

  return (
    <section id="showreel" className="relative py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHead
          index="02"
          kicker="showreel"
          title="أحسن دقيقة عندي… في فيديو واحد."
          desc={site.showreel.subtitle}
          action={
            <a
              href="#work"
              className="group inline-flex items-center gap-2 font-mono-ui text-[10px] text-paper/70 transition-colors hover:text-ember"
            >
              شوف الأعمال كاملة
              <span className="inline-block transition-transform group-hover:-translate-x-1">
                ←
              </span>
            </a>
          }
        />

        <Reveal>
          <button
            type="button"
            onClick={onPlay}
            onMouseEnter={startPreview}
            onMouseLeave={stopPreview}
            className="group relative block w-full overflow-hidden border border-white/10 bg-ink-soft text-start"
            aria-label="تشغيل الشوريل بالصوت"
          >
            <div className="relative aspect-[16/9] w-full">
              <img
                src={site.showreel.poster}
                alt="بوستر الشوريل"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <video
                ref={videoRef}
                src={site.showreel.src}
                muted
                loop
                playsInline
                preload="none"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  previewing ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/40" />

              {/* corner meta */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-6">
                <span className="font-mono-ui text-[9px] text-paper/70 md:text-[10px]">
                  play reel
                </span>
                <span className="num-ltr font-mono-ui text-[9px] text-paper/70 md:text-[10px]">
                  {site.showreel.duration}
                </span>
              </div>

              {/* play */}
              <div className="absolute inset-0 grid place-items-center">
                <span className="relative grid h-16 w-16 place-items-center rounded-full border border-paper/30 bg-ink/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-ember group-hover:bg-ember md:h-24 md:w-24">
                  <svg
                    viewBox="0 0 10 10"
                    className="h-4 w-4 fill-paper transition-colors group-hover:fill-ink md:h-5 md:w-5"
                  >
                    <path d="M2 0.8l7 4.2-7 4.2z" />
                  </svg>
                </span>
              </div>

              {/* bottom */}
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-4 md:p-6">
                <div>
                  <p className="font-mono-ui text-[9px] text-ember md:text-[10px]">
                    showreel
                  </p>
                  <p className="mt-1 text-lg font-black leading-none md:text-2xl">
                    {site.name}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {site.showreel.specs.map((s) => (
                    <span
                      key={s}
                      className="num-ltr border border-white/20 px-2 py-1 font-mono-ui text-[8px] text-paper/70 md:text-[9px]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
