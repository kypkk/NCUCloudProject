import React from "react";
import Form from "../Components/ShortenForm.jsx";

const Shortenurl = ({ url, seturl }) => {
  return (
    <div>
      <Form url={url} seturl={seturl} />
    </div>
  );
};

export default Shortenurl;
