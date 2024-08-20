import React from "react";
import {
  HomeIcon,
  GearIcon,
  PersonIcon,
  ClockIcon,
  DashboardIcon,
  BookmarkIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { SidebarProps } from "@/src/types";

const sidebarItems: SidebarProps[] = [
  { label: "Home", icon: HomeIcon, href: "/" },
  { label: "dashboard", icon: DashboardIcon, href: "/dashboard" },
  { label: "Community", icon: PersonIcon, href: "/dashboard/community" },
  { label: "History", icon: ClockIcon, href: "/dashboard/history" },
  { label: "Saved", icon: BookmarkIcon, href: "/dashboard/save-posts" },
  { label: "Settings", icon: GearIcon, href: "/dashboard/settings" },
];

export const Sidebar = () => {
  return (
    <aside className="h-full bg-[#f8f8f8] dark:bg-[#000] border-r border-[#d4d4d4] dark:border-[#000] p-5">
      <div className="mb-5">
        <div className="text-2xl font-bold text-black dark:text-white">
          <Link href={"/"}>DanDev</Link>
        </div>
      </div>
      <nav>
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center p-3 rounded hover:bg-[#d9d9d9] dark:hover:bg-[#272727]"
              >
                <item.icon className="mr-3 text-black dark:text-white" />
                <span className="text-black dark:text-white">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/*  <div className="mt-auto">
        <Link
          href="#"
          className="flex items-center p-3 rounded hover:bg-[#dedede] dark:hover:bg-[#000]"
        >
          <ExitIcon className="mr-3 text-black dark:text-white" />
          <span className="text-black dark:text-white">Logout</span>
        </Link>
      </div> */}
    </aside>
  );
};
