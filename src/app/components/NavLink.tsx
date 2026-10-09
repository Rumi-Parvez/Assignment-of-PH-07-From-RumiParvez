"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ICategoryType } from "../types/category";

interface NavLinkProps {
  nav: ICategoryType;
}

const NavLink = ({ nav }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === `/category/${nav.slug}`;

  return (
    <Link href={`/category/${nav.slug}`}>
      <div
        className={`flex justify-center items-center gap-1 px-2 sm:px-3 md:px-4 lg:px-5 py-2 rounded-lg ${
          isActive ? "bg-green-600 text-white" : "text-black"
        }`}
      >
        <h1 className="text-sm">{nav.icon}</h1>
        <h1 className="text-sm whitespace-nowrap">{nav.nameBn}</h1>
      </div>
    </Link>
  );
};

export default NavLink;
