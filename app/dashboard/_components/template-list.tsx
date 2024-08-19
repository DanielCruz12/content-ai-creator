"use client";
import React from "react";
import Link from "next/link";
import { SearchList } from "./search-list";
import { CardDemo } from "./card-list";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { TemplateListProps, Tool } from "@/src/types";

export const TemplateList: React.FC<TemplateListProps> = ({ templates }) => {
  const [inputValueSearch, setInputValueSearch] = React.useState("");
  const [templateList, setTemplateList] = React.useState(templates);

  React.useEffect(() => {
    const filterData = templates.filter((item) =>
      item.name.toLowerCase().includes(inputValueSearch.toLowerCase())
    );
    setTemplateList(filterData);
    if (inputValueSearch === "" || !inputValueSearch) {
      setTemplateList(templates);
    }
  }, [inputValueSearch, templates]);

  return (
    <div className="gap-4 ">
      <div className="grid grid-rows-1 grid-cols-1 gap-4 py-3 pb-8">
        <SearchList
          inputValueSearch={inputValueSearch}
          setInputValueSearch={setInputValueSearch}
        />
      </div>
      {}

      <Link href={"/dashboard/create-form"}>
        <Button type="button" variant={"secondary"}>
          Create template
        </Button>
      </Link>

      {templateList.length > 0 ? (
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 pt-3">
          {templateList.map((tool: Tool, index: number) => (
            <CardDemo key={index} tool={tool} />
          ))}
        </div>
      ) : (
        <Skeleton className="flex justify-center items-center w-full h-64 mt-3">
          <p className="text-center p-4 rounded">No templates found.</p>
        </Skeleton>
      )}
    </div>
  );
};
