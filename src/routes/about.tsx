import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

import aboutAsset from "@/assets/about.png";
import { PageShell } from "@/features/shared/components/page-shell";
import { Reveal } from "@/features/shared/components/reveal";
import { SectionHeader } from "@/features/shared/components/section-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ziad El-Sayed" },
      {
        name: "description",
        content:
          "Frontend developer with expertise in TypeScript, React, Next.js, Tailwind CSS and RESTful APIs, plus a Computer Science degree from Suez Canal University.",
      },
      { property: "og:title", content: "About — Ziad El-Sayed" },
      {
        property: "og:description",
        content: "Get to know Ziad El-Sayed: frontend engineer, mentor and continuous learner.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();

  return (
    <PageShell>
      <SectionHeader
        eyebrow={t("nav.about")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <div className="overflow-hidden rounded-[1.5rem] border border-border ember-glow">
            <img
              src={aboutAsset}
              alt="Portrait of Ziad El-Sayed"
              loading="lazy"
              width={1024}
              height={1024}
              className="size-full object-cover"
            />
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("about.p1")}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("about.p2")}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="surface-panel p-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                <GraduationCap className="size-4" />
                {t("about.education")}
              </span>
              <h2 className="mt-3 font-display text-xl font-bold">{t("about.degree")}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t("about.school")}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-muted px-3 py-1">{t("about.period")}</span>
                <span className="rounded-full bg-muted px-3 py-1">{t("about.cgpa")}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </PageShell>
  );
}
