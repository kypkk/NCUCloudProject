  import React, { useEffect } from "react";
  import axios from "axios";

  const Bekaidei = () => {
    let str = window.location.pathname;
    str = process.env.REACT_APP_SERVER + str;
    useEffect(() => {
      axios.post(str).then((response) => {
        window.location.replace(response.data.URL); /* this redirects the shortenurl */
      });
    }, []);

    return (
      <div className="flex justify-center align-center">
        <h1 className=" mt-80 text-4xl text-gray-700">loading...</h1>
      </div>
    );
  };

  export default Bekaidei;
