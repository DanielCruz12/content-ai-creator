/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useState } from "react";
import moment from "moment";
import { Share1Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

type TimeLineCardProps = {
  date: string;
  title: string;
  slug: string;
  category?: string;
  svgIcon?: string;
  description: string;
};
const TimeLineCard: FC<TimeLineCardProps> = ({
  date,
  category,
  title,
  svgIcon,
  slug,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className=" ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          {svgIcon ? <img src={svgIcon} alt={description} /> : ""}
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
            {category}
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {moment(date).fromNow()}
        </time>
        <p className="pb-2">{slug}</p>
        <div
          className="text-xs py-5 italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 cursor-pointer"
          onClick={toggleExpansion}
        >
          <div className="px-3">
            {isExpanded ? description : `${description.slice(0, 470)}...`}
            <button
              onClick={toggleExpansion}
              className="text-gray-200 hover:underline hover:text-gray-100 hover:text-bold px-1"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>

        <Button className="inline-flex my-3 items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-300 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
          <Share1Icon />
          <p className="px-2">Share</p>
        </Button>
      </li>
    </ol>
  );
};

export default TimeLineCard;
