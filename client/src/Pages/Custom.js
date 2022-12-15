import React from "react";
import Form from "../Components/CustomForm.js";

const Custom = ({ url, seturl }) => {
  return (
    <div>
      <Form url={url} seturl={seturl} />
    </div>
  );
};

export default Custom;
