/* eslint-disable @next/next/no-img-element */
"use client";

import moment from "moment";
import React, { useEffect, useState } from "react";
import FormService from "@/src/services/formServices";
import type { FormResponse } from "@/src/types";
import { BookmarkIcon, Tag } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const Community = () => {
  const [communityData, setCommunityData] = useState<FormResponse[]>([]);

  const user = useUser();
  const userLoggedId = user?.user?.primaryEmailAddress?.id ?? "";

  // TODO check if formResponse has likes already
  const userHasLiked = communityData.some((item) =>
    item.likes.some((like: { userId: string }) => like.userId === userLoggedId)
  );

  const handleLikePost = async (values: any) => {
    // TODO: Implement like post functionality
    const dataToSend = {
      userId: userLoggedId,
      formResponseId: values.id,
    };
    try {
      if (userHasLiked) {
        await FormService.unLikeResponseId(dataToSend);
      } else {
        await FormService.likeResponseId(dataToSend);
      }
      fetchCommunityData();
    } catch (error) {
      console.error("Error handling like:");
    }
  };

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
              <div className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                <div className="flex items-center mr-6 mb-2">
                  <Tag className="w-4 h-4" />
                  <span className="ml-3">{item.form.slug}</span>
                </div>
              </div>
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
              <div className="flex items-center mr-4 mb-2">
                <div className="heart-bg">
                  <div
                    className={`heart-icon ${userHasLiked ? "liked" : ""}`}
                    onClick={() => handleLikePost(item)}
                  ></div>
                </div>
                <span className="pl-3">{item.likes.length}</span>

              </div>
              
              <div className="flex items-center mb-2">
                <BookmarkIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
