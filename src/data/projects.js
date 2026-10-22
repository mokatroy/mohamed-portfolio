/**
 * ============================================================
 *  أعمالك  —  كل فيديو بيظهر في الموقع من هنا
 * ============================================================
 *
 *  إزاي تضيف شغل جديد؟ ٣ خطوات:
 *
 *  1) حط الفيديو والبوستر بتاعه في فولدر:  public/videos/
 *       مثال:  public/videos/عقد-تأمين.mp4
 *              public/videos/عقد-تأمين.jpg
 *     (يفضّل أسماء إنجليزي من غير مسافات، ويفضّل mp4 / H.264)
 *
 *  2) انسخ بلوك مشروع من تحت وحطه في آخر القايمة، وعدّل:
 *       video: "/videos/اسم-الفيديو.mp4"
 *       poster: "/videos/اسم-الفيديو.jpg"   ← صورة من الفيديو
 *
 *  3) category لازم تكون واحدة من الموجودين تحت في categories
 *     (أو تضيف قسم جديد بنفس الشكل)
 *
 *  size بتحدد حجم الكارت في الشبكة:  "wide" | "half" | "narrow"
 *  ولو مس بتحددها بيبقى "half" تلقائي.
 *
 *  ⚠️ الفيديوهات اللي موجودة دلوقتي ديمو مولّد — امسحها وحط شغلك.
 * ============================================================
 */

export const categories = [
  { id: "all", label: "كل الشغل" },
  { id: "ads", label: "إعلانات" },
  { id: "social", label: "سوشيال ميديا" },
  { id: "music", label: "كليبات" },
  { id: "film", label: "أفلام قصيرة" },
  { id: "motion", label: "موشن جرافيك" },
];

export const projects = [
  {
    id: "nova-app",
    title: "Nova — إطلاق تطبيق",
    client: "Nova Studio",
    category: "ads",
    year: "2026",
    size: "wide",
    video: "/videos/brand-teal.mp4",
    poster: "/videos/brand-teal.jpg",
    duration: "00:30",
    role: ["مونتاج", "تصحيح ألوان"],
    description:
      "إعلان ٣٠ ثانية لإطلاق التطبيق، مبني على إيقاع سريع مع تصحيح لوني أخضر/أزرق يوحّد شكل الشاشات مع اللقطات الحقيقية.",
  },
  {
    id: "fashion-reels",
    title: "حملة أزياء — سلسلة ريلز",
    client: "Orbit Agency",
    category: "social",
    year: "2025",
    size: "narrow",
    video: "/videos/fashion-neon.mp4",
    poster: "/videos/fashion-neon.jpg",
    duration: "00:18",
    role: ["مونتاج", "موشن"],
    description:
      "٦ ريلز عمودية بتعديل واحد سريع، مع ترانزيشنز على الضربة وتايتلات قصيرة بتحافظ على هوية البراند.",
  },
  {
    id: "last-night",
    title: "كليب «آخر الليل»",
    client: "Mint Records",
    category: "music",
    year: "2025",
    size: "narrow",
    video: "/videos/music-noir.mp4",
    poster: "/videos/music-noir.jpg",
    duration: "03:42",
    role: ["مونتاج", "تصحيح ألوان"],
    description:
      "مونتاج على الكلمات مع لوك أبيض وأسود عالي التباين، وتقطيع بيتبع النفس الموسيقي بدل العدّة.",
  },
  {
    id: "desert-light",
    title: "فيلم قصير «ضوء الصحراء»",
    client: "Cairo Films",
    category: "film",
    year: "2025",
    size: "wide",
    video: "/videos/doc-amber.mp4",
    poster: "/videos/doc-amber.jpg",
    duration: "07:15",
    role: ["مونتاج", "ساوند ديزاين"],
    description:
      "فيلم ٧ دقايق، المونتاج بنى التوتر من الصمت أكتر من الموسيقى، مع تسريع وتباطؤ مدروس في اللقطات الطويلة.",
  },
  {
    id: "vertex-motion",
    title: "Vertex — موشن جرافيك",
    client: "Vertex",
    category: "motion",
    year: "2026",
    size: "half",
    video: "/videos/tech-blue.mp4",
    poster: "/videos/tech-blue.jpg",
    duration: "01:05",
    role: ["موشن جرافيك", "مونتاج"],
    description:
      "سلسلة موشن للأرقام والشرائح، بتدرج أزرق تقني وتايمنج متزامن مع التعليق الصوتي.",
  },
  {
    id: "showreel-2025",
    title: "شوريل ٢٠٢٥",
    client: "شغل خاص",
    category: "ads",
    year: "2025",
    size: "half",
    video: "/videos/showreel-reel.mp4",
    poster: "/videos/showreel-reel.jpg",
    duration: "01:12",
    role: ["مونتاج", "Color", "Sound"],
    description:
      "أحسن لقطات من شغل السنة، مقصوصة على ميزيكا واحدة — ده اللي بيبعت للكلاينت الجديد أول حاجة.",
  },
];
