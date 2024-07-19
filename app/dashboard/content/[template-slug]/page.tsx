import React from "react";
import { Output } from "../../_components/output";
import templates from "@/app/(data)/templates";
import { FormComponent } from "../../_components/form";

interface Tprops {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent: React.FC<Tprops> = ({ params }) => {
  const selectedTemplate = templates.find(
    (item) => item.slug === params["template-slug"]
  );

  return (
    <div className="flex flex-col justify-center items-center rounded-sm">
      <FormComponent selectedTemplate={selectedTemplate} />
      <Output />
    </div>
  );
};

export default CreateNewContent;
