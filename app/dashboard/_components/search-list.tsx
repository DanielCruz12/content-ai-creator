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

export function SearchList() {
  const [inputValueSearch, setInputValueSearch] = React.useState("");
  console.log(inputValueSearch);
  return (
    <Card
      className="w-full bg-gradient-to-r
    from-[#00292d]
    via-[#5e5e5e]
    to-[#000000] background-animate hover:cursor-pointer hover:border-slate-500 border	"
    >
      <CardHeader>
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="flex flex-col">
            <CardTitle className=" text-white">Create project</CardTitle>
            <CardDescription className="text-gray-300">
              Deploy your new project in one-click.
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
                    placeholder="Search..."
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
