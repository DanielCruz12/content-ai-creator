"use client";
import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Formik, Form, Field } from "formik";
import { Badge } from "@/components/ui/badge";
interface Tprops {
  selectedTemplate: any;
}

export const FormComponent: React.FC<Tprops> = ({ selectedTemplate }) => {
  if (!selectedTemplate) {
    return <div>Template not found</div>;
  }
  return (
    <div className="max-w-6xl w-full pt-10">
      <Card
        className="w-full bg-gradient-to-r
    from-[#272828]
    via-[#444444]
    to-[#000000] background-animate hover:border-gray-700 border	"
      >
        <CardHeader>
          <div className="w-full">
            <div className="flex flex-col">
              <CardTitle className=" text-white">
                {selectedTemplate.name}
                <Badge className="px-3 mx-3 mb-1">
                  {selectedTemplate.category}
                </Badge>
              </CardTitle>
              <CardDescription className="text-gray-300 pt-2">
                {selectedTemplate.desc}
              </CardDescription>
            </div>
            <div className="flex py-3">
              <Formik
                initialValues={{ value: "" }}
                onSubmit={() => {}}
                className="w-full"
              >
                {({ setFieldValue }) => (
                  <Form className="flex w-full flex-col md:flex-row gap-4">
                    {selectedTemplate.form.map((field: any) => (
                      <Field
                        key={field.name}
                        name={field.name}
                        onChange={(e: any) => {
                          /* setFieldValue(field.name, e.target.value); */
                          console.log(e, setFieldValue);
                        }}
                        type={field.type}
                        placeholder={field.label}
                        as={field.type === "textarea" ? Textarea : Input}
                        className="mb-2"
                      />
                    ))}
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
