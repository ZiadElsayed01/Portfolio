import type { Localized } from "@/lib/i18n/dictionaries";

import cure from "@/assets/projects/cure.jpg";
import savvyhost from "@/assets/projects/savvyhost.jpg";
import mis from "@/assets/projects/mis.jpg";
import freshcart from "@/assets/projects/freshcart.jpg";
import yummy from "@/assets/projects/yummy.jpg";
import daniels from "@/assets/projects/daniels.jpg";
import weather from "@/assets/projects/weather.jpg";
import games from "@/assets/projects/games.jpg";

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: Localized;
  longDescription: Localized;
  technologies: string[];
  banner: string;
  images: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "cure",
    title: "Cure",
    year: "2025",
    featured: true,
    description: {
      en: "Modern web application that makes it easy for patients to find doctors across specialties, book appointments and manage their healthcare.",
      ar: "تطبيق ويب حديث يساعد المرضى على إيجاد الأطباء في مختلف التخصصات وحجز المواعيد وإدارة رعايتهم الصحية بسهولة.",
    },
    longDescription: {
      en: "Cure is a patient-facing booking platform covering doctor discovery, specialty filtering, appointment scheduling and profile management. Authentication is handled with JWT, forms are validated with Formik and Yup, and global state is shared through the Context API. The interface is built on Shadcn UI primitives with a fully responsive Tailwind layout.",
      ar: "منصة حجز موجّهة للمرضى تغطّي البحث عن الأطباء والتصفية حسب التخصص وحجز المواعيد وإدارة الملف الشخصي. تتم المصادقة عبر JWT، ويتم التحقق من النماذج باستخدام Formik وYup، وتُدار الحالة العامة عبر Context API. الواجهة مبنية على مكوّنات Shadcn UI بتصميم متجاوب بالكامل باستخدام Tailwind.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Context API",
      "Axios",
      "Formik",
      "Yup",
      "JWT",
      "Lucide",
    ],
    banner: cure,
    images: [cure, mis],
    demo: "https://onlinebookingdoctor.netlify.app/get-start",
    github: "https://github.com/ZiadElsayed01/Cure_FE",
  },
  {
    slug: "savvyhost-dashboard",
    title: "SavvyHost Dashboard",
    year: "2025",
    featured: true,
    description: {
      en: "Responsive dashboard for SavvyHost to manage websites and client data, with performance and SEO optimized through Next.js rendering strategies.",
      ar: "لوحة تحكم متجاوبة لشركة SavvyHost لإدارة المواقع وبيانات العملاء، مع تحسين الأداء وتحسين محركات البحث عبر استراتيجيات العرض في Next.js.",
    },
    longDescription: {
      en: "A production dashboard used to manage hosted websites and client records. Rendering strategies (SSR, CSR and ISR) were combined per route to push performance scores up to 90% while keeping content indexable. Includes localized interfaces with i18n, protected routes with JWT, and data-dense tables and charts for content management.",
      ar: "لوحة تحكم إنتاجية تُستخدم لإدارة المواقع المستضافة وسجلات العملاء. تم دمج استراتيجيات العرض (SSR وCSR وISR) لكل مسار لرفع مؤشرات الأداء حتى 90% مع الحفاظ على قابلية الفهرسة. تتضمن واجهات متعددة اللغات عبر i18n ومسارات محمية بـ JWT وجداول ورسوم بيانية كثيفة البيانات.",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Formik",
      "Yup",
      "JWT",
      "Axios",
      "i18n",
      "Context API",
    ],
    banner: savvyhost,
    images: [savvyhost],
  },
  {
    slug: "mis-web-application",
    title: "MIS Web Application",
    year: "2025",
    featured: true,
    description: {
      en: "Full-stack Management Information System with a scalable backend and a dynamic, user-friendly responsive frontend.",
      ar: "نظام معلومات إداري متكامل بواجهة خلفية قابلة للتوسع وواجهة أمامية ديناميكية متجاوبة وسهلة الاستخدام.",
    },
    longDescription: {
      en: "Graduation project delivering a full Management Information System: role-based access, cookie-based sessions, validated multi-step forms and dynamic dashboards. The frontend is a Next.js app with Shadcn UI components; the backend exposes a REST API consumed through Axios with typed request and response models.",
      ar: "مشروع تخرّج يقدّم نظام معلومات إداري متكامل: صلاحيات حسب الدور، جلسات تعتمد على الكوكيز، نماذج متعددة الخطوات مع تحقق كامل، ولوحات معلومات ديناميكية. الواجهة الأمامية مبنية بـ Next.js ومكوّنات Shadcn UI، بينما توفّر الواجهة الخلفية REST API يتم استهلاكها عبر Axios بنماذج بيانات مكتوبة.",
    },
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Shadcn UI",
      "Tailwind CSS",
      "Context API",
      "Cookies",
      "Axios",
      "Formik",
      "Yup",
    ],
    banner: mis,
    images: [mis, savvyhost],
    demo: "https://grad-project-mis.vercel.app/login",
    github: "https://github.com/kofta999/grad-project",
  },
  {
    slug: "fresh-cart",
    title: "Fresh Cart",
    year: "2024",
    description: {
      en: "Full-featured e-commerce platform with responsive design, modern UI and complete shopping cart functionality.",
      ar: "منصة تجارة إلكترونية متكاملة بتصميم متجاوب وواجهة عصرية ووظائف سلة تسوّق كاملة.",
    },
    longDescription: {
      en: "An e-commerce storefront covering product browsing, categories, cart, wishlist, checkout and authentication. Forms are validated with Formik and Yup, API traffic is handled by Axios with interceptors for auth tokens, and the layout is fully responsive across breakpoints.",
      ar: "متجر إلكتروني يغطي تصفح المنتجات والفئات والسلة وقائمة الرغبات وإتمام الشراء والمصادقة. يتم التحقق من النماذج عبر Formik وYup، وتُدار طلبات الـ API بواسطة Axios مع اعتراض الطلبات لإضافة رموز المصادقة، والتصميم متجاوب بالكامل.",
    },
    technologies: ["React", "Tailwind CSS", "JavaScript", "Axios", "Formik", "Yup", "Font Awesome"],
    banner: freshcart,
    images: [freshcart],
    demo: "https://fresh-cart-route.vercel.app/login",
    github: "https://github.com/ZiadElsayed01/Freshcart",
  },
  {
    slug: "yummy",
    title: "Yummy",
    year: "2024",
    description: {
      en: "Recipe discovery web application with dynamic exploration, external API integration and responsive design.",
      ar: "تطبيق لاكتشاف الوصفات مع تصفح ديناميكي وتكامل مع واجهات برمجية خارجية وتصميم متجاوب.",
    },
    longDescription: {
      en: "A recipe explorer built on an external meals API: search by name, ingredient, area or category, with a detail view for each recipe. Built with vanilla JavaScript and jQuery on top of a Tailwind layout, focusing on DOM performance and clean async data flow.",
      ar: "مستكشف وصفات مبني على واجهة برمجية خارجية للوجبات: البحث بالاسم أو المكوّن أو المنطقة أو الفئة مع صفحة تفاصيل لكل وصفة. تم بناؤه بـ JavaScript وjQuery فوق تخطيط Tailwind مع التركيز على أداء الـ DOM وتدفق بيانات غير متزامن نظيف.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "REST API", "jQuery"],
    banner: yummy,
    images: [yummy],
    demo: "https://ziadelsayed01.github.io/Yummy/",
    github: "https://github.com/ZiadElsayed01/Yummy",
  },
  {
    slug: "daniels",
    title: "Daniels",
    year: "2023",
    description: {
      en: "A personal portfolio website showcasing projects and skills interactively.",
      ar: "موقع بورتفوليو شخصي يعرض المشاريع والمهارات بشكل تفاعلي.",
    },
    longDescription: {
      en: "A responsive portfolio template built from a design mockup with semantic HTML, custom CSS animations and Bootstrap's grid. Includes an interactive project gallery, animated section reveals and a validated contact form.",
      ar: "قالب بورتفوليو متجاوب تم بناؤه من تصميم جاهز باستخدام HTML دلالي ورسوم CSS مخصصة وشبكة Bootstrap. يتضمن معرض مشاريع تفاعلي وظهور متحرك للأقسام ونموذج تواصل مع تحقق.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    banner: daniels,
    images: [daniels],
    demo: "https://ziadelsayed01.github.io/Daniels/",
    github: "https://github.com/ZiadElsayed01/Daniels",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    year: "2023",
    description: {
      en: "Real-time weather application fetching data from an external API with a responsive Bootstrap design.",
      ar: "تطبيق طقس لحظي يجلب البيانات من واجهة برمجية خارجية بتصميم متجاوب باستخدام Bootstrap.",
    },
    longDescription: {
      en: "A three-day forecast app with location search and geolocation support. Weather data is fetched asynchronously and rendered into responsive cards with condition icons, temperature and wind details.",
      ar: "تطبيق توقعات لثلاثة أيام مع البحث بالموقع ودعم تحديد الموقع الجغرافي. يتم جلب بيانات الطقس بشكل غير متزامن وعرضها في بطاقات متجاوبة مع أيقونات الحالة ودرجة الحرارة وتفاصيل الرياح.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
    banner: weather,
    images: [weather],
    demo: "https://ziadelsayed01.github.io/Weather-API/",
    github: "https://github.com/ZiadElsayed01/Weather-API",
  },
  {
    slug: "games-platform",
    title: "Games Platform",
    year: "2023",
    description: {
      en: "Gaming information platform providing a comprehensive game database through external APIs.",
      ar: "منصة معلومات ألعاب توفّر قاعدة بيانات شاملة للألعاب عبر واجهات برمجية خارجية.",
    },
    longDescription: {
      en: "A game catalog that lists titles by category with a detail modal showing screenshots, platforms, rating and store links. Data comes from a public games API and is rendered into a responsive Bootstrap card grid.",
      ar: "كتالوج ألعاب يعرض العناوين حسب الفئة مع نافذة تفاصيل تضم لقطات الشاشة والمنصات والتقييم وروابط المتاجر. تأتي البيانات من واجهة برمجية عامة للألعاب وتُعرض في شبكة بطاقات متجاوبة بـ Bootstrap.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
    banner: games,
    images: [games],
    demo: "https://ziadelsayed01.github.io/Games-API/",
    github: "https://github.com/ZiadElsayed01/Games-API",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
