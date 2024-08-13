"use client";

import { TemplateList } from "./_components/template-list";
import FormService from "@/src/services/formServices";
import type { Template } from "@/src/types";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState<Template[]>([]);

  const getForms = async () => {
    try {
      const res = await FormService.getFormsAi();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getForms();
  }, []);

  return (
    <div className="flex flex-col items-center rounded-lg">
      <div className="max-w-6xl w-full">
        <TemplateList templates={data} />
      </div>
    </div>
  );
};

export default Dashboard;
