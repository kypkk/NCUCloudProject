import React from "react";
import mainimage from "../Images/short.png";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="flex align-center justify-start  m-4">
      <section className="lg:mx-24 mx-5">
        <div className=" my-10  md:invisible md:w-0">
          <img src={mainimage} />
        </div>
        <h1 className=" text-5xl md:mt-72 text-blue-500 mb-4 font-bold">
          BEKADEI
        </h1>
        <p className=" ">
          希望我們的服務
          <span className="text-blue-500 font-extrabold text-xl">
            「BekaDei 變更短」
          </span>
        </p>
        <p className="">
          能夠幫助到需要縮短網址、生成QRCode的您，使您的工作時間與品質變更短、變更好
        </p>
        <div className="mt-2">
          <button
            type="submit"
            className="my-4 mr-4 px-4 py-2 font-bold bg-blue-500 rounded-lg text-white w-30 h-10"
          >
            <a href="/shorten">縮短網址</a>
          </button>
          <button
            type="submit"
            className="my-4 mr-4 px-4 py-2 font-bold bg-blue-500 rounded-lg text-white w-30 h-10"
          >
            <a href="/genqr">QrCode</a>
          </button>
        </div>
      </section>
      <section>
        <div className=" w-0 mt-48 invisible lg:visible lg:w-96">
          <img src={mainimage} />
        </div>
      </section>
    </div>
  );
};

export default Home;
