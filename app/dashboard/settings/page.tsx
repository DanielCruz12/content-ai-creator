import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Settings = () => {
  return (
    <div className="flex justify-center items-center ">
      <UserProfile routing="hash" />
    </div>
  );
};

export default Settings;
