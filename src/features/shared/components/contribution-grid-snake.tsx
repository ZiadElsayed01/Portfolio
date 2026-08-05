import { Github, Sparkles } from "lucide-react";

export function ContributionGridSnake() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
      {/* Top decoration */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_35%)] dark:bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_35%)]" />

      {/* Content */}
      <div className="relative p-6">
        {/* Label */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          Live GitHub Activity
        </div>

        {/* Snake */}
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>

          {/* Shine */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[140%] group-hover:opacity-100 dark:via-white/10" />
          </div>

          <picture className="relative z-10 block p-3">
            <source
              media="(prefers-color-scheme: dark)"
              srcSet="https://raw.githubusercontent.com/ZiadElsayed01/ZiadElsayed01/output/github-contribution-grid-snake-dark.svg"
            />

            <source
              media="(prefers-color-scheme: light)"
              srcSet="https://raw.githubusercontent.com/ZiadElsayed01/ZiadElsayed01/output/github-contribution-grid-snake.svg"
            />

            <img
              src="https://raw.githubusercontent.com/ZiadElsayed01/ZiadElsayed01/output/github-contribution-grid-snake.svg"
              alt="GitHub Contribution Snake"
              className="w-full transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </picture>

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-background/70 to-transparent" />
        </div>
      </div>
    </div>
  );
}
