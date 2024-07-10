import React from "react";
import {
  HomeIcon,
  GearIcon,
  InfoCircledIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const sidebarItems = [
  { label: "Home", icon: HomeIcon, href: "#" },
  { label: "Settings", icon: GearIcon, href: "#" },
  { label: "About", icon: InfoCircledIcon, href: "#" },
  { label: "Logout", icon: ExitIcon, href: "#" },
];

export const Sidebar = () => {
  return (
    <aside className="h-screen p-5 shadow-sm border text-white flex flex-col">
      <div className="flex items-center mb-5">
        <div className="text-2xl font-bold">DanDev</div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {sidebarItems.slice(0, -1).map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center p-3 rounded hover:bg-gray-700"
              >
                <item.icon className="mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <Link href="#" className="flex items-center p-3 rounded hover:bg-gray-700">
          <GearIcon className="mr-3" />
          Logout
        </Link>
      </div>
    </aside>
  );
};
