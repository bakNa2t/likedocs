import { useState } from "react";
import { Check, LanguagesIcon } from "lucide-react";

// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LangMenu = () => {
  const [locale, setLocale] = useState("en");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <LanguagesIcon className="size-4" />
          <span>Language</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" alignOffset={-23}>
        <DropdownMenuItem onClick={() => setLocale("en")}>
          en
          {locale === "en" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("ru")}>
          ru
          {locale === "ru" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
