import type { Localized } from "@/lib/i18n/dictionaries";
import examAppBanner from "@/assets/Projects/exam-app/Website/Diplomas.png";
import examAppDashboard from "@/assets/Projects/exam-app/Website/Login.png";
import examAppQuestions from "@/assets/Projects/exam-app/Website/Questions.png";
import examAppAnswers from "@/assets/Projects/exam-app/Website/Answers.png";
import examAppAccount from "@/assets/Projects/exam-app/Website/Account.png";
import examAppAudit from "@/assets/Projects/exam-app/Dashboard/Audit.png";
import examAppAddDiplomas from "@/assets/Projects/exam-app/Dashboard/AddDiplomas.png";
import examAppDiplomas from "@/assets/Projects/exam-app/Dashboard/Diplomas.png";
import examAppExam from "@/assets/Projects/exam-app/Dashboard/Exam.png";
import examAppLog from "@/assets/Projects/exam-app/Dashboard/Log.png";
import examAppDashboardQuestions from "@/assets/Projects/exam-app/Dashboard/Questions.png";
import examAppExams from "@/assets/Projects/exam-app/Website/Exams.png";

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: Localized;
  longDescription: Localized;
  technologies: string[];
  banner: string;
  dashboardImages?: string[];
  websiteImages?: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "exam-app",
    title: "Exam App",
    year: "2026",
    description: {
      en: "A comprehensive exam management system with role-based dashboards for managing diplomas, exams, questions, and audit logs.",
      ar: "نظام شامل لإدارة الامتحانات بلوحات تحكم حسب الصلاحيات لإدارة الدبلومات والامتحانات والأسئلة وسجلات التدقيق.",
    },
    longDescription: {
      en: "A Next.js 16 application built with React 19 and TypeScript for comprehensive exam management. Features role-based access control, diploma management, exam creation and administration, question banks, and detailed audit logging. Authentication is handled via NextAuth, data fetching with TanStack React Query, and form validation with Zod and React Hook Form. The UI is built with Tailwind CSS and Shadcn components for a modern, responsive experience.",
      ar: "تطبيق Next.js 16 مُبني بـ React 19 وTypeScript لإدارة الامتحانات بشكل شامل. يتميز بنظام صلاحيات حسب الدور، إدارة الدبلومات، إنشاء وإدارة الامتحانات، بنوك الأسئلة، وسجلات تدقيق مفصلة. تتم المصادقة عبر NextAuth، وجلب البيانات عبر TanStack React Query، والتحقق من النماذج بـ Zod وReact Hook Form. الواجهة مبنية بـ Tailwind CSS ومكوّنات Shadcn لتجربة عصرية ومتجاوبة.",
    },
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "TanStack React Query",
      "Zod",
      "React Hook Form",
      "Shadcn UI",
      "Axios",
    ],
    banner: examAppBanner,
    dashboardImages: [
      examAppAudit,
      examAppLog,
      examAppDiplomas,
      examAppAddDiplomas,
      examAppExam,
      examAppDashboardQuestions,
    ],
    websiteImages: [
      examAppDashboard,
      examAppBanner,
      examAppExams,
      examAppQuestions,
      examAppAnswers,
      examAppAccount,
    ],
    featured: true,
    github: "https://github.com/ZiadElsayed01/Exam-App",
    demo: "https://exam-app-topaz.vercel.app/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
