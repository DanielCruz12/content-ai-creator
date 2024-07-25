import Cto from "./_components/cto";
import { TemplateList } from "./_components/template-list";
import templates from "../(data)/templates";

const Dashboard = () => {
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
