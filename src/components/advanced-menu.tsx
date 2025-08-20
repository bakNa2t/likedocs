import { GlobeIcon, MoreVerticalIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { ThemeMenu } from "./theme-menu";

export const AdvancedMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVerticalIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          onClick={(e) => e.stopPropagation()}
        >
          <ThemeMenu />
        </DropdownMenuItem>

        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          onClick={(e) => e.stopPropagation()}
        >
          <GlobeIcon className="size-4 mr-2" />
          Language
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
