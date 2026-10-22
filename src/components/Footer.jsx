import { site } from "../data/site";

const sections = [
  { href: "#showreel", label: "الشوريل" },
  { href: "#work", label: "الشغل" },
  { href: "#services", label: "الخدمات" },
  { href: "#about", label: "عني" },
  { href: "#contact", label: "تواصل" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-white/20 font-mono-ui text-[10px] tracking-[0.2em] text-ember">
                {site.monogram}
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-bold">{site.name}</span>
                <span className="mt-1.5 font-mono-ui text-[9px] text-muted">
                  {site.roleEn}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[13px] leading-7 text-muted">
              {site.tagline} مونتاج وتصحيح ألوان وموشن لبراندات وصنّاع محتوى —
              من القاهرة لأي مكان.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono-ui text-[9px] text-muted">الأقسام</p>
            <ul className="mt-3 space-y-2.5">
              {sections.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-[13px] text-paper/75 transition-colors hover:text-ember"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono-ui text-[9px] text-muted">تواصل</p>
            <ul className="mt-3 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="num-ltr block text-[13px] text-paper/75 transition-colors hover:text-ember"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="num-ltr block text-[13px] text-paper/75 transition-colors hover:text-ember"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="text-[13px] text-muted">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono-ui text-[9px] text-muted">
            © 2026 {site.nameEn} — كل الحقوق محفوظة
          </p>

          <div className="flex items-center gap-4 font-mono-ui text-[9px] text-muted">
            <span>CAIRO · EG</span>
            <span className="h-3 w-px bg-white/15" />
            <a
              href="#top"
              className="group flex items-center gap-1.5 transition-colors hover:text-ember"
            >
              لفوق
              <span className="transition-transform group-hover:-translate-y-0.5">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
