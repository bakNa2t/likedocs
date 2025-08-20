import Image from "next/image";
import Link from "next/link";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import { SearchInput } from "./search-input";
import { AdvancedMenu } from "@/components/advanced-menu";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-full">
      <div className="flex items-center gap-3 shrink-0 pr-6">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={36} height={36} />
        </Link>

        <h3 className="text-xl">Likedocs</h3>
      </div>

      <SearchInput />

      <div className="flex items-center gap-3 pl-6">
        <OrganizationSwitcher
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl="/"
          afterSelectPersonalUrl="/"
          appearance={{
            elements: {
              organizationSwitcherTrigger:
                "p-2 dark:text-white dark:bg-neutral-600/60 dark:hover:bg-neutral-100/40",
            },
          }}
        />
        <UserButton />

        <AdvancedMenu />
      </div>
    </nav>
  );
};
