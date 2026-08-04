import type { Localized } from "@/lib/i18n/dictionaries";

export type ExperienceItem = {
  id: string;
  role: Localized;
  company: string;
  type: Localized;
  period: Localized;
  bullets: Localized[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "savvyhost",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    company: "SavvyHost",
    type: { en: "Part-time", ar: "دوام جزئي" },
    period: { en: "July 2025 — October 2025", ar: "يوليو 2025 — أكتوبر 2025" },
    bullets: [
      {
        en: "Optimized websites using Next.js rendering strategies (SSR, CSR, ISR) to improve performance, SEO and user experience",
        ar: "حسّنت أداء المواقع باستخدام استراتيجيات العرض في Next.js (SSR وCSR وISR) لتحسين الأداء وتحسين محركات البحث وتجربة المستخدم",
      },
      {
        en: "Built and customized interactive dashboards for efficient data visualization and content management",
        ar: "بنيت ولوحات تحكم تفاعلية قابلة للتخصيص لعرض البيانات وإدارة المحتوى بكفاءة",
      },
      {
        en: "Enhanced usability for clients and internal teams through intuitive interface design",
        ar: "حسّنت سهولة الاستخدام للعملاء والفرق الداخلية عبر تصميم واجهات بديهية",
      },
    ],
  },
  {
    id: "huma-volve",
    role: { en: "Frontend Developer", ar: "مطوّر واجهات أمامية" },
    company: "Huma-Volve",
    type: { en: "Training", ar: "تدريب" },
    period: { en: "September 2025 — October 2025", ar: "سبتمبر 2025 — أكتوبر 2025" },
    bullets: [
      {
        en: "Developed responsive web applications using React.js, TypeScript and Tailwind CSS",
        ar: "طوّرت تطبيقات ويب متجاوبة باستخدام React.js وTypeScript وTailwind CSS",
      },
      {
        en: "Integrated RESTful APIs and implemented reusable UI components",
        ar: "دمجت واجهات REST ونفّذت مكوّنات واجهة قابلة لإعادة الاستخدام",
      },
      {
        en: "Enhanced user experience and performance through clean, optimized code",
        ar: "حسّنت تجربة المستخدم والأداء عبر كود نظيف ومُحسَّن",
      },
    ],
  },
  {
    id: "route",
    role: { en: "Full Stack Developer Intern", ar: "متدرّب تطوير متكامل" },
    company: "Route Academy",
    type: { en: "Internship", ar: "تدريب" },
    period: { en: "March 2024 — April 2025", ar: "مارس 2024 — أبريل 2025" },
    bullets: [
      {
        en: "Mastered core full stack technologies including Node.js, Express.js, MongoDB, React and Next.js",
        ar: "أتقنت تقنيات التطوير المتكامل الأساسية: Node.js وExpress.js وMongoDB وReact وNext.js",
      },
      {
        en: "Built and integrated RESTful APIs with frontend applications for seamless data flow",
        ar: "بنيت ودمجت واجهات REST مع التطبيقات الأمامية لتدفق بيانات سلس",
      },
      {
        en: "Developed responsive, scalable web apps with React and Bootstrap",
        ar: "طوّرت تطبيقات ويب متجاوبة وقابلة للتوسع باستخدام React وBootstrap",
      },
      {
        en: "Collaborated with agile teams using Git for version control",
        ar: "تعاونت مع فرق أجايل باستخدام Git لإدارة الإصدارات",
      },
    ],
  },
  {
    id: "depi",
    role: { en: "React.js Front-End Developer Intern", ar: "متدرّب تطوير واجهات React.js" },
    company: "Digital Egyptian Pioneer (DEPI)",
    type: { en: "Internship", ar: "تدريب" },
    period: { en: "April 2024 — October 2025", ar: "أبريل 2024 — أكتوبر 2025" },
    bullets: [
      {
        en: "Developed 10+ reusable, modular React components, reducing code duplication by 30%",
        ar: "طوّرت أكثر من 10 مكوّنات React قابلة لإعادة الاستخدام، ما قلّل تكرار الكود بنسبة 30%",
      },
      {
        en: "Managed state effectively using React Hooks and Context API",
        ar: "أدرت الحالة بفعالية باستخدام React Hooks وContext API",
      },
      {
        en: "Integrated RESTful APIs with Axios, boosting API response times by 15%",
        ar: "دمجت واجهات REST باستخدام Axios، ما حسّن أزمنة الاستجابة بنسبة 15%",
      },
      {
        en: "Enhanced web application performance by 20% through code optimization",
        ar: "حسّنت أداء التطبيقات بنسبة 20% عبر تحسين الكود",
      },
    ],
  },
  {
    id: "gdsc",
    role: { en: "Front-End Lead", ar: "قائد فريق الواجهات الأمامية" },
    company: "Google Developer Student Club (GDSC)",
    type: { en: "Leadership", ar: "قيادة" },
    period: { en: "February 2023 — May 2023", ar: "فبراير 2023 — مايو 2023" },
    bullets: [
      {
        en: "Directed a team of 5 students in planning and executing front-end projects",
        ar: "قدت فريقاً من 5 طلاب في تخطيط وتنفيذ مشاريع الواجهات الأمامية",
      },
      {
        en: "Conducted 4+ workshops on HTML, CSS, JavaScript and React.js",
        ar: "قدّمت أكثر من 4 ورش عمل في HTML وCSS وJavaScript وReact.js",
      },
      {
        en: "Enhanced technical ability of peers through mentoring and training",
        ar: "طوّرت القدرات التقنية للزملاء عبر الإرشاد والتدريب",
      },
    ],
  },
];
