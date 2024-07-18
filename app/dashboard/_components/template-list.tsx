"use client";
import React from "react";
import { SearchList } from "./search-list";
import { CardDemo } from "./card-list";
import { Skeleton } from "@/components/ui/skeleton";

interface TemplateListProps {
  templates: any;
}

export const TemplateList: React.FC<TemplateListProps> = ({ templates }) => {
  const [inputValueSearch, setInputValueSearch] = React.useState("");
  const [templateList, setTemplateList] = React.useState(templates);

  React.useEffect(() => {
    const filterData = templates.filter((item: any) =>
      item.name.toLowerCase().includes(inputValueSearch.toLowerCase())
    );
    setTemplateList(filterData);
    if (inputValueSearch === "" || !inputValueSearch) {
      setTemplateList(templates);
    }
  }, [inputValueSearch, templates]);

  return (
    <div className="gap-4 p-4 ">
      <div className="grid grid-rows-1 grid-cols-1 gap-4 py-6 ">
        <SearchList
          inputValueSearch={inputValueSearch}
          setInputValueSearch={setInputValueSearch}
        />
      </div>
      {templateList.length > 0 ? (
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {templateList.map((tool: any, index: number) => (
            <CardDemo key={index} tool={tool} />
          ))}
        </div>
      ) : (
        <Skeleton className="flex justify-center items-center w-full h-64">
          <p className="text-center p-4 rounded">No templates found.</p>
        </Skeleton>
      )}
    </div>
  );
};
