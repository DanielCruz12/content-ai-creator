/* eslint-disable no-unused-vars */
import { FC } from "react";
import TimeLineCard from "@/components/time-line-card";

type TimeLineTypes = {
  history: any;
  shareForm: (formId: string, currentStatus: boolean) => Promise<void>;
};

export const TimeLine: FC<TimeLineTypes> = ({ history, shareForm }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 mb-[10rem] px-10">
      <h1 className="m-4 pb-5 text-2xl text-center font-semibold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
        History
      </h1>
      <div className=" flex justify-center items-center">
        <div className="max-w-5xl w-full">
          {history.map((item: any) => (
            <TimeLineCard
              shareForm={shareForm}
              key={item.id}
              id={item.id}
              svgIcon={item.form.icon}
              category={item.form.category}
              date={item.createdAt}
              status={item.share_status}
              title={item.form_fields_data}
              slug={item.form.slug}
              description={item.responseData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
