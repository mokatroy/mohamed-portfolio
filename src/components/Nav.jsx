import { useEffect, useState } from "react";
import { site } from "../data/site";

const links = [
  { href: "#showreel", label: "الشوريل", en: "Reel" },
  { href: "#work", label: "الشغل", en: "Work" },
  { href: "#services", label: "الخدمات", en: "Services" },
  { href: "#about", label: "عني", en: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[75] transition-colors duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-[1400px] items-center justify-between gap-4 px-5 md:px-10">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-white/20 font-mono-ui text-[10px] tracking-[0.2em] text-ember transition-colors group-hover:border-ember/70 group-hover:bg-ember group-hover:text-ink">
              {site.monogram}
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[13px] font-bold">{site.name}</span>
              <span className="mt-1 font-mono-ui text-[9px] text-muted">
                {site.roleEn}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative py-2 text-[13px] font-semibold text-paper/75 transition-colors hover:text-paper"
              >
                {l.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-2 border border-ember/60 px-4 py-2 font-mono-ui text-[10px] text-ember transition-colors hover:bg-ember hover:text-ink sm:inline-flex"
            >
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-ember" />
              متاح للشغل
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "اقفل المينيو" : "افتح المينيو"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center border border-white/15 text-paper md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-[5px] h-px bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-[10px] h-px bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-[74] flex flex-col bg-ink/97 backdrop-blur-xl transition-all duration-[400ms] md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mt-[68px] flex flex-1 flex-col justify-between px-5 pb-10 pt-8">
          <nav className="flex flex-col">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-white/10 py-5 text-3xl font-black transition-colors hover:text-ember"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span>{l.label}</span>
                <span className="font-mono-ui text-[10px] text-muted">
                  {l.en}
                </span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-between border border-ember bg-ember px-5 py-4 font-bold text-ink"
            >
              <span>تواصل معايا</span>
              <span className="font-mono-ui text-[10px]">let's talk</span>
            </a>
          </nav>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono-ui text-[10px] text-muted">
            {site.contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-ember"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
