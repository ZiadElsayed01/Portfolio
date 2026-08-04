import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { LanguageToggle, ThemeToggle } from "./toggles";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/i18n/dictionaries";

const links: { to: string; key: TranslationKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/experience", key: "nav.experience" },
  { to: "/projects", key: "nav.projects" },
  { to: "/skills", key: "nav.skills" },
  { to: "/contact", key: "nav.contact" },
];

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-md bg-primary font-display text-lg font-extrabold text-primary-foreground">
            Z
          </span>
          <span className="hidden font-display text-md font-bold tracking-tight sm:block">
            {t("nav.brand")}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary bg-accent" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-foreground"
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={t("nav.menu")}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <ul className="border-t border-border bg-background px-5 pb-4 lg:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 text-sm font-medium last:border-b-0"
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
