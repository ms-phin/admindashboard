"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

// import styles from './menuLink.module.css'
import { usePathname } from "next/navigation";

const MenuLink = ({ label, route, imgURL, isUser }) => {
  const pathname = usePathname();
  // const isActive =
  //   pathname === route ||
  //   (isUser
  //     ? pathname.startsWith(`${route}/`)
  //     : pathname.startsWith(`${route}/admin-dashboard/`));
  console.log("pathname", pathname);
  console.log("route", route);

  const isActive = pathname === route || pathname.startsWith(`${route}/`);
  return (
    <Link
      href={route}
      key={label}
      className={cn(
        "flex gap-3 items-center p-[10px]  max-lg:px-4 justify-center lg:justify-start lg:ml-[24px]",
        {
          "bg-[#00ABFF] w-[230px] h-[44px] rounded-[5px] ": isActive,
        }
      )}
    >
      <Image src={imgURL} alt={label} width={20} height={18} />
      <p className="font-inter text-sm font-medium leading-[16.94px] text-left">
        {label}
      </p>
    </Link>
  );
};

export default MenuLink;
