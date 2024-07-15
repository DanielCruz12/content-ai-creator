import React from "react";
import { CardDemo } from "./card-list";
import templates from "@/app/(data)/templates";
import { SearchList } from "./search-list";

export const TemplateList = () => {
  return (
    <div className="grid gap-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 py-6">
        <SearchList />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {templates.map((tool, index) => (
          <CardDemo key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
};
