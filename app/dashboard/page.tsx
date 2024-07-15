/* eslint-disable @next/next/no-img-element */
import Cto from "./_components/cto";
import { TemplateList } from "./_components/template-list";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center rounded-lg w-full">
      <TemplateList />
      <Cto />
    </div>
  );
};

export default Dashboard;
