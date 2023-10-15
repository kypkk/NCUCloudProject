import React from "react";
import ShortenForm from "../Components/ShortenForm.jsx";

const Shortenurl = ({ url, seturl }) => {
  return (
    <div>
      <ShortenForm url={url} seturl={seturl} />
    </div>
  );
};

export default Shortenurl;
