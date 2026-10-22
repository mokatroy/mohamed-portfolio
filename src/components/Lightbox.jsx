import { useEffect, useRef } from "react";

export default function Lightbox({ items, index, onClose, onNavigate }) {
  const closeRef = useRef(null);
  const project = items[index];
  const total = items.length;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      // RTL: left arrow moves forward
      if (event.key === "ArrowLeft") onNavigate((index + 1) % total);
      if (event.key === "ArrowRight") onNavigate((index - 1 + total) % total);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, onClose, onNavigate]);

  if (!project) return null;

  const go = (dir) => onNavigate((index + dir + total) % total);

  return (
    <div
      className="fixed inset-0 z-[95] overflow-y-auto bg-ink/95 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="mx-auto flex min-h-full w-full max-w-[1180px] flex-col px-4 py-5 md:px-8 md:py-7">
        {/* header */}
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-3">
          <div className="flex items-center gap-3 font-mono-ui text-[10px] text-muted">
            <span className="num-ltr text-ember">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <span className="h-px w-6 bg-white/20" />
            <span className="hidden text-paper/70 sm:block">
              الآن قيد التشغيل
            </span>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="group flex items-center gap-2 border border-white/20 px-3 py-2 font-mono-ui text-[10px] text-paper/80 transition-colors hover:border-ember hover:bg-ember hover:text-ink"
          >
            <span className="hidden sm:inline">إغلاق</span>
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 stroke-current" fill="none">
              <path d="M1 1l10 10M11 1L1 11" strokeWidth="1.6" />
            </svg>
          </button>
        </div>

        {/* player */}
        <div className="relative overflow-hidden border border-white/10 bg-black">
          <video
            key={project.id}
            src={project.video}
            poster={project.poster}
            controls
            autoPlay
            playsInline
            className="aspect-video w-full bg-black"
          />
        </div>

        {/* meta */}
        <div className="mt-5 grid gap-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="font-mono-ui text-[9px] text-ember">
              {project.client}
            </p>
            <h3 className="mt-2 text-2xl font-black leading-tight md:text-3xl">
              {project.title}
            </h3>
            {project.description && (
              <p className="mt-3 max-w-xl text-[13px] leading-7 text-paper/70 md:text-sm md:leading-8">
                {project.description}
              </p>
            )}
            {project.role?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.role.map((r) => (
                  <span
                    key={r}
                    className="border border-white/15 px-2.5 py-1 font-mono-ui text-[9px] text-paper/70"
                  >
                    {r}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between gap-5 md:col-span-5">
            <dl className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 font-mono-ui text-[10px]">
              <div>
                <dt className="text-muted">السنة</dt>
                <dd className="num-ltr mt-1 text-paper">{project.year}</dd>
              </div>
              <div>
                <dt className="text-muted">المدة</dt>
                <dd className="num-ltr mt-1 text-paper">{project.duration}</dd>
              </div>
            </dl>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex flex-1 items-center justify-center gap-2 border border-white/15 py-3 font-mono-ui text-[10px] text-paper/80 transition-colors hover:border-paper hover:bg-paper hover:text-ink"
              >
                السابق
                <span aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex flex-1 items-center justify-center gap-2 border border-white/15 py-3 font-mono-ui text-[10px] text-paper/80 transition-colors hover:border-paper hover:bg-paper hover:text-ink"
              >
                <span aria-hidden="true">←</span>
                التالي
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-4 font-mono-ui text-[9px] text-muted">
          ESC للإغلاق · اسهم الكيبورد للتنقل
        </p>
      </div>
    </div>
  );
}
