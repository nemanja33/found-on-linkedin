"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { RouteType } from "./routes";

const NavLink = ({
  url,
  name
}: RouteType) => {
  const pathname = usePathname();
  return (
    <Link
      href={url}
      aria-current={pathname === url ? "page" : undefined}
    >
      {name}
    </Link>
  )
};

export { NavLink }