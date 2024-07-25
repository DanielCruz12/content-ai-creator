"use client";
import React, { useState } from "react";
/* import { Output } from "../../_components/output";
 */ import templates from "@/app/(data)/templates";
import { FormComponent } from "../../_components/form";
import { chatSession } from "@/utils/aiModel";
import toast from "react-hot-toast";
import DocumentationContent from "../../_components/documentation-content";
import { BarLoader } from "react-spinners";

interface Tprops {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent: React.FC<Tprops> = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [dataOutput, setDataOutput] = useState<any>(null);

  const selectedTemplate = templates.find(
    (item) => item.slug === params["template-slug"]
  );

  const generateAIContent = async (values: any) => {
    if (!selectedTemplate) return;

    const formValues = Object.entries(values)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");

    const finalPrompt = `${JSON.stringify(formValues)} ${selectedTemplate.aiPrompt}`;
    try {
      setLoading(true);
      const result = await chatSession.sendMessage(finalPrompt);
      setDataOutput(result.response.text());

      toast.success("Generated successfully.", {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
      setLoading(false);
    } catch (error) {
      setDataOutput(null);
      console.error("Error generating AI content:", error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col overflow-hidden justify-center items-center w-full  rounded-sm">
      {loading === true && (
        <div className="absolute inset-0 z-50 flex justify-center items-center bg-[#181818] bg-opacity-75">
          <BarLoader color="#322d3d" width={300} />
        </div>
      )}
      <FormComponent
        selectedTemplate={selectedTemplate}
        generateAIContent={generateAIContent}
        loading={loading}
      />
      <DocumentationContent dataOutput={dataOutput} />
      {/*  <Output dataOutput={dataOutput} /> */}
    </div>
  );
};

export default CreateNewContent;
