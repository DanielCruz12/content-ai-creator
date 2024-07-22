"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { quillFormats, quillModules } from "@/config";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/Icons";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export const Output = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent: any) => {
    setContent(newContent);
  };

  return (
    <section className="w-full mt-6 max-w-6xl mb-20">
      {content !== null && content !== "" ? (
        <Button
          className="absolute bottom-0 right-0 m-4 md:m-12 z-50"
          variant={"default"}
        >
          <Icons.copy className="" /> Copy
        </Button>
      ) : null}
      <div className=" max-h-[18rem] md:h-[16rem] h-[14rem]">
        <QuillEditor
          value={content}
          onChange={handleEditorChange}
          modules={quillModules}
          formats={quillFormats}
          className="w-full h-[70%] z-40"
        />
      </div>
    </section>
  );
};
