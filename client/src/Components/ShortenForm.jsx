import React, { useRef } from "react";
import axios from "axios";
import IsValidUrl from "./IsValidUrl";

const Shortenform = ({ url, seturl }) => {
  const inputRef = useRef();

  const shortenbutton = async (e) => {
    e.preventDefault("");

    if (
      inputRef.current.value.toString().length > 0 &&
      IsValidUrl(inputRef.current.value.toString())
    ) {
      seturl("");
      await axios
        .post(process.env.REACT_APP_SERVER + "/shorten", {
          URL: inputRef.current.value.toString(),
        })
        .then((response) => {
          seturl(process.env.REACT_APP_CLIENT + response.data.URL);
        });
    } else {
      seturl("輸入不能為空，且必須是合法網址");
    }

    inputRef.current.value = "";
  };

  return (
    <div className="m-3 flex justify-center align-center flex-col">
      <form className="flex justify-center align-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Type in a url😁"
          className="py-2 w-72 p-2 border-collapse border border-blue-300 rounded-xl text-black m-4"
          ref={inputRef}
        />
        <button
          onClick={shortenbutton}
          type="submit"
          className="m-4 px-4 py-2 font-bold bg-blue-500 rounded-xl text-white lg:w-28 sm:w-20"
        >
          一鍵縮短
        </button>
      </form>
      <div className="flex justify-center align-center">
        <h3 className=" w-72 mx-5">{url}</h3>
        <p className="w-12 mx-5"></p>
      </div>
    </div>
  );
};

export default Shortenform;
