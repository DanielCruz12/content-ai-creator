import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function CardWithForm() {
  return (
    <Card
      className="w-full bg-gradient-to-r
    from-[#02585f]
    via-[#9b5378]
    to-[#646464] background-animate hover:cursor-pointer hover:border-slate-500 border	"
    >
      <CardHeader>
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="flex flex-col">
            <CardTitle className=" text-white">Create project</CardTitle>
            <CardDescription className="text-gray-300">
              Deploy your new project in one-click.
            </CardDescription>
          </div>
          <div className="flex py-3">
            <form className="w-full">
              <Input placeholder="Search...." />
            </form>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
