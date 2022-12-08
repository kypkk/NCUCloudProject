import React from "react";
import RedirComponent from "../Components/RedirComponent";
const Bekaidei = () => {
  console.log(window.location.pathname);
  return (
    <div>
      <RedirComponent />
    </div>
  );
};

export default Bekaidei;
