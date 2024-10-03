import { useState, useEffect } from "react";
import UserService from "../services/userServices";

const useGetUsers = () => {
  const [users, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getUsers = async () => {
    try {
      const res = await UserService.getAllUsers();
      setData(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, loading };
};

export default useGetUsers;
