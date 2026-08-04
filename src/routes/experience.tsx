import { createFileRoute } from "@tanstack/react-router";

import { experiences } from "@/features/experience/data";
import { PageShell } from "@/features/shared/components/page-shell";
import { Reveal } from "@/features/shared/components/reveal";
import { SectionHeader } from "@/features/shared/components/section-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Ziad El-Sayed" },
      {
        name: "description",
        content:
          "Frontend roles at SavvyHost, Huma-Volve, Route Academy, DEPI and GDSC — dashboards, Next.js rendering strategies, React components and mentoring.",
      },
      { property: "og:title", content: "Experience — Ziad El-Sayed" },
      {
        property: "og:description",
        content: "Professional frontend experience, internships and technical leadership.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const { t, tl } = useI18n();

  return (
    <PageShell>
      <SectionHeader
        eyebrow={t("nav.experience")}
        title={t("experience.title")}
        subtitle={t("experience.subtitle")}
      />

      <ol className="mt-12 space-y-5 border-s border-border ps-6 md:ps-10">
        {experiences.map((item, index) => (
          <li key={item.id} className="relative">
            <span className="absolute inset-s-[-1.9rem] top-7 size-3 rounded-full bg-primary ring-4 ring-background md:inset-s-[-2.9rem]" />
            <Reveal delay={index * 0.05}>
              <article className="surface-panel p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-display text-xl font-bold">{tl(item.role)}</h2>
                  <span className="text-xs text-muted-foreground">{tl(item.period)}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {item.company}
                  <span className="ms-2 rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {tl(item.type)}
                  </span>
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet.en}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                      {tl(bullet)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
