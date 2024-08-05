import { FC, ReactNode } from "react";
type TimeLineCardProps = {
  date: string;
  title: string;
  subTitle: string;
  svgIcon: ReactNode;
  description: string;
};
const TimeLineCard: FC<TimeLineCardProps> = ({
  date,
  title,
  svgIcon,
  subTitle,
  description,
}) => {
  return (
    <div className="relative rounded-lg">
      <div className="md:flex  items-center md:space-x-4 mb-3">
        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
          <div className="flex items-center justify-center w-10 h-10 rounded-full  shadow md:order-1">
            {svgIcon}
          </div>
          <time className="font-caveat font-medium text-lg text-gray-200 md:w-28">
            {date}
          </time>
        </div>
        <div className="text-slate-500 ml-14">
          <span className="text-slate-200 font-bold">{title} </span>
          {subTitle}
        </div>
      </div>
      <div className=" p-4 rounded white-glassmorphism Box text-white shadow ml-14 md:ml-44">
        {description}
      </div>
    </div>
  );
};

export default TimeLineCard;
