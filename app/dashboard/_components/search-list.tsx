"use client";
import * as React from "react";
import * as Yup from "yup";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Formik, Form, Field } from "formik";

const SearchSchema = Yup.object().shape({
  value: Yup.string().required("Required"),
});

export function SearchList({ setInputValueSearch }: any) {
  return (
    <Card
      className="w-full bg-gradient-to-r
    from-[#272828]
    via-[#444444]
    to-[#000000] background-animate hover:border-gray-700 border	"
    >
      <CardHeader>
        <div className="w-full">
          <div className="flex flex-col">
            <CardTitle className=" text-white">Search Ai Tool</CardTitle>
            <CardDescription className="text-gray-300 pt-1">
              What do you want to generate today?
            </CardDescription>
          </div>
          <div className="flex py-3">
            <Formik
              initialValues={{ value: "" }}
              validationSchema={SearchSchema}
              onSubmit={() => {}}
              className="w-full"
            >
              {({ setFieldValue }) => (
                <Form className="w-full">
                  <Field
                    name="value"
                    onChange={(e: any) => {
                      setFieldValue("value", e.target.value);
                      setInputValueSearch(e.target.value);
                    }}
                    type="text"
                    placeholder="Generate post ideas..."
                    as={Input}
                    className="mb-2"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
