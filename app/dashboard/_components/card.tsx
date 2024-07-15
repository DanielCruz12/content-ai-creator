import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm() {
  return (
    <Card className="w-full bg-gradient-to-r from-gray-900 from-10% via-sky-900 via-30% to-[#000000] to-90% hover:cursor-pointer hover:border-slate-500 border	">
      <CardHeader>
        <CardTitle className=" text-white">Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
    </Card>
  );
}
