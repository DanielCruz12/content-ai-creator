/* eslint-disable @next/next/no-img-element */
"use client";
import FormService from "@/src/services/formServices";
import type { FormResponse } from "@/src/types";
import { BookmarkIcon, Tag } from "lucide-react";
import moment from "moment";
import React, { useEffect, useState } from "react";

const Community = () => {
  const [communityData, setCommunityData] = useState<FormResponse[]>([]);

  const fetchCommunityData = async () => {
    const res = await FormService.getFormsCommunity();
    setCommunityData(res);
  };

  useEffect(() => {
    fetchCommunityData();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        {communityData.map((item: any) => (
          <div
            key={item.id}
            className="w-full max-w-4xl p-4 mb-6 rounded-xl border "
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <img
                  className="h-12 w-12 sm:h-11 sm:w-11 rounded-full"
                  alt="user-profile"
                  src={"https://picsum.photos/200/300"}
                />
                <div className="ml-3 text-sm leading-tight">
                  <span className="text-black dark:text-white font-bold block">
                    {item.user.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 font-normal block">
                    {item.user.email}
                  </span>
                </div>
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                danDev
              </span>
            </div>
            <p className="text-black dark:text-white text-lg leading-snug mt-3">
              {item.form_fields_data}
            </p>
            <small className="block text-gray-600 dark:text-gray-400 mt-1">
              {item.form.aiPrompt}
            </small>

            <div className="mt-2 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
              {`${item.responseData.slice(0, 370)}...`}
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm py-1 my-0.5">
              {moment(item.createdAt).format("LLLL")}
            </p>
            <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
            <div className="text-gray-500 dark:text-gray-400 flex flex-wrap mt-3">
              <div className="flex items-center mr-6 mb-2">
                <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
                  <g>
                    <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                  </g>
                </svg>
                <span className="ml-3">615</span>
              </div>

              <div className="flex items-center mr-6 mb-2">
                <Tag className="w-4 h-4" />
                <span className="ml-3">{item.form.slug}</span>
              </div>
              <div className="flex items-center mb-2">
                <BookmarkIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
