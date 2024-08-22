"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DonatePage from "@/app/donation/page";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    description:
      "A central hub where users can manage and monitor their activities.",
  },
  {
    title: "History",
    href: "/dashboard/history",
    description:
      "A section that displays the user's past activities and progress over time.",
  },
  {
    title: "Community",
    href: "/dashboard/community",
    description:
      "A place for users to interact, share information, and engage with the community.",
  },
  {
    title: "Saved",
    href: "/dashboard/save-posts",
    description: "Here you can see the posts you have saved.",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    description: "You can update your profile information.",
  },
];

export function Navigation() {
  const [open, setOpen] = React.useState(false);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Start here</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[300px] md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
            <div className="px-5 pb-3">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <button className="text-white bg-gray-600 rounded-xl px-3 py-2 hover:bg-gray-700">
                    Donate
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>

                  <DonatePage imgSize="w-10/12 h-w-10/12" />
                </DialogContent>
              </Dialog>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
