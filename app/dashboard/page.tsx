"use client";
import Cto from "./_components/cto";
import { TemplateList } from "./_components/template-list";
import templates from "../(data)/templates";
import FormService from "@/services/formServices";
import { useEffect } from "react";

const Dashboard = () => {
  const getForms = async () => {
    try {
      const res = await FormService.getFormsAi();
      console.log(res);
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
        <TemplateList templates={templates} />
      </div>
      <Cto />
    </div>
  );
};

export default Dashboard;
