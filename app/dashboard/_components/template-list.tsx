import React from "react";
import { CardDemo } from "./card-list";
import { CardWithForm } from "./card";

export const TemplateList = () => {
  return (
    <div className="grid gap-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 py-6">
        <CardWithForm />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </div>
    </div>
  );
};
