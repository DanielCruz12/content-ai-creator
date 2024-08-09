import HttpClient from "@/utils/httpClient";

const getFormsAi = async () => {
  return HttpClient(`/api/v1/forms`).then((res) => {
    return res.data;
  });
};

const saveResponseDataAi = async (dataToSend: any) => {
  return HttpClient(`/api/v1/formResponse`, dataToSend, "post").then((res) => {
    return res;
  });
};

const getHistoryByUserAi = async (userId: any) => {
  return HttpClient(`/api/v1/formResponse/${userId}`).then((res) => {
    return res;
  });
};

const getFormsCommunity = async () => {
  return HttpClient(`/api/v1/formResponse/community`).then((res) => {
    return res;
  });
};

const createForm = async (data: any) => {
  return HttpClient(`/api/v1/forms`, data, 'post').then((res) => {
    return res;
  });
};

const shareFormToCommunity = async (data: any) => {
  return HttpClient(`/api/v1/formResponse/share-community`, data, 'post').then((res) => {
    return res;
  });
};

const FormService = {
  getFormsAi,
  getHistoryByUserAi,
  saveResponseDataAi,
  getFormsCommunity,
  shareFormToCommunity,
  createForm
};

export default FormService;
