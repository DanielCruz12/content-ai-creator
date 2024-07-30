import HttpClient from "@/utils/httpClient";

const getFormsAi = async () => {
  return HttpClient(`/api/v1/forms`).then((res) => {
    return res.data;
  });
};

const FormService = {
  getFormsAi,
};

export default FormService;
