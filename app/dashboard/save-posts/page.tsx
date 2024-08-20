"use client";

import moment from "moment";
import React, { useEffect, useState } from "react";
import FormService from "@/src/services/formServices";
import type { FormResponse } from "@/src/types";
import { BookmarkIcon, Tag } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const SaveResults = () => {
  const [communityData, setCommunityData] = useState<FormResponse[]>([]);
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleExpansion = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const user = useUser();
  const userLoggedId = user?.user?.primaryEmailAddress?.id ?? "";
  const savedPosts = communityData.filter((item) =>
    item.savedResponses.some((bookmark) => bookmark.userId === userLoggedId)
  );

  const handleLikePost = async (postId: string, userHasLiked: boolean) => {
    // TODO: Implement like post functionality
    const dataToSend = {
      userId: userLoggedId,
      formResponseId: postId,
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

  const handleSavePost = async (postId: string, userHasSaved: boolean) => {
    // TODO: Implement save post functionality
    const dataToSend = {
      userId: userLoggedId,
      formResponseId: postId,
    };
    try {
      if (userHasSaved) {
        await FormService.unSaveResponseId(dataToSend);
      } else {
        await FormService.saveResponseId(dataToSend);
      }
      fetchCommunityData();
    } catch (error) {
      console.error("Error handling save:");
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
        {savedPosts.length > 0 ? (
          savedPosts.map((item) => {
            // TODO check if formResponse has likes already
            const userHasLiked = item.likes.some(
              (like: { userId: string }) => like.userId === userLoggedId
            );

            // TODO check if formResponse has Saves already
            const userHasSaved = item.savedResponses.some(
              (bookmark: { userId: string }) => bookmark.userId === userLoggedId
            );

            const isExpanded = expandedItems[item.id] ?? false;

            return (
              <div
                key={item.id}
                className="w-full max-w-4xl p-4 mb-6 rounded-xl border "
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <Image
                      width={12}
                      height={12}
                      className="h-12 w-12 sm:h-11 sm:w-11 rounded-full"
                      alt="user-profile"
                      src={`https://picsum.photos/200/300?random=${item.user.id}`}
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
                  {item.form.aiPrompt}{" "}
                  <Link
                    href={`/dashboard/content/${item.form.slug}/${item.form.id}`}
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-900  rounded-lg hover:bg-gray-100  focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Try now!{" "}
                    <svg
                      className="w-3 h-3 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </small>

                <div
                  onClick={() => toggleExpansion(item.id)}
                  className="mt-2 p-4 dark:text-gray-300 rounded-2xl border border-gray-100 dark:border-gray-700"
                >
                  {isExpanded
                    ? item.responseData
                    : `${item.responseData.slice(0, 470)}...`}
                  <button className="dark:text-gray-200  hover:underline dark:hover:text-gray-100 dark:hover:text-bold px-1">
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
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
                        onClick={() => handleLikePost(item.id, userHasLiked)}
                      ></div>
                    </div>
                    <span className="pl-3">{item.likes.length}</span>
                  </div>

                  <div
                    onClick={() => handleSavePost(item.id, userHasSaved)}
                    className="flex items-center mb-2 cursor-pointer"
                  >
                    {userHasSaved ? (
                      <BookmarkFilledIcon className="w-6 h-6" />
                    ) : (
                      <BookmarkIcon className="w-6 h-6" />
                    )}
                  </div>

                  {/* <div className="flex items-center mb-2">
                  <TwitterShareButton
                    url={window.location.href}
                    title={item.form_fields_data}
                  >
                    <TwitterIcon className="w-6 h-6" />
                  </TwitterShareButton>
                </div> */}
                </div>
              </div>
            );
          })
        ) : (
          <p>No saved items</p>
        )}
      </div>
    </div>
  );
};

export default SaveResults;
