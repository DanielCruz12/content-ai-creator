import * as Yup from "yup";
const createFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  description: Yup.string()
    .required("Description is required")
    .min(7, "Description must be at least 7 characters long"),
  category: Yup.string()
    .required("Category is required")
    .min(3, "Category must be at least 3 characters long"),
  icon: Yup.string()
    .required("Icon is required")
    .url("Icon must be a valid URL"),
  slug: Yup.string().required("Slug is required"),
  aiPrompt: Yup.string()
    .required("AI Prompt is required")
    .min(10, "AI Prompt must be at least 10 characters long"),
  label: Yup.string()
    .required("Label is required")
    .min(3, "Label must be at least 3 characters long"),
  placeholder: Yup.string()
    .required("Placeholder is required")
    .min(3, "Placeholder must be at least 3 characters long"),
});

export const formSchema = {
  createFormSchema,
};
