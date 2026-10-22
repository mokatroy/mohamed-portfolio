import { useMemo, useState } from "react";
import { categories, projects } from "../data/projects";
import SectionHead from "./SectionHead";
import ProjectCard from "./ProjectCard";
import { Reveal } from "./Reveal";

export default function Work({ onOpen }) {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  const available = categories.filter((c) =>
    c.id === "all"
      ? projects.length > 0
      : projects.some((p) => p.category === c.id),
  );

  return (
    <section id="work" className="border-t border-white/10 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHead
          index="03"
          kicker="selected work"
          title="شغل اشتغلت عليه — من الفكرة للتسليم."
          desc="كل فيديو هنا اشتغلت عليه من أول الترتيب لحد آخر تصحيح لون. دوس على أي كارت عشان تشغله بالصوت."
          action={
            <div className="flex items-center gap-3 font-mono-ui text-[10px] text-muted">
              <span className="num-ltr text-paper">
                {String(visible.length).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-white/20" />
              <span className="num-ltr">projects</span>
            </div>
          }
        />

        <Reveal>
          <div className="mb-8 flex flex-wrap gap-2">
            {available.map((c) => {
              const count =
                c.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === c.id).length;
              const active = filter === c.id;

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setFilter(c.id)}
                  aria-pressed={active}
                  className={`group inline-flex items-center gap-2 border px-4 py-2 text-[12px] font-semibold transition-colors ${
                    active
                      ? "border-paper bg-paper text-ink"
                      : "border-white/15 text-paper/70 hover:border-white/35 hover:text-paper"
                  }`}
                >
                  {c.label}
                  <span
                    className={`num-ltr font-mono-ui text-[9px] ${
                      active ? "text-ink/50" : "text-muted"
                    }`}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          key={filter}
          className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5"
        >
          {visible.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              uniform={filter !== "all"}
              onOpen={(index) => onOpen(visible, index)}
            />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-16 text-center text-sm text-muted">
            مفيش أعمال في القسم ده لسه.
          </p>
        )}
      </div>
    </section>
  );
}
