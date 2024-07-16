"use client";
import React from "react";
import { CardDemo } from "./card-list";
import templates from "@/app/(data)/templates";
import { SearchList } from "./search-list";

export const TemplateList = () => {
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
  }, [inputValueSearch]);

  return (
    <div className="grid gap-4 p-4">
      <div className="grid grid-rows-1 grid-cols-1 gap-4 py-6">
        <SearchList
          inputValueSearch={inputValueSearch}
          setInputValueSearch={setInputValueSearch}
        />
      </div>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 ">
        {templateList.length > 0 ? (
          templateList.map((tool, index) => (
            <CardDemo key={index} tool={tool} />
          ))
        ) : (
          <p className="text-primary">No templates found.</p>
        )}
      </div>
    </div>
  );
};
