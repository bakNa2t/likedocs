import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { SearchInput } from "./search-input";

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

      <UserButton />
    </nav>
  );
};
