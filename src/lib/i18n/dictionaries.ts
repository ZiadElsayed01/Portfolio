export type Locale = "en" | "ar";

export type Localized = { en: string; ar: string };

export const LOCALES: Locale[] = ["en", "ar"];

export const dictionaries = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "nav.brand": "Ziad El-Sayed",

    "common.language": "Language",
    "common.theme": "Toggle theme",
    "common.viewAll": "View all projects",
    "common.back": "Back to projects",
    "common.code": "Source code",
    "common.demo": "Live demo",
    "common.private": "Private repository",
    "common.technologies": "Technologies",
    "common.gallery": "Gallery",
    "common.overview": "Overview",
    "common.testingCredentials": "Testing Credentials",

    "home.greeting": "Hello, I'm",
    "home.name": "Ziad El-Sayed",
    "home.role": "Frontend Developer",
    "home.tagline":
      "Building responsive, scalable applications with modern web technologies. Passionate about seamless user experiences and solving real-world problems.",
    "home.cta.contact": "Get in touch",
    "home.cta.projects": "View projects",
    "home.stat.years": "Years building for the web",
    "home.stat.projects": "Shipped projects",
    "home.stat.stack": "Core stack",
    "home.highlights": "Selected work",
    "home.highlightsSub": "A few projects I'm proud of",

    "about.title": "About me",
    "about.subtitle": "Frontend engineer, mentor, continuous learner",
    "about.education": "Education",
    "about.degree": "Bachelor of Engineering — Computer Science",
    "about.school": "Suez Canal University, Ismailia",
    "about.period": "October 2020 — June 2025",
    "about.cgpa": "CGPA 3.3",
    "about.p1":
      "I'm a passionate Frontend Developer with expertise in TypeScript, React, JavaScript (ES6+), React Query, Tailwind CSS, Redux, Shadcn and RESTful APIs. Familiar with Node.js, Express, MySQL and MongoDB for full-stack integration.",
    "about.p2":
      "Enthusiastic about teaching, mentoring and contributing to the tech community, while staying committed to continuous learning. Skilled in building responsive, accessible and scalable applications with a strong focus on state management, authentication and performance.",

    "experience.title": "Experience",
    "experience.subtitle": "Where I've worked, taught and shipped",

    "projects.title": "Projects",
    "projects.subtitle": "A showcase of my recent work and personal projects",
    "projects.details": "View details",

    "skills.title": "Skills & Technologies",
    "skills.subtitle": "Tools and technologies I work with",

    "contact.title": "Get in touch",
    "contact.subtitle":
      "I'm always interested in new opportunities and exciting projects. Feel free to reach out.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Cairo, Egypt",
    "contact.sendEmail": "Send email",
    "contact.outro": "Let's connect and discuss how we can work together.",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send message",
    "contact.form.sent": "Your mail app is opening with the message ready to send.",

    "footer.rights": "All rights reserved.",
    "footer.built": "Frontend Developer, Building modern web applications.",

    "notfound.project": "This project doesn't exist.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عني",
    "nav.experience": "الخبرات",
    "nav.projects": "المشاريع",
    "nav.skills": "المهارات",
    "nav.contact": "تواصل معي",
    "nav.menu": "فتح القائمة",
    "nav.brand": "زياد السيد",

    "common.language": "اللغة",
    "common.theme": "تبديل المظهر",
    "common.viewAll": "عرض كل المشاريع",
    "common.back": "العودة للمشاريع",
    "common.code": "الكود المصدري",
    "common.demo": "معاينة مباشرة",
    "common.private": "مستودع خاص",
    "common.technologies": "التقنيات",
    "common.gallery": "معرض الصور",
    "common.overview": "نظرة عامة",
    "common.testingCredentials": "بيانات الاختبار",

    "home.greeting": "أهلاً، أنا",
    "home.name": "زياد السيد",
    "home.role": "مطوّر واجهات أمامية",
    "home.tagline":
      "أبني تطبيقات سريعة الاستجابة وقابلة للتوسع باستخدام أحدث تقنيات الويب، مع شغف بتجربة مستخدم سلسة وحلول واقعية للمشكلات.",
    "home.cta.contact": "تواصل معي",
    "home.cta.projects": "شاهد المشاريع",
    "home.stat.years": "سنوات في تطوير الويب",
    "home.stat.projects": "مشروعاً منجزاً",
    "home.stat.stack": "التقنيات الأساسية",
    "home.highlights": "أعمال مختارة",
    "home.highlightsSub": "بعض المشاريع التي أفتخر بها",

    "about.title": "نبذة عني",
    "about.subtitle": "مطوّر واجهات، مُدرّب، ومتعلّم دائم",
    "about.education": "التعليم",
    "about.degree": "بكالوريوس الهندسة — علوم الحاسب",
    "about.school": "جامعة قناة السويس، الإسماعيلية",
    "about.period": "أكتوبر 2020 — يونيو 2025",
    "about.cgpa": "المعدل التراكمي 3.3",
    "about.p1":
      "مطوّر واجهات أمامية شغوف، أمتلك خبرة في TypeScript وReact وJavaScript (ES6+) وReact Query وTailwind CSS وRedux وShadcn وواجهات REST. ولديّ إلمام بـ Node.js وExpress وMySQL وMongoDB للتكامل الكامل.",
    "about.p2":
      "أحبّ التدريس والإرشاد والمساهمة في مجتمع التقنية، مع التزام دائم بالتعلّم المستمر. أُجيد بناء تطبيقات متجاوبة وسهلة الوصول وقابلة للتوسع مع تركيز قوي على إدارة الحالة والمصادقة والأداء.",

    "experience.title": "الخبرات",
    "experience.subtitle": "أماكن عملت وعلّمت وأنجزت فيها",

    "projects.title": "المشاريع",
    "projects.subtitle": "مجموعة من أحدث أعمالي ومشاريعي الشخصية",
    "projects.details": "عرض التفاصيل",

    "skills.title": "المهارات والتقنيات",
    "skills.subtitle": "الأدوات والتقنيات التي أعمل بها",

    "contact.title": "تواصل معي",
    "contact.subtitle": "أرحّب دائماً بالفرص الجديدة والمشاريع المميزة، لا تتردد في مراسلتي.",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.location": "الموقع",
    "contact.locationValue": "القاهرة، مصر",
    "contact.sendEmail": "إرسال بريد",
    "contact.outro": "لنتواصل ونناقش كيف يمكننا العمل معاً.",
    "contact.form.name": "اسمك",
    "contact.form.email": "بريدك الإلكتروني",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.sent": "سيتم فتح تطبيق البريد لديك والرسالة جاهزة للإرسال.",

    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.built": "مطور واجهات أمامية، بناء تطبيقات الويب الحديثة.",

    "notfound.project": "هذا المشروع غير موجود.",
  },
} as const;

export type TranslationKey = keyof (typeof dictionaries)["en"];
