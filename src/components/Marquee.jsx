export default function Marquee({ items, className = "" }) {
  return (
    <div className={`marquee border-y border-white/10 py-4 ${className}`}>
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-mono-ui text-[10px] text-paper/55 md:text-[11px]">
                  {item}
                </span>
                <span className="h-1 w-1 rotate-45 bg-ember/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
