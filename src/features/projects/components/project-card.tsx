import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Project } from "../data";
import { useI18n } from "@/lib/i18n";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const { t, tl } = useI18n();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group surface-panel flex h-full flex-col overflow-hidden"
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="relative block aspect-video overflow-hidden bg-muted"
      >
        <img
          src={project.banner}
          alt={project.title}
          loading="lazy"
          width={1280}
          height={720}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 inset-e-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
          {project.year}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{tl(project.description)}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full font-normal">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 ? (
            <Badge variant="outline" className="rounded-full font-normal">
              +{project.technologies.length - 5}
            </Badge>
          ) : null}
        </div>

        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          {t("projects.details")}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
