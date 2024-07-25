import React from "react";
import Code from "@/components/code";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const DocumentationContent = ({ dataOutput }: any) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-6xl w-full mt-10 pb-10 mb-10 p-4">
      <TabsContent value="nodejs">
        {dataOutput ? (
            <div className="max-h-96 max-w-full overflow-auto">
            <Code
              animated
              code={dataOutput}
              language="markdown"
              show={true}
            />
          </div>
        ) : null}
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationContent;
