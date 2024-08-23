import { IconProps } from "@radix-ui/react-icons/dist/types";

/* eslint-disable no-unused-vars */
export type Tool = {
  name: string;
  description: string;
  category: string;
  slug: string;
  aiPrompt: string;
  label?: string;
  placeholder?: string;
  id?: string;
  icon: any;
};

export type CardDemoProps = {
  className?: string;
  tool: Tool;
};

export type TemplateListProps = {
  templates: Tool[];
};

export type SaveResponseData = {
  formId: string;
  share_status: boolean;
  userId?: string;
  responseData: string;
  form_fields_data: string;
};

export type CreateFormData = {
  name: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  userId: string;
  fields: FormField[];
  aiPrompt: string;
};

export type ShareFormData = {
  formId: string;
  share_status: boolean;
  userId?: string;
};

export type Form = {
  id: string;
  userId: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
};

export type Likes = {
  id: string;
  userId: string;
};

export type Bookmark = {
  id: string;
  userId: string;
};

export type BaseResponse = {
  id: string;
  formId: string;
  userId: string;
  createdAt: string;
  responseData: string;
  form_fields_data: string;
  share_status: boolean;
  isRecommended?: boolean;
  isApproved?: boolean;
};

export type FormResponse = BaseResponse & {
  form: Form;
  user: User;
  likes: Likes[];
  savedResponses: Bookmark[];
};

export type FormField = {
  name: string;
  label: string;
  placeholder?: string;
  field?: string;
  fieldType?: "text" | "textarea";
  required?: boolean;
};

export type Template = {
  name: string;
  description: string;
  category: string;
  slug: string;
  aiPrompt: string;
  id: string;
  isRecommended?: boolean;
  isApproved?: boolean;
  icon: string;
  form: FormField[];
};

export type FormComponentProps = {
  selectedTemplate?: Template;
  generateAIContent: (values: { [key: string]: string }) => void;
  loading: boolean;
};

type HistoryItem = {
  id: string;
  createdAt: string;
  share_status: boolean;
  responseData: string;
  form_fields_data: string;
  form: Form;
};

export type TimeLineTypes = {
  history: HistoryItem[];
  shareForm: (formId: string, currentStatus: boolean) => Promise<void>;
  deleteForm: (formId: string) => Promise<void>;
};

export type TimeLineCardProps = {
  date: string;
  title: string;
  slug: string;
  category?: string;
  svgIcon?: string;
  description: string;
  status: boolean;
  id: string;
  shareForm: (formId: string, currentStatus: boolean) => Promise<void>;
  deleteForm: (formId: string) => Promise<void>;
};

export type SidebarProps = {
  label: string;
  icon: React.ForwardRefExoticComponent<IconProps>;
  href: string;
};
