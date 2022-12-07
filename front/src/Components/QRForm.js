import React, { useRef, useState } from "react";
import QRCode from "qrcode";

const QRform = ({ url }) => {
  const URLRef = useRef(null);
  const [qrcode, setqrcode] = useState("");
  const handleGenQR = (e) => {
    e.preventDefault();
    const urlval = URLRef.current.value.toString();
    URLRef.current.value = "";
    QRCode.toDataURL(urlval, { width: 800, margin: 1 }, (err, urlval) => {
      if (err) console.log(err);
      console.log(urlval);
      setqrcode(urlval);
    });
    console.log(qrcode);
  };

  return (
    <div className=" m-3 flex justify-center align-center flex-col">
      <form className="w-full flex justify-center align-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Type in a url😁"
          className="py-2 w-96 p-2 border-collapse border border-blue-300 rounded-xl text-black m-4"
          ref={URLRef}
        />
        <button
          type="submit"
          className="m-4 px-4 py-2 font-bold bg-blue-500 rounded-xl text-white"
          onClick={handleGenQR}
        >
          Generate
        </button>
      </form>
      {qrcode && (
        <div className="w-full flex-col justify-center align-center">
          <div className="w-full flex justify-center align-center my-4">
            <img src={qrcode} className=" h-48 w-48 " />
          </div>
          <div className="w-full flex justify-center align-center">
            <a
              href={qrcode}
              download="download.png"
              className="bg-blue-500 px-4 py-2 my-4 text-white rounded-xl"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRform;
