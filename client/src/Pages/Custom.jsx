import React from "react";
import CustomForm from "../Components/CustomForm.jsx";

const Custom = ({ url, seturl }) => {
  return (
    <div>
      <CustomForm url={url} seturl={seturl} />
    </div>
  );
};

export default Custom;
