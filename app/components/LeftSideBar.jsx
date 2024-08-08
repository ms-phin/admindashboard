"use client";
import { loginOptionLink, sidebarLinks } from "@/constants";
import { sidebarBottomLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

import { usePathname, useRouter } from "next/navigation";
// import { fetchUsers } from "../api/data";

const LeftSideBar = async ({ isAdmin }) => {
  const pathname = usePathname();
  // const users = await fetchUsers();
  // console.log(users.isActive);
  //   const router = useRouter();
  return (
    <section className="left_sidebar  h-[calc(100vh-20px)] rounded-l-lg ">
      <nav className="flex flex-col ">
        <div className=" flex items-center ml-[21px] mt-[21px] gap-[15px]">
          <Image
            src="/icons/Menu.png"
            alt="logo"
            width={16}
            height={12}
            className="-mt-10"
          />
          <Link
            href="/admin-dashboard"
            className="flex  items-center gap-1 pb-10 max-lg:justify-center"
          >
            <Image
              src="/icons/SideLogoIcon.png"
              alt="logo"
              width={37.95}
              height={21}
            />

            <h1 className="text-24 ml-[5px] font-extrabold text-white max-lg:hidden">
              Book Rent
            </h1>
          </Link>
        </div>
        <div className="w-[230px]  ml-[24px] mb-[10px] border-t border-white border-opacity-80"></div>
        {sidebarLinks.map(({ label, route, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);
          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-3 items-center p-[10px]   max-lg:px-4 justify-center lg:justify-start lg:ml-[24px] ",
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
        })}
        <div className="w-[230px]  ml-[24px] border-t border-white border-opacity-80"></div>
        {sidebarBottomLinks.map(({ label, route, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);
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
        })}

        <div className="w-[230px]  ml-[24px] border-t border-white border-opacity-80"></div>
      </nav>
      <div className="flex items-center justify-center w-[230px] h-[48px] ml-4 mb-5 bg-gray-600  rounded-[15px] ">
        <div className="flex items-center w-[20px] h-[20px]  ">
          <Image
            src="/icons/Line.png"
            alt="line"
            width={8}
            height={2}
            className=""
          />
          <Image
            src="/icons/Arrow.png"
            alt="arrow"
            width={6}
            height={10}
            className=""
          />{" "}
          <Image
            src="/icons/Bracket.png"
            alt="bracket"
            width={6}
            height={15}
            className="left-[3px] "
          />
        </div>
        <div className="ml-0">
          <Button
            className="text-[18px] font-[500]"
            // onClick={() => signOut(() => router.push("/"))}
          >
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
