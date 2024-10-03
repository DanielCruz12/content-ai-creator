import { useState, useEffect } from "react";
import FormService from "@/src/services/formServices";
import type { Template } from "@/src/types";

const useGetForms = () => {
  const [data, setData] = useState<Template[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getForms = async () => {
    try {
      const res = await FormService.getFormsAi();
      setData(res);
      localStorage.setItem("forms", JSON.stringify(res));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getForms();
  }, []);

  return { data, loading };
};

export default useGetForms;
