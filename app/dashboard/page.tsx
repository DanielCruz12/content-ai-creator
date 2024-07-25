/* eslint-disable @next/next/no-img-element */
import { getFormAiTemplates } from "@/lib/actions/formAI";
import Cto from "./_components/cto";
import { TemplateList } from "./_components/template-list";
import templates from "../(data)/templates";

const Dashboard = () => {
  const templatesA = getFormAiTemplates()
  console.log(templatesA)
  return (
    <div className="flex flex-col items-center rounded-lg">
      <div className="max-w-6xl w-full">
        <TemplateList templates={templates} />
      </div>
      <Cto />
    </div>
  );
};

export default Dashboard;
