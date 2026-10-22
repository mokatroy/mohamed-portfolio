import { useRef, useState } from "react";
import { categories } from "../data/projects";
import { useCanHover } from "./Reveal";

const spans = {
  wide: "md:col-span-8",
  half: "md:col-span-6",
  narrow: "md:col-span-4",
};

const heights = {
  wide: "h-[260px] sm:h-[340px] md:h-[430px]",
  half: "h-[260px] sm:h-[320px] md:h-[395px]",
  narrow: "h-[300px] sm:h-[350px] md:h-[430px]",
};

export default function ProjectCard({ project, index, uniform, onOpen }) {
  const canHover = useCanHover();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const size = uniform ? "half" : project.size || "half";
  const label =
    categories.find((c) => c.id === project.category)?.label || project.category;

  const start = () => {
    if (!canHover) return;
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  };

  const stop = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
    setPlaying(false);
  };

  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      className={`media-card card-in group relative block overflow-hidden border border-white/10 bg-ink-soft text-start transition-colors hover:border-white/25 ${
        spans[size]
      } ${heights[size]} ${playing ? "is-playing" : ""}`}
      style={{ animationDelay: `${index * 70}ms` }}
      aria-label={`${project.title} — ${project.client}`}
    >
      <img
        src={project.poster}
        alt={`بوستر ${project.title}`}
        className="media-poster absolute inset-0 h-full w-full object-cover group-hover:scale-[1.05]"
        loading="lazy"
      />
      <video
        ref={videoRef}
        src={project.video}
        poster={project.poster}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
        tabIndex={-1}
        aria-hidden="true"
      />

      <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/5" />
      <span className="absolute inset-0 bg-ember/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* top row */}
      <span className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4">
        <span className="border border-white/15 bg-ink/60 px-2 py-1 font-mono-ui text-[9px] text-paper/85 backdrop-blur-sm">
          {label}
        </span>
        <span className="num-ltr font-mono-ui text-[9px] text-paper/60">
          {project.year}
        </span>
      </span>

      {/* play cue */}
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-12 w-12 scale-75 place-items-center rounded-full border border-paper/40 bg-ink/40 opacity-0 backdrop-blur-sm transition-all duration-[400ms] group-hover:scale-100 group-hover:opacity-100 md:h-14 md:w-14">
          <svg viewBox="0 0 10 10" className="h-3 w-3 fill-paper md:h-3.5 md:w-3.5">
            <path d="M2 0.8l7 4.2-7 4.2z" />
          </svg>
        </span>
      </span>

      {/* bottom */}
      <span className="absolute inset-x-0 bottom-0 block p-4 md:p-5">
        <span className="flex items-end justify-between gap-3">
          <span className="block">
            <span className="block font-mono-ui text-[9px] text-ember">
              {project.client}
            </span>
            <span className="mt-1.5 block text-lg font-black leading-tight md:text-xl">
              {project.title}
            </span>
          </span>
          <span className="num-ltr shrink-0 border border-white/20 px-2 py-1 font-mono-ui text-[9px] text-paper/70">
            {project.duration}
          </span>
        </span>
        <span className="card-cta mt-3 flex items-center gap-2 font-mono-ui text-[9px] text-paper/85">
          <span className="h-px w-6 bg-ember" />
          شوف العمل
        </span>
      </span>
    </button>
  );
}
