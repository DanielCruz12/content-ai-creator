"use client";
import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/Icons";
import toast from "react-hot-toast";
import { quillFormats, quillModules } from "@/src/utils/quill";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

interface OutputProps {
  dataOutput: any;
}

export const Output: React.FC<OutputProps> = ({ dataOutput }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(dataOutput).then(
      () => {
        toast.success("Copied to clipboard successfully!", {
          position: "bottom-center",
          style: { backgroundColor: "#e7e6e6" },
        });
      },
      () => {
        toast.error("Failed to copy to clipboard:", {
          position: "bottom-center",
          style: { backgroundColor: "#e7e6e6" },
        });
      }
    );
  };

  return (
    <section className="w-full mt-6 max-w-6xl mb-20">
      {dataOutput !== null && dataOutput !== "" ? (
        <Button
          onClick={handleCopy}
          className="absolute bottom-0 right-0 m-4 md:m-12 z-50"
          variant={"default"}
        >
          <Icons.copy /> Copy
        </Button>
      ) : null}
      <div className=" max-h-[18rem] md:h-[16rem] h-[14rem]">
        <QuillEditor
          value={dataOutput}
          modules={quillModules}
          formats={quillFormats}
          theme="snow"
          className="w-full h-[70%] z-40"
        />
      </div>
    </section>
  );
};
