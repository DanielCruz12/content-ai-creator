"use client";

import useGetForms from "@/src/hooks/useGetForms";
import { TemplateList } from "./_components/template-list";

const Dashboard = () => {
  const { data } = useGetForms();

  return (
    <div className="flex flex-col items-center rounded-lg">
      <div className="max-w-6xl w-full">
        <TemplateList templates={data} />
      </div>
    </div>
  );
};

export default Dashboard;
