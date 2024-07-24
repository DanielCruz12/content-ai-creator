/* eslint-disable @next/next/no-img-element */
import { getAiForms } from "@/lib/supabase/queries";
import templates from "../(data)/templates";
import Cto from "./_components/cto";
import { TemplateList } from "./_components/template-list";

const Dashboard = () => {
  const forms = getAiForms()
  console.log(forms)
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
