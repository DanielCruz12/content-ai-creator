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

const getSavedPostsByUserId = async (userId: string) => {
  return HttpClient(`/api/v1/formResponse/saved/${userId}`).then((res) => {
    return res.data;
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

const deleteHistoryResponseById = async (
  formId: string
): Promise<FormResponse> => {
  return HttpClient(`/api/v1/formResponse/${formId}`, {}, "delete").then(
    (res) => {
      return res.data as FormResponse;
    }
  );
};

const likeResponseId = async (data: any) => {
  return HttpClient(`api/v1/formResponse/like`, data, "post").then((res) => {
    return res.data as FormResponse;
  });
};

const unLikeResponseId = async (data: any) => {
  return HttpClient(`api/v1/formResponse/unlike`, data, "post").then((res) => {
    return res.data as FormResponse;
  });
};
const saveResponseId = async (data: any) => {
  return HttpClient(`api/v1/formResponse/save`, data, "post").then((res) => {
    return res.data as FormResponse;
  });
};

const unSaveResponseId = async (data: any) => {
  return HttpClient(`api/v1/formResponse/unsave`, data, "post").then((res) => {
    return res.data as FormResponse;
  });
};

const saveFileS3 = async (data: any) => {
  return HttpClient(`api/v1/file/upload`, data, "post").then((res) => {
    return res as any
  });
};

const FormService = {
  getFormsAi,
  createForm,
  deleteHistoryResponseById,
  getHistoryByUserAi,
  saveResponseDataAi,
  getFormsCommunity,
  shareFormToCommunity,
  likeResponseId,
  unLikeResponseId,
  saveResponseId,
  saveFileS3,
  unSaveResponseId,
  getSavedPostsByUserId,
};

export default FormService;
