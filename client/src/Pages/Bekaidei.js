import React, { useEffect } from "react";
import axios from "axios";

const Bekaidei = () => {
  let str = window.location.pathname;
  str = "http://localhost:8080" + str;
  useEffect(() => {
    axios.post(str).then((response) => {
      window.location.replace(response.data.URL);
    });
  }, []);

  return <div></div>;
};

export default Bekaidei;
