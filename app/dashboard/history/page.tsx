"use client";
import React, { useEffect, useState } from "react";
import { TimeLine } from "../_components/time-line";
import FormService from "@/services/formServices";
import { useUser } from "@clerk/nextjs";

const History = () => {
  const [data, setData] = useState<any>([]);
  const user = useUser();
  const userId = user.user?.primaryEmailAddress?.id;

  const getHistoryByUser = async () => {
    try {
      const res = await FormService.getHistoryByUserAi(userId);
      setData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  useEffect(() => {
    getHistoryByUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <TimeLine />;
};

export default History;
