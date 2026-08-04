import { Reveal } from "./reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      {eyebrow ? (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] text-primary uppercase">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </span>
      ) : null}
      <h1 className="text-4xl leading-[1.05] font-extrabold text-balance md:text-6xl">{title}</h1>
      {subtitle ? (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
