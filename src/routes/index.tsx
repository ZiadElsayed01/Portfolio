import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/features/home/components/hero";
import { HomeSections } from "@/features/home/components/home-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ziad El-Sayed — Frontend Developer Portfolio" },
      {
        name: "description",
        content:
          "Frontend developer specialising in React, Next.js and TypeScript. Explore projects, experience and skills.",
      },
      { property: "og:title", content: "Ziad El-Sayed — Frontend Developer Portfolio" },
      {
        property: "og:description",
        content: "React and Next.js developer building responsive, scalable web applications.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <HomeSections />
    </>
  );
}
