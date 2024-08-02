import React from "react";
import Code from "@/components/code";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const DocumentationContent = ({ dataOutput }: any) => {
  return (
    <Tabs defaultValue="markdown" className="w-full">
      <TabsContent value="markdown">
        <Code animated code={dataOutput} language="markdown" show={true} />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationContent;
