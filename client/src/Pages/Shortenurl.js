import React from "react";
import Form from "../Components/ShortenForm.js";

const Shortenurl = ({ url, seturl }) => {
  return (
    <div>
      <Form url={url} seturl={seturl} />
    </div>
  );
};

export default Shortenurl;
