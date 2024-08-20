"use client";
import React, { useEffect, useState } from "react";
import FormService from "@/src/services/formServices";
import { TimeLine } from "../_components/time-line";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import type { FormResponse, ShareFormData } from "@/src/types";

const History = () => {
  const { user } = useUser();
  const userId = user?.primaryEmailAddress?.id;
  const navigate = useRouter();
  const [history, setHistory] = useState<FormResponse[]>([]);

  const getHistoryByUser = async () => {
    if (!user) return;
    try {
      const res = await FormService.getHistoryByUserAi(userId);
      setHistory(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormShareToggle = async (
    formId: string,
    currentStatus: boolean
  ) => {
    const dataToSend: ShareFormData = {
      formId,
      share_status: !currentStatus,
      userId,
    };
    try {
      await FormService.shareFormToCommunity(dataToSend);
      toast.success(
        `Your template form was ${currentStatus ? "unshared" : "shared"} to the community successfully!`,
        {
          position: "bottom-center",
          style: { backgroundColor: "#e7e6e6" },
        }
      );
      if (!currentStatus) {
        navigate.push("/dashboard/community");
      }
      getHistoryByUser(); //* Refresh history after sharing/unsharing
    } catch (error) {
      toast.error(`Failed to ${currentStatus ? "unshare" : "share"}`, {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
    }
  };

  const deleteForm = async (formId: string) => {
    if (!formId) return;
    console.log(formId);

    try {
      await FormService.deleteHistoryResponseById(formId);
      toast.success(`Your history result form was deleted successfully!`, {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
      getHistoryByUser();
    } catch (error) {
      toast.error(`Failed to delete`, {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
    }
  };

  useEffect(() => {
    getHistoryByUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return (
    <>
      {history ? (
        <TimeLine
          deleteForm={deleteForm}
          shareForm={handleFormShareToggle}
          history={history}
        />
      ) : (
        <p>No items created.</p>
      )}
    </>
  );
};

export default History;
