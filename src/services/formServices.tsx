import {
  CreateFormData,
  Form,
  FormResponse,
  SaveResponseData,
  ShareFormData,
  Template,
} from "../types";
import HttpClient from "../utils/httpClient";

const getFormsAi = async (): Promise<Template[]> => {
  return HttpClient(`/api/v1/forms`).then((res) => {
    return res.data as Template[];
  });
};

const saveResponseDataAi = async (
  dataToSend: SaveResponseData
): Promise<FormResponse> => {
  return HttpClient(`/api/v1/formResponse`, dataToSend, "post").then((res) => {
    return res.data as FormResponse;
  });
};

const getHistoryByUserAi = async (
  userId: string | undefined
): Promise<FormResponse[]> => {
  return HttpClient(`/api/v1/formResponse/${userId}`).then((res) => {
    return res.data as FormResponse[];
  });
};

const getFormsCommunity = async (): Promise<FormResponse[]> => {
  return HttpClient(`/api/v1/formResponse/community`).then((res) => {
    return res.data as FormResponse[];
  });
};

const createForm = async (data: CreateFormData): Promise<Form> => {
  return HttpClient(`/api/v1/forms`, data, "post").then((res) => {
    return res.data as Form;
  });
};

const shareFormToCommunity = async (
  data: ShareFormData
): Promise<FormResponse> => {
  return HttpClient(`/api/v1/formResponse/share-community`, data, "post").then(
    (res) => {
      return res.data as FormResponse;
    }
  );
};

const FormService = {
  getFormsAi,
  getHistoryByUserAi,
  saveResponseDataAi,
  getFormsCommunity,
  shareFormToCommunity,
  createForm,
};

export default FormService;
