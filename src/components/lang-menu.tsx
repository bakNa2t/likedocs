"use client";

import { useEffect, useState } from "react";
import { Check, LanguagesIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LangMenu = () => {
  const router = useRouter();
  const [locale, setLocale] = useState("");

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("LIKEDOCS_LOCALE="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);

      setLocale(browserLocale);
      document.cookie = `LIKEDOCS_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `LIKEDOCS_LOCALE=${newLocale};`;
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <LanguagesIcon className="size-4" />
          <span>Language</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" alignOffset={-23}>
        <DropdownMenuItem onClick={() => changeLocale("en")}>
          en
          {locale === "en" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale("ru")}>
          ru
          {locale === "ru" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
