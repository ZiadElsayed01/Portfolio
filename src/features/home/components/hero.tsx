import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import heroAsset from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/features/contact/data";
import { projects } from "@/features/projects/data";
import { useI18n } from "@/lib/i18n";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { t } = useI18n();

  const stats = [
    { value: "React | Next", label: t("home.stat.stack") },
    { value: "1+", label: t("home.stat.years") },
    { value: `${projects.length}`, label: t("home.stat.projects") },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-0 veil" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-sm font-semibold tracking-[0.24em] text-primary uppercase"
          >
            {t("home.greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-4 text-5xl leading-[0.95] font-extrabold text-balance md:text-7xl"
          >
            {t("home.name")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mt-3 font-display text-2xl font-bold text-ember-gradient md:text-3xl"
          >
            {t("home.role")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t("home.tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full px-6">
              <Link to="/contact">
                {t("home.cta.contact")}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6">
              <Link to="/projects">{t("home.cta.projects")}</Link>
            </Button>

            <div className="flex items-center gap-2 ps-1">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Github className="size-4" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                aria-label="Email"
                className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-xl font-extrabold text-balance md:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/12 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border ember-glow">
            <img
              src={heroAsset}
              alt="Ziad El-Sayed, frontend developer"
              width={1024}
              height={1024}
              className="size-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/85 to-transparent p-5">
              <p className="font-display text-sm font-bold">{t("contact.locationValue")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
