"use client";
import React, { useState } from "react";
import { Output } from "../../_components/output";
import templates from "@/app/(data)/templates";
import { FormComponent } from "../../_components/form";
import { chatSession } from "@/utils/aiModel";
import toast from "react-hot-toast";

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
    setLoading(true);

    const formValues = Object.entries(values)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");

    const finalPrompt = `${JSON.stringify(formValues)} ${selectedTemplate.aiPrompt}`;
    try {
      setLoading(false);
      const result = await chatSession.sendMessage(finalPrompt);
      console.log(result.response.text());
      setDataOutput(result.response.text());

      toast.success("Generated successfully.", {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
    } catch (error) {
      setLoading(false);
      setDataOutput(null);
      console.error("Error generating AI content:", error);
    }
  };

  return (
    <div className="flex flex-col overflow-hidden justify-center items-center w-full  rounded-sm">
      <FormComponent
        selectedTemplate={selectedTemplate}
        generateAIContent={generateAIContent}
        loading={loading}
      />
      <Output dataOutput={dataOutput} />
    </div>
  );
};

export default CreateNewContent;
