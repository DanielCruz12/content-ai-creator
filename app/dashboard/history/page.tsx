"use client";
import React, { useEffect, useState } from "react";
import FormService from "@/services/formServices";
import { TimeLine } from "../_components/time-line";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const History = () => {
  const { user } = useUser();
  const userId = user?.primaryEmailAddress?.id;
  const navigate = useRouter();
  const [history, setHistory] = useState<any[]>([]);

  const getHistoryByUser = async () => {
    if (!user) return;
    try {
      const res = await FormService.getHistoryByUserAi(userId);
      setHistory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const shareForm = async (values: any) => {
    const dataToSend = {
      formId: values,
      share_status: true,
      userId,
    };
    try {
      await FormService.shareFormToCommunity(dataToSend);
      toast.success(
        "Your template form was share to the community successfully!",
        {
          position: "bottom-center",
          style: { backgroundColor: "#e7e6e6" },
        }
      );
      navigate.push("/dashboard/community");
    } catch (error) {
      toast.error("Failed to share", {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
    }
  };

  useEffect(() => {
    getHistoryByUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <TimeLine shareForm={shareForm} history={history} />;
};

export default History;
