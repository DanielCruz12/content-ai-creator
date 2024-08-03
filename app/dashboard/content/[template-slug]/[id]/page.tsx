"use client";
import React, { useState } from "react";
/* import { Output } from "../../_components/output";
 */ import templates from "@/app/(data)/templates";
import { FormComponent } from "../../../_components/form";
import { chatSession } from "@/utils/aiModel";
import toast from "react-hot-toast";
import DocumentationContent from "../../../_components/documentation-content";
import { BarLoader } from "react-spinners";
import { useUser } from "@clerk/nextjs";
import FormService from "@/services/formServices";

interface Tprops {
  params: {
    "template-slug": string;
    id: string;
  };
}

const CreateNewContent: React.FC<Tprops> = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [dataOutput, setDataOutput] = useState<any>(null);
  const user = useUser();
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
      if (!params.id) return;
      setLoading(true);
      const result = await chatSession.sendMessage(finalPrompt);
      setDataOutput(result.response.text());

      toast.success("Generated successfully.", {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
      const dataToSend = {
        userId: user.user?.id,
        responseData: result.response.text(),
        share_status: false,
        formId: params.id,
        form_fields_data: formValues,
      };
      await FormService.saveResponseDataAi(dataToSend);
      setLoading(false);
    } catch (error) {
      setDataOutput(null);
      console.error("Error generating AI content:", error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className=" flex flex-col items-center w-full p-4 max-w-5xl mx-auto">
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <BarLoader color="#ffffff" width={300} />
        </div>
      )}
      <div className="w-full space-y-4 flex flex-col max-w-5xl">
        <div>
          <FormComponent
            selectedTemplate={selectedTemplate}
            generateAIContent={generateAIContent}
            loading={loading}
          />
        </div>
        <div className=" w-full max-h-[60vh] bg-white dark:bg-gray-900 rounded-md shadow-md p-4">
          {dataOutput ? (
            <div className="text-justify text-wrap">
              <DocumentationContent dataOutput={dataOutput} />
            </div>
          ) : (
            <small className="text-[#777777]">
              Your generated content will appear here...
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
