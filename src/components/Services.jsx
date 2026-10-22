import { site } from "../data/site";
import SectionHead from "./SectionHead";
import { Reveal } from "./Reveal";

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/10 bg-ink-soft/40 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <SectionHead
          index="04"
          kicker="what i do"
          title="اللي بعمله في كل فيديو."
          desc="مش بس تقطيع لقطات — الشغل كامل من أول ترتيب الحكاية لحد الملف النهائي الجاهز للنشر."
        />

        <div className="border-t border-white/10">
          {site.services.map((service, i) => (
            <Reveal key={service.title} delay={i * 50}>
              <div className="group grid gap-3 border-b border-white/10 py-6 md:grid-cols-12 md:items-start md:gap-8 md:py-8">
                <span className="font-mono-ui text-[10px] text-muted md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-xl font-black leading-tight transition-colors duration-300 group-hover:text-ember md:col-span-4 md:text-2xl">
                  {service.title}
                </h3>

                <p className="max-w-lg text-[13px] leading-7 text-muted md:col-span-5 md:text-sm md:leading-8">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 md:col-span-2 md:justify-end">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/12 px-2 py-1 font-mono-ui text-[8px] text-paper/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* tools */}
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="font-mono-ui text-[9px] text-muted">
              الأدوات
            </span>
            <span className="h-px w-6 bg-white/20" />
            {site.tools.map((tool) => (
              <span
                key={tool}
                className="font-mono-ui text-[10px] text-paper/70"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>

        {/* process */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 font-mono-ui text-[10px] text-muted">
              <span className="text-ember">↳</span>
              <span>طريقة الشغل</span>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {site.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 70}>
                <div className="group h-full border border-white/10 bg-ink/40 p-5 transition-colors hover:border-ember/40 md:p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono-ui text-[10px] text-ember">
                      {step.step}
                    </span>
                    <span className="h-px flex-1 bg-white/10 transition-colors group-hover:bg-ember/30" />
                  </div>
                  <h4 className="mt-4 text-base font-bold md:text-lg">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-[12.5px] leading-6 text-muted">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
