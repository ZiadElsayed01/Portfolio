import { createFileRoute } from "@tanstack/react-router";

import { skillGroups } from "@/features/skills/data";
import { PageShell } from "@/features/shared/components/page-shell";
import { Reveal } from "@/features/shared/components/reveal";
import { SectionHeader } from "@/features/shared/components/section-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Ziad El-Sayed" },
      {
        name: "description",
        content:
          "Tools and technologies: React, Next.js, TypeScript, Tailwind CSS, Redux, React Query, Shadcn UI, Node.js, MongoDB and more.",
      },
      { property: "og:title", content: "Skills — Ziad El-Sayed" },
      {
        property: "og:description",
        content: "Frontend, styling, backend and soft skills at a glance.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const { t, tl } = useI18n();

  return (
    <PageShell>
      <SectionHeader
        eyebrow={t("nav.skills")}
        title={t("skills.title")}
        subtitle={t("skills.subtitle")}
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={(index % 2) * 0.06}>
            <section className="surface-panel h-full p-6">
              <h2 className="font-display text-lg font-bold">{tl(group.title)}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-muted px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
