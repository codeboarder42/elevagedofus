"use client";

import {
  BugAntIcon,
  HomeIcon,
  HeartIcon,
  ArrowPathIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Gestion des montures", href: "/dashboard/mounts", icon: BugAntIcon },
  { name: "Accouplements", href: "/dashboard/couplings", icon: HeartIcon },
  { name: "Gestations", href: "/dashboard/gestations", icon: ArrowPathIcon },
  { name: "Accouchements", href: "/dashboard/deliveries", icon: BellAlertIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-lime-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              isActive ? "bg-lime-100 text-green-600" : ""
            }`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
