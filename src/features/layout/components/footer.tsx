import { Github, Linkedin, Mail } from "lucide-react";

import { contactInfo } from "@/features/contact/data";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-surface/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-sm font-bold">{t("nav.brand")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t("footer.built")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="size-4" />
            Email
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Github className="size-4" />
            GitHub
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t("nav.brand")}. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
