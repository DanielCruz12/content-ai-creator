/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
type TimeLineCardProps = {
  date: string;
  title: string;
  subTitle: string;
  category: string;
  svgIcon: string;
  description: string;
};
const TimeLineCard: FC<TimeLineCardProps> = ({
  date,
  title,
  svgIcon,
  subTitle,
  category,
  description,
}) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <img
            className="rounded-full shadow-lg"
            src={svgIcon}
            alt={category}
          />
        </span>
        <div className="p-4  border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
          <div className="items-center justify-between mb-3 sm:flex">
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
              {date}
            </time>
            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">
              {title}{" "}
              <a
                href="#"
                className="font-semibold text-gray-900 dark:text-white hover:underline"
              >
                {subTitle} 
              </a>
            </div>
          </div>
          <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
            {description}
          </div>
        </div>
      </li>
    </ol>
  );
};

export default TimeLineCard;
