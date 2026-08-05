import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const details = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: MessageCircle,
      label: t("contact.phone"),
      value: contactInfo.phone,
      href: contactInfo.whatsapp,
      whatsapp: true,
    },
    { icon: MapPin, label: t("contact.location"), value: t("contact.locationValue") },
  ];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    const data = new FormData(event.currentTarget);
    const formData = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    try {
      const response = await fetch(`https://formspree.io/f/${contactInfo.formspreeFormId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
      } else {
        const result = await response.json();
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
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
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full ${detail.whatsapp ? "bg-[#25D366]/12 text-[#25D366]" : "bg-primary/12 text-primary"}`}
                >
                  <detail.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`block truncate text-sm font-semibold ${detail.whatsapp ? "hover:text-[#25D366]" : "hover:text-primary"}`}
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
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#24292f] text-[#24292f] hover:bg-[#24292f] hover:text-white"
              >
                <a href={contactInfo.github} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white"
              >
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
              <Input id="name" name="name" required disabled={sending || sent} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("contact.form.email")}</Label>
              <Input id="email" name="email" type="email" required disabled={sending || sent} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t("contact.form.message")}</Label>
              <Textarea id="message" name="message" rows={5} required disabled={sending || sent} />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full"
              disabled={sending || sent}
            >
              {sending ? "Sending..." : sent ? "Sent!" : t("contact.form.submit")}
            </Button>
            {error && <p className="text-center text-sm text-destructive">{error}</p>}
            {sent && !error && (
              <p className="text-center text-sm text-muted-foreground">{t("contact.form.sent")}</p>
            )}
            {!sent && !error && (
              <p className="text-center text-sm text-muted-foreground">{t("contact.outro")}</p>
            )}
          </form>
        </Reveal>
      </div>
    </PageShell>
  );
}
