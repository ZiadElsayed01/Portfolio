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
import misBanner from "@/assets/Projects/MIS/Website/Bannar.png";
import misHome from "@/assets/Projects/MIS/Website/Home.png";
import misAbout from "@/assets/Projects/MIS/Website/About.png";
import misRegister from "@/assets/Projects/MIS/Website/Register.png";
import misWebsite1 from "@/assets/Projects/MIS/Website/website1.png";
import misWebsite2 from "@/assets/Projects/MIS/Website/website2.png";
import misNewTeacher from "@/assets/Projects/MIS/Dashboard/NewTeacher.png";
import misOrders from "@/assets/Projects/MIS/Dashboard/Orders.png";
import misRegisterSubjects from "@/assets/Projects/MIS/Dashboard/RegisterSubjects.png";
import misRegisterSubjects2 from "@/assets/Projects/MIS/Dashboard/RegisterSubjects2.png";
import misReports from "@/assets/Projects/MIS/Dashboard/Reports.png";
import misTeacher from "@/assets/Projects/MIS/Dashboard/Teaacher.png";
import elfaredaaBanner from "@/assets/Projects/elfaredaa/Website/Bannar.png";
import elfaredaaHome from "@/assets/Projects/elfaredaa/Website/Home.png";
import elfaredaaAbout from "@/assets/Projects/elfaredaa/Website/About.png";
import elfaredaaServices from "@/assets/Projects/elfaredaa/Website/Services.png";
import elfaredaaDetails from "@/assets/Projects/elfaredaa/Website/Details.png";
import elfaredaaContact from "@/assets/Projects/elfaredaa/Website/Contact.png";
import freshCartBanner from "@/assets/Projects/fresh-cart/Website/Bannar.png";
import freshCartHome from "@/assets/Projects/fresh-cart/Website/Home.png";
import freshCartCategories from "@/assets/Projects/fresh-cart/Website/Categories.png";
import freshCartProducts from "@/assets/Projects/fresh-cart/Website/Products.png";
import freshCartCart from "@/assets/Projects/fresh-cart/Website/Cart.png";
import freshCartOrders from "@/assets/Projects/fresh-cart/Website/Orders.png";
import freshCartLogin from "@/assets/Projects/fresh-cart/Website/Login.png";
import freshCartRegister from "@/assets/Projects/fresh-cart/Website/Register.png";
import medicalSystemBanner from "@/assets/Projects/medical-system/Website/Bannar.png";
import medicalSystemAbout from "@/assets/Projects/medical-system/Website/About.png";
import medicalSystemContact from "@/assets/Projects/medical-system/Website/Contact.png";
import medicalSystemProductDetails from "@/assets/Projects/medical-system/Website/ProductDetials.png";
import medicalSystemProducts from "@/assets/Projects/medical-system/Website/Products.png";
import medicalSystemDashboardHome from "@/assets/Projects/medical-system/Dashboard/DashboardHome.png";
import medicalSystemDashboardCompany from "@/assets/Projects/medical-system/Dashboard/DashboardCompany.png";
import medicalSystemDashboardContact from "@/assets/Projects/medical-system/Dashboard/DashboardContact.png";
import medicalSystemDashboardProducts from "@/assets/Projects/medical-system/Dashboard/DashboardProducts.png";
import medicalSystemDashboardAddCompany from "@/assets/Projects/medical-system/Dashboard/DashboardADD Company.png";

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
  dashboard?: string;
  github?: string;
  featured?: boolean;
  testingCredentials?: Localized;
};

export const projects: Project[] = [
  {
    slug: "medical-system",
    title: "Medical System",
    year: "2026",
    description: {
      en: "A comprehensive medical management system with company management, product catalog, and contact management features.",
      ar: "نظام طبي شامل مع إدارة الشركات، كتالوج المنتجات، وميزات إدارة الاتصال.",
    },
    longDescription: {
      en: "A full-stack medical management system built with Next.js, React, and TypeScript. Features include company management, product catalog with detailed views, contact management, and a comprehensive dashboard for administrators. The system provides role-based access control, allowing different users to manage various aspects of the medical system. Built with modern web technologies for optimal performance and user experience.",
      ar: "نظام طبي متكامل مُبني بـ Next.js وReact وTypeScript. تشمل الميزات إدارة الشركات، كتالوج المنتجات مع عرض تفصيلي، إدارة الاتصال، ولوحة تحكم شاملة للمسؤولين. يوفر النظام صلاحيات حسب الدور، مما يسمح للمستخدمين المختلفين بإدارة جوانب مختلفة من النظام الطبي. مُبني بتقنيات الويب الحديثة للأداء الأمثل وتجربة المستخدم.",
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    banner: medicalSystemBanner,
    dashboardImages: [
      medicalSystemDashboardHome,
      medicalSystemDashboardProducts,
      medicalSystemDashboardCompany,
      medicalSystemDashboardAddCompany,
      medicalSystemDashboardContact,
    ],
    websiteImages: [
      medicalSystemBanner,
      medicalSystemProducts,
      medicalSystemProductDetails,
      medicalSystemAbout,
      medicalSystemContact,
    ],
    featured: true,
    demo: "https://medical-systems.vercel.app/",
    dashboard: "https://medical-systems.vercel.app/dashboard",
    testingCredentials: {
      en: "Admin: admin@medical-system.com / Password: Admin_123",
      ar: "المدير: admin@medical-system.com / كلمة السر: Admin_123",
    },
  },
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
    testingCredentials: {
      en: "Admin: Ziad / Password: Ziadelsayed_100\nUser: Ziad0 / Password: Ziadelsayed_100",
      ar: "المدير: Ziad / كلمة السر: Ziadelsayed_100\nالمستخدم: Ziad0 / كلمة السر: Ziadelsayed_100",
    },
  },
  {
    slug: "mis",
    title: "MIS",
    year: "2025",
    description: {
      en: "A Management Information System with a backend API and frontend application for educational institution management.",
      ar: "نظام معلومات إداري مع واجهة برمجة تطبيقات خلفية وتطبيق أمامي لإدارة المؤسسات التعليمية.",
    },
    longDescription: {
      en: "A full-stack Management Information System built with Node.js, TypeScript, Next.js, and React. The project uses Docker for containerization and bun for running scripts. Features include teacher management, subject registration, order processing, and comprehensive reporting. The backend provides a robust API while the frontend offers a modern, responsive user interface for managing educational operations efficiently.",
      ar: "نظام معلومات إداري متكامل مُبني بـ Node.js وTypeScript وNext.js وReact. يستخدم المشروع Docker للحاويات وbun لتشغيل السكريبتات. تشمل الميزات إدارة المعلمين، تسجيل المواد، معالجة الطلبات، وإعداد تقارير شاملة. توفر الواجهة الخلفية واجهة برمجة تطبيقات قوية بينما توفر الواجهة الأمامية واجهة مستخدم عصرية ومتجاوبة لإدارة العمليات التعليمية بكفاءة.",
    },
    testingCredentials: {
      en: "Admin: youssef.ali@example.com / Password: test123\nStudent: mohamed.ali@example.com / Password: test123",
      ar: "المدير: youssef.ali@example.com / كلمة السر: test123\nالطالب: mohamed.ali@example.com / كلمة السر: test123",
    },
    technologies: ["Node.js", "TypeScript", "Next.js", "React", "Docker", "Docker Compose", "Bun"],
    banner: misBanner,
    dashboardImages: [
      misNewTeacher,
      misOrders,
      misRegisterSubjects,
      misRegisterSubjects2,
      misReports,
      misTeacher,
    ],
    websiteImages: [misHome, misBanner, misAbout, misRegister, misWebsite1, misWebsite2],
    featured: true,
    github: "https://github.com/kofta999/grad-project",
    demo: "https://grad-project-mis.vercel.app/",
  },
  {
    slug: "fresh-cart",
    title: "FreshCart",
    year: "2026",
    description: {
      en: "A full-featured e-commerce platform with product catalog, shopping cart, order management, and user authentication.",
      ar: "منصة تجارة إلكترونية متكاملة مع كتالوج منتجات، سلة تسوق، إدارة الطلبات، ومصادقة المستخدمين.",
    },
    longDescription: {
      en: "A comprehensive e-commerce application built with Next.js 16, React 19, and TypeScript. Features include product browsing by categories, shopping cart functionality, order management, user registration and login, and a responsive modern UI. The platform is designed to provide a seamless shopping experience with fast performance and intuitive navigation. Built with Tailwind CSS and Shadcn UI for a clean, professional appearance.",
      ar: "تطبيق تجارة إلكترونية شامل مُبني بـ Next.js 16 وReact 19 وTypeScript. تشمل الميزات تصفح المنتجات حسب الفئات، وظيفة سلة التسوق، إدارة الطلبات، تسجيل المستخدمين وتسجيل الدخول، وواجهة مستخدم عصرية متجاوبة. المنصة مصممة لتوفير تجربة تسوق سلسة مع أداء سريع وتنقل بديهي. مُبني بـ Tailwind CSS وShadcn UI لمظهر نظيف واحترافي.",
    },
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Context API", "Axios"],
    banner: freshCartBanner,
    websiteImages: [
      freshCartLogin,
      freshCartRegister,
      freshCartProducts,
      freshCartCart,
      freshCartHome,
      freshCartCategories,
      freshCartOrders,
    ],
    featured: true,
    testingCredentials: {
      en: "Email: ziadelsayed046@gmail.com / Password: Ziad100",
      ar: "البريد الإلكتروني: ziadelsayed046@gmail.com / كلمة السر: Ziad100",
    },
    github: "https://github.com/ZiadElsayed01/FreshCart",
    demo: "https://fresh-cart-route.vercel.app/",
  },
  {
    slug: "elfaredaa",
    title: "Elfaredaa",
    year: "2026",
    description: {
      en: "A modern business website showcasing services, company details, and contact information with a clean, professional design.",
      ar: "موقع أعمال حديث يعرض الخدمات وتفاصيل الشركة ومعلومات الاتصال بتصميم نظيف واحترافي.",
    },
    longDescription: {
      en: "A Next.js 16 business website built with React 19 and TypeScript. Features a responsive design with sections for home, about, services, details, and contact. The website uses Tailwind CSS for styling and follows modern web design principles to provide an excellent user experience. Built with performance and accessibility in mind, ensuring fast load times and easy navigation for all users.",
      ar: "موقع أعمال Next.js 16 مُبني بـ React 19 وTypeScript. يتميز بتصميم متجاوب مع أقسام للرئيسية، من نحن، الخدمات، التفاصيل، واتصل بنا. يستخدم الموقع Tailwind CSS للتنسيق ويتبع مبادئ تصميم الويب الحديثة لتوفير تجربة مستخدم ممتازة. مُبني مع مراعاة الأداء وإمكانية الوصول، مما يضمن أوقات تحميل سريعة وسهولة التنقل لجميع المستخدمين.",
    },
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    banner: elfaredaaBanner,
    websiteImages: [
      elfaredaaBanner,
      elfaredaaHome,
      elfaredaaAbout,
      elfaredaaServices,
      elfaredaaDetails,
      elfaredaaContact,
    ],
    featured: true,
    github: "https://github.com/ZiadElsayed01/ElfareedaKW",
    demo: "https://elfareeda-kw.vercel.app/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
