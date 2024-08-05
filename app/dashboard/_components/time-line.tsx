import TimeLineCard from "@/components/time-line-card";
import { FC } from "react";
type TimeLineTypes = {
  history: any;
};

export const TimeLine: FC<TimeLineTypes> = ({ history }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 mb-[10rem]">
      <h1 className="m-4 pb-5 text-2xl text-center font-semibold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
        History
      </h1>
      <div className=" flex justify-center items-center">
        <div className="max-w-5xl ">
          {history.map((item: any) => (
            <TimeLineCard
              key={item.id}
              svgIcon={item.form.icon}
              category={item.form.category}
              date={"12 de marzo, 2024"}
              title={item.form_fields_data}
              subTitle={item.form.slug}
              description={item.responseData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
