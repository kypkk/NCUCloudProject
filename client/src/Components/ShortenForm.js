import React, { useState } from "react";
import axios from "axios";

const Shortenform = ({ url, seturl }) => {
  const shortenbutton = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/shorten", {
        URL: "https://www.google.com",
      })
      .then((response) => {
        seturl(response.data.URL);
        console.log(url);
      });
  };

  return (
    <div className="m-3 flex justify-center align-center flex-col">
      <form className="flex justify-center align-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Type in a url😁"
          className="py-2 w-96 p-2 border-collapse border border-blue-300 rounded-xl text-black m-4"
        />
        <button
          onClick={shortenbutton}
          type="submit"
          className="m-4 px-4 py-2 font-bold bg-blue-500 rounded-xl text-white"
        >
          Submit
        </button>
      </form>
      <h3 className="flex pl-40 justify-start align-center">fdfdsf</h3>
    </div>
  );
};

export default Shortenform;
