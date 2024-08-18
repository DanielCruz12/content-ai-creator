"use client";
import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Formik, Form, Field } from "formik";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MagicWandIcon } from "@radix-ui/react-icons";
import { Loader } from "lucide-react";
import { FormComponentProps, FormField } from "@/src/types";

export const FormComponent: React.FC<FormComponentProps> = ({
  selectedTemplate,
  generateAIContent,
  loading,
}) => {
  if (!selectedTemplate) {
    return <div>Template not found</div>;
  }
  return (
    <div className="">
      <Card className="w-full border">
        <CardHeader>
          <div className="w-full">
            <div className="flex flex-col">
              <CardTitle className=" text-primary">
                {selectedTemplate.name}
                <Badge className=" mx-3 md:px-3 md:mx-3 mb-1">
                  {selectedTemplate.category}
                </Badge>
              </CardTitle>
              <CardDescription className="dark:text-[#636363] pt-2">
                {selectedTemplate.description}
              </CardDescription>
              <CardDescription className="text-primary pt-2">
                {selectedTemplate.aiPrompt}
              </CardDescription>
            </div>
            <div className="flex py-3">
              <Formik
                initialValues={selectedTemplate.form.reduce(
                  (acc: { [key: string]: string }, field: FormField) => {
                    acc[field.name] = "";
                    return acc;
                  },
                  {}
                )}
                onSubmit={generateAIContent}
                className="w-full"
              >
                {({ setFieldValue }) => (
                  <Form className="flex w-full flex-col md:flex-col gap-4">
                    {selectedTemplate.form.map((field) => (
                      <Field
                        key={field.name}
                        name={field.name}
                        onChange={(
                          e: React.ChangeEvent<
                            HTMLInputElement | HTMLTextAreaElement
                          >
                        ) => {
                          setFieldValue(field.name, e.target.value);
                        }}
                        type={field.field}
                        placeholder={field.label}
                        as={Textarea}
                        className="mb-2"
                      />
                    ))}
                    <Button
                      disabled={loading}
                      className="w-full md:w-28"
                      type="submit"
                    >
                      {loading && <Loader />}
                      Generate <MagicWandIcon />
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
