"use client";

import React, { useState } from "react";
import { FormComponent } from "../../../_components/form";
import toast from "react-hot-toast";
import { BarLoader } from "react-spinners";
import { useUser } from "@clerk/nextjs";
import FormService from "@/src/services/formServices";
import { chatSession } from "@/src/utils/aiModel";
import type { SaveResponseData } from "@/src/types";
import useGetForms from "@/src/hooks/useGetForms";

interface CreateNewContentProps {
  params: {
    "template-slug": string;
    id: string;
  };
}

interface FormValues {
  [key: string]: string | number | boolean;
}

const CreateNewContent: React.FC<CreateNewContentProps> = ({ params }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataOutput, setDataOutput] = useState<string | null>(null);
  const user = useUser();
  const { data } = useGetForms();

  const selectedTemplate = data.find(
    (item) => item.slug === params["template-slug"]
  );

  const generateAIContent = async (values: FormValues) => {
    if (!selectedTemplate) return;

    const formValues = Object.entries(values)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");

    const formInput = Object.values(values).map((value) => value);
    const firstValue = formInput[0];

    const finalPrompt = `${JSON.stringify(formValues)} ${selectedTemplate.aiPrompt}`;

    try {
      if (!params.id) return;
      setLoading(true);

      //* depends on what model the user wants:
      const result = await chatSession.sendMessage(finalPrompt);
      setDataOutput(result.response.text());

      toast.success("Generated successfully.", {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
      const dataToSend: SaveResponseData = {
        userId: user.user?.emailAddresses[0].id ?? "",
        responseData: result.response.text(),
        share_status: false,
        formId: params.id,
        form_fields_data: firstValue as string,
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
    <div className=" flex flex-col items-center w-full pb-10">
      {loading && (
        <div className="absolute h-screen inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <BarLoader color="#ffffff" width={300} />
        </div>
      )}
      <div className=" w-full pt-10 max-w-6xl">
        {selectedTemplate && (
          <FormComponent
            selectedTemplate={selectedTemplate}
            generateAIContent={generateAIContent}
            loading={loading}
          />
        )}
      </div>
      <div className=" w-full pt-10 max-w-6xl">
        <div className="w-full bg-white dark:bg-gray-900 rounded-md shadow-md p-4">
          {dataOutput ? (
            <div
              className="text-justify overflow-auto max-h-[25vh] max-w-full"
              style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
            >
              {dataOutput}
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
