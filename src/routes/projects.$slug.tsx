import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github, Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, type Project } from "@/features/projects/data";
import { Reveal } from "@/features/shared/components/reveal";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Ziad El-Sayed` },
        { name: "description", content: project.description.en },
        { property: "og:title", content: `${project.title} — Ziad El-Sayed` },
        { property: "og:description", content: project.description.en },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetailsPage,
});

function ProjectNotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 section-padding text-center md:px-8">
      <h1 className="font-display text-3xl font-extrabold">404</h1>
      <p className="mt-2 text-muted-foreground">This project doesn't exist.</p>
      <Link to="/projects" className="mt-6 inline-block text-sm font-semibold text-primary">
        Back to projects
      </Link>
    </div>
  );
}

function ProjectDetailsPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const { t, tl } = useI18n();

  return (
    <article>
      <div className="relative border-b border-border">
        <div className="absolute inset-0" aria-hidden>
          <img
            src={project.banner}
            alt=""
            width={1280}
            height={720}
            className="size-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/85 to-background/60" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4 rtl:rotate-180" />
            {t("common.back")}
          </Link>

          <h1 className="mt-6 text-4xl font-extrabold text-balance md:text-6xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            {tl(project.description)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.demo ? (
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  {t("common.demo")}
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            ) : null}
            {project.github ? (
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  {t("common.code")}
                </a>
              </Button>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground">
                <Lock className="size-4" />
                {t("common.private")}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 section-padding md:px-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-10">
          <Reveal>
            <div className="overflow-hidden rounded-[1.5rem] border border-border">
              <img
                src={project.banner}
                alt={`${project.title} banner`}
                width={1280}
                height={720}
                className="size-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-2xl font-bold">{t("common.overview")}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {tl(project.longDescription)}
            </p>
          </Reveal>

          {project.images.length > 1 ? (
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-bold">{t("common.gallery")}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {project.images.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="overflow-hidden rounded-xl border border-border"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      loading="lazy"
                      width={1280}
                      height={720}
                      className="size-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>

        <aside className="space-y-6">
          <Reveal delay={0.05}>
            <div className="surface-panel p-6">
              <h2 className="font-display text-lg font-bold">{t("common.technologies")}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
              <dl className="mt-6 space-y-3 border-t border-border pt-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Year</dt>
                  <dd className="font-semibold">{project.year}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </aside>
      </div>
    </article>
  );
}
