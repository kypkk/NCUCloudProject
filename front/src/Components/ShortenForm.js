import React, { FormEvent, useRef, useState } from "react";

const Shortenform = ({ url }) => {
  return (
    <div className="w-full m-3 flex justify-center align-center">
      <form>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type in a url😁"
          className="py-2 w-96 p-2 border-collapse border border-blue-300 rounded-xl text-black m-4"
        />
        <button
          type="submit"
          className="m-4 px-4 py-2 font-bold bg-blue-500 rounded-xl text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Shortenform;
