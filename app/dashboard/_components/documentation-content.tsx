import React from "react";
import Code from "@/components/code";

const DocumentationContent = ({ dataOutput }: any) => {
  return <Code animated code={dataOutput} language="markdown" show={true} />;
};

export default DocumentationContent;
