import type { Localized } from "@/lib/i18n/dictionaries";

export type SkillGroup = {
  id: string;
  title: Localized;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: { en: "Frontend Technologies", ar: "تقنيات الواجهات الأمامية" },
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "API Integrations",
      "SEO",
      "Accessibility",
      "Performance Optimization",
      "Responsive Design",
    ],
  },
  {
    id: "frameworks",
    title: { en: "Frameworks & Libraries", ar: "أُطر ومكتبات" },
    items: [
      "Axios",
      "Tanstack Query",
      "React Router",
      "Context API",
      "React Hook Form",
      "Formik",
      "Yup",
      "Zod",
      "NextAuth",
      "NextIntl",
      "React-i18next",
    ],
  },
  {
    id: "styling",
    title: { en: "Styling & UI", ar: "التنسيق وواجهة المستخدم" },
    items: ["Tailwind CSS", "Bootstrap", "Shadcn UI", "Figma", "Canva", "Motion.dev", "Lucide"],
  },
  {
    id: "version-control",
    title: { en: "Version Control", ar: "إدارة الإصدارات" },
    items: ["Git", "GitHub"],
  },
  {
    id: "backend",
    title: { en: "Backend & Tools", ar: "الواجهة الخلفية والأدوات" },
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "JIRA", "Slack", "Discord"],
  },
  {
    id: "soft",
    title: { en: "Soft Skills", ar: "المهارات الشخصية" },
    items: [
      "Team Collaboration",
      "Problem-Solving",
      "Communication",
      "Public Speaking",
      "Training & Coaching",
    ],
  },
];
