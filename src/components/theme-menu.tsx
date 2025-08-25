import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Check, MoonIcon, SunIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ThemeMenu = () => {
  const t = useTranslations("Navbar");
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {theme === "light" ? (
          <div className="flex items-center justify-center">
            <SunIcon className="size-4 mr-2" />
            {t("themeMode")}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <MoonIcon className="size-4 mr-2" />
            {t("themeMode")}
          </div>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" alignOffset={-37}>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunIcon className="size-4 mr-2" />
          {t("themeModeLight")}{" "}
          {theme === "light" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon className="size-4 mr-2" />
          {t("themeModeDark")}{" "}
          {theme === "dark" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
