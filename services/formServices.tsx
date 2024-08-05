import HttpClient from "@/utils/httpClient";

const getFormsAi = async () => {
  return HttpClient(`/api/v1/forms`).then((res) => {
    return res.data;
  });
};

const saveResponseDataAi = async (dataToSend: any) => {
  console.log(dataToSend);
  return HttpClient(`/api/v1/formResponse`, dataToSend, "post").then((res) => {
    return res;
  });
};
const getHistoryByUserAi = async (userId: any) => {
  console.log(userId);
  return HttpClient(`/api/v1/history/${userId}`, "get").then((res) => {
    return res;
  });
};

const FormService = {
  getFormsAi,
  getHistoryByUserAi,
  saveResponseDataAi,
};

export default FormService;
