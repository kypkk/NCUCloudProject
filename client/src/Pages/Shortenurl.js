import React from "react";
import Form from "../Components/ShortenForm.js";

const Shortenurl = ({ url }) => {
  return (
    <div>
      <Form url={url} />
    </div>
  );
};

export default Shortenurl;
