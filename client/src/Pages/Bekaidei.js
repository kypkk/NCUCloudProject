import React, { useEffect, useState } from "react";
import axios from "axios";

const Bekaidei = () => {
  const [url, seturl] = useState();
  let str = window.location.pathname;
  str = str.replace("/Bekaidei", "");
  str = "http://localhost:8080" + str;
  useEffect(() => {
    axios
      .post(str)
      .then((response) => {
        seturl(response.data.URL);
      })
      .then(window.location.replace(url));
  });

  return <div></div>;
};

export default Bekaidei;
