/* eslint-disable @next/next/no-img-element */
import { MagicWandIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FocusIcon } from "lucide-react";
import Link from "next/link";

type Tool = {
  name: string;
  desc: string;
  category: string;
  slug: string;
  aiPrompt: string;
  icon: string;
};

type CardDemoProps = {
  className?: string;
  tool: Tool;
};

export function CardDemo({ className, tool, ...props }: CardDemoProps) {
  return (
    <Link href={`/dashboard/content/${tool.slug}`}>
      <Card
        className={cn(
          "w-[310px] hover:cursor-pointer border-[1px] dark:border-[#2c2c2c] border-[#6d6d6d] md:w-auto max-w-[370px]",
          className
        )}
        {...props}
      >
        <CardHeader>
          <CardTitle>{tool.name}</CardTitle>
          <CardDescription className="text-primary">
            {tool.desc}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <FocusIcon />
            {/* <img className="w-7 h-7" src={tool.icon} alt={tool.desc} /> */}
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Category: {tool.category}
              </p>
              <p className="text-sm text-muted-foreground">
                ¡Try now! and see the magic...
              </p>
            </div>
          </div>
          <div>
            <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{tool.slug}</p>
                <p className="text-sm text-muted-foreground">{tool.aiPrompt}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <MagicWandIcon className="mr-2 h-4 w-4" /> Generate magic!
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
