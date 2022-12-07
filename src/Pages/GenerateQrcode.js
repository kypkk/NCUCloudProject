import React from "react";
import QRForm from "../Components/QRForm.js";

const GenerateQrcode = ({ url }) => {
  return (
    <div>
      <QRForm url={url} />
    </div>
  );
};

export default GenerateQrcode;
