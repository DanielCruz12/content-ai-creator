import React from "react";
import SimpleBar from "simplebar-react";
import Code from "@/components/code";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const DocumentationContent = ({ dataOutput }: any) => {
  if (!dataOutput) return null;
  return (
    <Tabs className="max-w-6xl w-full mt-10 p-4">
      <TabsContent value="">
        <SimpleBar forceVisible="y">
          <Code animated code={dataOutput} language="javascript" show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationContent;
