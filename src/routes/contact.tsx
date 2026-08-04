import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/features/contact/data";
import { PageShell } from "@/features/shared/components/page-shell";
import { Reveal } from "@/features/shared/components/reveal";
import { SectionHeader } from "@/features/shared/components/section-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ziad El-Sayed" },
      {
        name: "description",
        content:
          "Get in touch with Ziad El-Sayed, frontend developer based in Cairo, Egypt — email, phone, GitHub and LinkedIn.",
      },
      { property: "og:title", content: "Contact — Ziad El-Sayed" },
      {
        property: "og:description",
        content: "Open to new opportunities and interesting frontend projects.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const details = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: contactInfo.phone,
      href: contactInfo.phoneHref,
    },
    { icon: MapPin, label: t("contact.location"), value: t("contact.locationValue") },
  ];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <PageShell>
      <SectionHeader
        eyebrow={t("nav.contact")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {details.map((detail, index) => (
            <Reveal key={detail.label} delay={index * 0.05}>
              <div className="surface-panel flex items-center gap-4 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/12 text-primary">
                  <detail.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="block truncate text-sm font-semibold hover:text-primary"
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

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3">
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
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="surface-panel space-y-4 p-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t("contact.form.name")}</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.form.email")}</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t("contact.form.message")}</Label>
              <Textarea id="message" name="message" rows={5} required />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full">
              {t("contact.form.submit")}
            </Button>
            {sent ? (
              <p className="text-center text-sm text-muted-foreground">{t("contact.form.sent")}</p>
            ) : (
              <p className="text-center text-sm text-muted-foreground">{t("contact.outro")}</p>
            )}
          </form>
        </Reveal>
      </div>
    </PageShell>
  );
}
