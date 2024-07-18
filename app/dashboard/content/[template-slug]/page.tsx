import React from "react";
import { Form } from "../../_components/form";
import { Output } from "../../_components/output";

const CreateNewContent = () => {
  return (
    <div className="flex flex-col justify-center items-center rounded-sm">
      <Form />
      <Output />
    </div>
  );
};

export default CreateNewContent;
