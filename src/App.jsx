import { useCallback, useState } from "react";
import { site } from "./data/site";
import { projects } from "./data/projects";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Showreel from "./components/Showreel";
import Work from "./components/Work";
import Clients from "./components/Clients";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

const reelItem = {
  id: "showreel",
  title: "الشوريل — أحسن دقيقة في الشغل",
  client: site.name,
  year: "2026",
  duration: site.showreel.duration,
  video: site.showreel.src,
  poster: site.showreel.poster,
  role: ["Montage", "Color", "Sound"],
  description: site.showreel.subtitle,
};

const strip = [
  "montage",
  "color grading",
  "motion graphics",
  "sound design",
  "reels & shorts",
  "إعلانات",
  "أفلام قصيرة",
];

export default function App() {
  const [ready, setReady] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const handleBootDone = useCallback(() => setReady(true), []);

  const openReel = () =>
    setLightbox({ items: [reelItem, ...projects], index: 0 });

  const openProject = (items, index) => setLightbox({ items, index });

  return (
    <div className="grain relative min-h-screen bg-ink">
      <ScrollProgress />
      <Nav />

      <main>
        <Hero ready={ready} onPlayReel={openReel} />
        <Marquee items={strip} />
        <Showreel onPlay={openReel} />
        <Work onOpen={openProject} />
        <Clients />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />

      {lightbox && (
        <Lightbox
          items={lightbox.items}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) =>
            setLightbox((current) => ({ ...current, index }))
          }
        />
      )}

      <Preloader onDone={handleBootDone} monogram={site.monogram} />
    </div>
  );
}
