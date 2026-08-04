import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import aboutAsset from "@/assets/about.png";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/features/contact/data";
import { experiences } from "@/features/experience/data";
import { ProjectCard } from "@/features/projects/components/project-card";
import { featuredProjects } from "@/features/projects/data";
import { Reveal } from "@/features/shared/components/reveal";
import { SectionHeader } from "@/features/shared/components/section-header";
import { skillGroups } from "@/features/skills/data";
import { useI18n } from "@/lib/i18n";

export function HomeSections() {
  const { t, tl } = useI18n();

  const contactDetails = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: MessageCircle,
      label: t("contact.phone"),
      value: contactInfo.phone,
      href: contactInfo.whatsapp,
      whatsapp: true,
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("contact.locationValue"),
    },
  ];

  return (
    <div className="space-y-0">
      <section id="about" className="mx-auto w-full max-w-6xl px-5 section-padding md:px-8">
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

          <div className="space-y-4">
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
      </section>

      <section id="experience" className="mx-auto w-full max-w-6xl px-5 section-padding md:px-8">
        <SectionHeader
          eyebrow={t("nav.experience")}
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
        />

        <ol className="mt-12 space-y-5 border-s border-border ps-6 md:ps-10">
          {experiences.slice(0, 4).map((item, index) => (
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
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-5 section-padding md:px-8">
        <SectionHeader
          eyebrow={t("nav.projects")}
          title={t("home.highlights")}
          subtitle={t("home.highlightsSub")}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            {t("common.viewAll")}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-6xl px-5 section-padding md:px-8">
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
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-5 section-padding md:px-8">
        <SectionHeader
          eyebrow={t("nav.contact")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactDetails.map((detail, index) => (
              <Reveal key={detail.label} delay={index * 0.05}>
                <div className="surface-panel flex items-center gap-4 p-5">
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-full ${detail.whatsapp ? "bg-[#25D366]/12 text-[#25D366]" : "bg-primary/12 text-primary"}`}
                  >
                    <detail.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs tracking-wide text-muted-foreground uppercase">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`block truncate text-sm font-semibold ${detail.whatsapp ? "hover:text-[#25D366]" : "hover:text-primary"}`}
                        dir="ltr"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold">{detail.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="surface-panel p-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("contact.outro")}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <a href={contactInfo.github} target="_blank" rel="noreferrer">
                    <Github className="size-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="size-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild className="rounded-full">
                  <a href={`mailto:${contactInfo.email}`}>
                    <Mail className="size-4" />
                    {t("contact.sendEmail")}
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
