/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import FormService from "@/services/formServices";
import { TimeLine } from "../_components/time-line";
import { useUser } from "@clerk/nextjs";

const History = () => {
  const { user } = useUser();
  const userId = user?.primaryEmailAddress?.id;
  const [history, setHistory] = useState<any[]>([]);

  const getHistoryByUser = async () => {
    try {
      const res = await FormService.getHistoryByUserAi(userId);
      setHistory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistoryByUser();
  }, []);

  return <TimeLine history={history}/>;
};

export default History;
