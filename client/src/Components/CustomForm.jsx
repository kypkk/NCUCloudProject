import React, { useRef } from "react";
import axios from "axios";
import IsValidUrl from "./IsValidUrl";

const Customform = ({ url, seturl }) => {
  const urlRef = useRef();
  const keywordRef = useRef();

  const CustomButton = async (e) => {
    e.preventDefault("");
    if (
      urlRef.current.value.toString().length > 0 &&
      IsValidUrl(urlRef.current.value.toString()) &&
      keywordRef.current.value.toString().length > 0
    ) {
      seturl("");
      await axios
        .post(process.env.REACT_APP_SERVER + "/custom", {
          URL: urlRef.current.value.toString(),
          Keyword: keywordRef.current.value.toString(),
        })
        .then((response) => {
          if (response.data.ERR === "這個關鍵字已被使用，請換一個關鍵字") {
            seturl(response.data.ERR);
          } else {
            seturl(process.env.REACT_APP_CLIENT + response.data.URL);
          }
        });
    } else {
      seturl("輸入不能為空，且必須是合法網址");
    }

    urlRef.current.value = "";
    keywordRef.current.value = "";
  };

  return (
    <div className="m-3 flex justify-center align-center flex-col">
      <form className="flex justify-center align-center">
        <div className="flex justify-center align-center flex-col flex-shrink">
          <input
            type="text"
            name=""
            id="input-shortenURL"
            placeholder="Type in a url😁"
            className="py-2 w-72 p-2 border-collapse border border-blue-300 rounded-xl text-black m-4"
            ref={urlRef}
          />
          <input
            type="text"
            name=""
            id="keyword"
            placeholder="Custom url Keyword"
            className="py-2 w-72 p-2 border-collapse border border-blue-300 rounded-xl text-black m-4"
            ref={keywordRef}
          />

          <button
            type="submit"
            className="m-4 px-4 py-2 font-bold bg-blue-500 rounded-xl text-white w-28 h-10 submit"
            onClick={CustomButton}
          >
            產生網址
          </button>
        </div>
      </form>
      <div className="flex justify-center align-center">
        <h3 className=" w-48 mx-5 shortenUrl">{url}</h3>
        <p className="w-12 mx-5"></p>
      </div>
    </div>
  );
};

export default Customform;
