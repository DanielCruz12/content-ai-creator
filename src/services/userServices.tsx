import HttpClient from "../utils/httpClient";

const getAllUsers = async () => {
  return HttpClient(`/api/v1/users`).then((res) => {
    return res.data;
  });
};

const UserService = {
  getAllUsers,
};

export default UserService;
