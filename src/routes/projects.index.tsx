import { createFileRoute } from "@tanstack/react-router";

import { ProjectCard } from "@/features/projects/components/project-card";
import { projects } from "@/features/projects/data";
import { PageShell } from "@/features/shared/components/page-shell";
import { SectionHeader } from "@/features/shared/components/section-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Ziad El-Sayed" },
      {
        name: "description",
        content:
          "Selected frontend projects: Cure doctor booking, SavvyHost dashboard, MIS web application, Fresh Cart e-commerce and more.",
      },
      { property: "og:title", content: "Projects — Ziad El-Sayed" },
      {
        property: "og:description",
        content: "A showcase of recent React, Next.js and TypeScript work.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useI18n();

  return (
    <PageShell>
      <SectionHeader
        eyebrow={t("nav.projects")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </PageShell>
  );
}
