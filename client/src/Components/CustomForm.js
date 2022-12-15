import React, { useRef } from "react";
import axios from "axios";

const Customform = ({ url, seturl }) => {
  const urlRef = useRef();
  const keywordRef = useRef();

  const CustomButton = async (e) => {
    e.preventDefault("");
    await axios
      .post(process.env.REACT_APP_SERVER + "/custom", {
        URL: urlRef.current.value.toString(),
        Keyword: keywordRef.current.value.toString(),
      })
      .then((response) => {
        seturl(process.env.REACT_APP_CLIENT + response.data.URL);
      });
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
            id=""
            placeholder="Type in a url😁"
            className="py-2 w-72 p-2 border-collapse border border-blue-300 rounded-xl text-black m-4"
            ref={urlRef}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Custom url Keyword"
            className="py-2 w-72 p-2 border-collapse border border-blue-300 rounded-xl text-black m-4"
            ref={keywordRef}
          />

          <button
            type="submit"
            className="m-4 px-4 py-2 font-bold bg-blue-500 rounded-xl text-white w-28 h-10"
            onClick={CustomButton}
          >
            產生網址
          </button>
        </div>
      </form>
      <div className="flex justify-center align-center">
        <h3 className=" w-48 mx-5">{url}</h3>
        <h1 className="w-12 mx-5"></h1>
      </div>
    </div>
  );
};

export default Customform;
