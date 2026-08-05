import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={t("common.theme")}
      className={`rounded-full border border-border transition-colors ${
        theme === "dark"
          ? "bg-[#a5d8ff] text-[#1e3a5f] hover:bg-[#8bc4f0]"
          : "bg-[#eeff00] text-[#2d4a2d] hover:bg-[#b4c108]"
      }`}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useI18n();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      aria-label={t("common.language")}
      className={`rounded-full border border-border px-3 font-semibold tracking-wide transition-colors ${
        locale === "ar"
          ? "bg-[#ffb3ba] text-[#5f2d2d] hover:bg-[#ff9aa2]"
          : "bg-[#c1e1c1] text-[#2d4a2d] hover:bg-[#a8d4a8]"
      }`}
    >
      {locale === "en" ? "AR" : "EN"}
    </Button>
  );
}
