/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useState } from "react";
import moment from "moment";
import { Button } from "./ui/button";
import { Share2Icon, SymbolIcon } from "@radix-ui/react-icons";

type TimeLineCardProps = {
  date: string;
  title: string;
  slug: string;
  category?: string;
  svgIcon?: string;
  description: string;
  status: boolean;
  id: string;
  shareForm: (formId: string, currentStatus: boolean) => Promise<void>;
};
const TimeLineCard: FC<TimeLineCardProps> = ({
  date,
  category,
  title,
  shareForm,
  slug,
  status,
  id,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <ol className="relative border-s py-4 border-gray-200 dark:border-gray-700">
      <li className=" ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-2 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"></span>
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
          className="text-xs py-5 italic font-normal dark:text-gray-300 border rounded-lg  cursor-pointer"
          onClick={toggleExpansion}
        >
          <div className="px-3">
            {isExpanded ? description : `${description.slice(0, 470)}...`}
            <button
              onClick={toggleExpansion}
              className="dark:text-gray-200 hover:underline dark:hover:text-gray-100 dark:hover:text-bold px-1"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        </div>

        <Button
          variant={status ? "outline" : "default"}
          onClick={() => shareForm(id, status)}
          className="inline-flex my-3 items-center px-4 py-2 text-sm font-medium rounded-lg"
        >
          {status ? <SymbolIcon /> : <Share2Icon />}
          <p className="px-2">{status ? "Unshare" : "Share"}</p>
        </Button>
      </li>
    </ol>
  );
};

export default TimeLineCard;
