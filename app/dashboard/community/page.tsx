/* eslint-disable @next/next/no-img-element */
"use client";
import FormService from "@/services/formServices";
import { BookmarkIcon, Tag } from "lucide-react";
import moment from "moment";
import React, { useEffect, useState } from "react";

const Community = () => {
  const [communityData, setCommunityData] = useState<any>([]);

  const fetchCommunityData = async () => {
    const res = await FormService.getFormsCommunity();
    setCommunityData(res.data);
  };

  useEffect(() => {
    fetchCommunityData();
  }, []);

  return (
    <div>
      <div className=" p-10 flex items-center justify-center">
        {communityData.map((item: any) => (
          <div key={item.id} className=" p-4 rounded-xl border max-w-2xl">
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  className="h-11 w-11 rounded-full"
                  alt="user-profile"
                  src={"https://picsum.photos/200/300"}
                />
                <div className="ml-1.5 text-sm leading-tight">
                  <span className="text-black dark:text-white font-bold block ">
                    {item.user.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 font-normal block">
                    {item.user.email}
                  </span>
                </div>
              </div>
              danDev
            </div>
            <p className="text-black dark:text-white block text-xl leading-snug mt-3">
              {item.form_fields_data}
            </p>
            <small>{item.form.aiPrompt}</small>
            {/*  <img
              alt=""
              className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
              src="https://pbs.twimg.com/media/EpkuplDXEAEjbFc?format=jpg&name=medium"
            /> */}
            <div className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700">
              {`${item.responseData.slice(0, 470)}...`}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-base py-1 my-0.5">
              {moment(item.createdAt).format("LLLL")}
            </p>
            <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
            <div className="text-gray-500 dark:text-gray-400 flex mt-3">
              <div className="flex items-center mr-6">
                <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
                  <g>
                    <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                  </g>
                </svg>
                <span className="ml-3">615</span>
              </div>

              <div className="flex items-center mr-6">
                {/*   <svg className="fill-current h-5 w-auto" viewBox="0 0 24 24">
                  <g>
                    <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                  </g>
                </svg> */}
                <Tag className="w-4 h-4" />
                <span className="ml-3">{item.form.slug}</span>
              </div>
              <div className="flex items-center mr-6">
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
