import { useEffect, useState } from "react";
import { prefersReducedMotion } from "./Reveal";

const pad = (n) => String(n).padStart(2, "0");

export default function Preloader({ onDone, monogram }) {
  const [closing, setClosing] = useState(false);
  const [gone, setGone] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onDone();
      setGone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;

    const tick = (now) => {
      const p = Math.min(1, (now - start) / 1150);
      setFrame(Math.round(p * 24 * 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const finish = setTimeout(() => {
      setClosing(true);
      document.body.style.overflow = "";
      onDone();
    }, 1300);

    const remove = setTimeout(() => setGone(true), 1750);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(finish);
      clearTimeout(remove);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] flex flex-col items-center justify-center bg-ink transition-opacity duration-500 ${
        closing ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative grid h-16 w-16 place-items-center border border-white/15">
          <span className="font-mono-ui text-xs tracking-[0.3em] text-ember">
            {monogram}
          </span>
          <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-ember" />
          <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-ember" />
        </div>

        <div className="w-[190px]">
          <div className="h-px w-full bg-white/15">
            <div className="boot-bar h-px origin-right bg-ember" />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono-ui text-[10px] text-muted">
            <span>loading timeline</span>
            <span className="num-ltr text-paper/70">
              00:00:{pad(Math.floor(frame / 24))}:{pad(frame % 24)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
