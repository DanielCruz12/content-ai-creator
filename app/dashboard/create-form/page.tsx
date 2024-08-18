"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import FormService from "@/src/services/formServices";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { formSchema } from "@/src/schemas/formSchema";
import type { CreateFormData, FormField, Tool } from "@/src/types";

const TemplateForm = () => {
  const user = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();

  const initialValues: Tool = {
    name: "",
    description: "",
    category: "",
    icon: "",
    slug: "",
    aiPrompt: "",
    label: "",
    placeholder: "",
  };
  const formFields: FormField[] = [
    { name: "name", label: "Name", placeholder: "Your template name" },
    {
      name: "description",
      label: "Description",
      placeholder: "Your template description",
    },
    {
      name: "category",
      label: "Category",
      placeholder: "Your template category",
    },
    { name: "icon", label: "Icon", placeholder: "Icon URL or name" },
    { name: "slug", label: "Slug", placeholder: "URL-friendly identifier" },
    {
      name: "aiPrompt",
      label: "AI Prompt",
      placeholder: "Prompt for AI generation",
    },
    { name: "label", label: "Label", placeholder: "Field label" },
    {
      name: "placeholder",
      label: "Placeholder",
      placeholder: "Input placeholder",
    },
  ];

  const handleSubmit = async (values: any) => {
    //* TODO: Save template to the database
    if (!values && !user) return;

    const valuesToSend: CreateFormData = {
      userId: user?.user?.primaryEmailAddress?.id ?? "",
      name: values.name,
      description: values.description,
      category: values.category,
      icon: values.icon,
      slug: values.slug,
      aiPrompt: values.aiPrompt,
      fields: [
        {
          label: values.label,
          fieldType: "text",
          name: values.name,
          required: true,
          placeholder: values.placeholder,
        },
      ],
    };

    try {
      setLoading(true);
      await FormService.createForm(valuesToSend);
      toast.success("Form created successfully!", {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
      navigate.push("/dashboard");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to create form-template", {
        position: "bottom-center",
        style: { backgroundColor: "#e7e6e6" },
      });
      setLoading(false);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      {loading && (
        <div className="absolute h-screen inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <BarLoader color="#ffffff" width={300} />
        </div>
      )}
      <Alert className="dark:bg-slate-700">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can create your own AI form template to share with the community.
        </AlertDescription>
      </Alert>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema.createFormSchema}
        className="w-full"
      >
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-2 py-2 gap-4 px-2">
            {formFields.map((field, id) => (
              <div key={id}>
                <label className="block text-gray-600 dark:text-gray-300 text-sm font-medium mb-2">
                  {field.name}
                </label>
                <Field
                  key={field.name}
                  name={field.name}
                  type={"text"}
                  as={Input}
                  placeholder={field.placeholder}
                  className="mb-2"
                />
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-600"
                />
              </div>
            ))}
          </div>

          <Button className="w-full md:w-28" type="submit">
            Create
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default TemplateForm;
