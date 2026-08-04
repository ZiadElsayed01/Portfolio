import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-105 veil" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-5 section-padding md:px-8">
        {children}
      </div>
    </div>
  );
}
