import { useState } from "react";
import { site } from "../data/site";
import { Reveal } from "./Reveal";

const waLink = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,77,46,0.14),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 font-mono-ui text-[10px] text-muted">
                <span className="text-ember">06</span>
                <span className="h-px w-8 bg-white/20" />
                <span>contact</span>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h2 className="mt-5 text-balance-ar text-[clamp(2.2rem,6.4vw,4.6rem)] font-black leading-[1.03] tracking-tight">
                عندك فيديو
                <br />
                محتاج يتظبط؟
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-lg text-[13.5px] leading-8 text-paper/70 md:text-[15px] md:leading-9">
                ابعت البريف أو اللينك على الواتساب، وقولي المدة والشكل اللي في
                دماغك. هرد عليك في نفس اليوم بخطة شغل وميعاد أول كت.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-ember px-6 py-4 text-[13px] font-bold text-ink transition-colors hover:bg-paper"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm0 18.02c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.55-3.69 8.22-8.23 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.96-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" />
                  </svg>
                  كلمني على واتساب
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 border border-white/20 px-5 py-4 font-mono-ui text-[10px] text-paper/80 transition-colors hover:border-paper/60 hover:bg-white/5"
                >
                  {copied ? "اتنسخ ✓" : "انسخ الإيميل"}
                </button>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <a
                href={`mailto:${site.contact.email}`}
                className="group mt-8 inline-flex flex-col"
              >
                <span className="font-mono-ui text-[9px] text-muted">email</span>
                <span className="num-ltr mt-2 text-lg font-bold tracking-tight text-paper transition-colors group-hover:text-ember md:text-2xl">
                  {site.contact.email}
                </span>
                <span className="mt-2 h-px w-full origin-right scale-x-100 bg-white/15 transition-colors group-hover:bg-ember" />
              </a>
            </Reveal>
          </div>

          {/* side column */}
          <div className="md:col-span-5 md:pt-14">
            <Reveal delay={160}>
              <div className="border border-white/10 bg-ink/40 p-5">
                <div className="flex items-center gap-3">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-ember" />
                  <span className="font-mono-ui text-[9px] text-ember">
                    status
                  </span>
                </div>
                <p className="mt-3 text-sm font-bold">
                  {site.availabilityText}
                </p>
                <p className="mt-2 text-[12px] leading-6 text-muted">
                  فاضي لمشروع جديد الشهر ده. الرد بيتم في نفس اليوم، والبريف
                  المستعجل بياخد أولوية.
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 font-mono-ui text-[9px] text-muted">
                  <span>توقيت القاهرة</span>
                  <span className="num-ltr">GMT +2</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-6">
                <p className="font-mono-ui text-[9px] text-muted">follow</p>
                <div className="mt-2 border-t border-white/10">
                  {site.contact.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 border-b border-white/10 py-3.5 transition-colors hover:text-ember"
                    >
                      <span className="text-[13px] font-semibold">
                        {social.label}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="num-ltr font-mono-ui text-[9px] text-muted transition-colors group-hover:text-paper/70">
                          {social.handle}
                        </span>
                        <span className="text-[11px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
