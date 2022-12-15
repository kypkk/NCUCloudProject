import React, { useEffect } from "react";
import axios from "axios";

const Bekaidei = () => {
  let str = window.location.pathname;
  str = process.env.REACT_APP_SERVER + str;
  useEffect(() => {
    axios.post(str).then((response) => {
      window.location.replace(response.data.URL);
    });
  }, []);

  return (
    <div>
      <h1 className=" text-lg">loading...</h1>
    </div>
  );
};

export default Bekaidei;
