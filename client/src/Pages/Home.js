import React from "react";
import "../Styles/Home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import Image1 from "../Images/蘇韋中.jpg";
import Image2 from "../Images/彭康彧.jpg";
import Image3 from "../Images/洪聖凱.jpg";
import Image4 from "../Images/張凱晴.jpg";

const Home = () => {
  return (
    <div id="model3" className="mt-auto">
      <div className=""></div>
      <div className="members flex align-center justify-center flex-col lg:flex-row">
        <section className="flex align-center justify-center flex-col md:flex-row ">
          <div className="member my-5 mx-12 md:m-5">
            <img width={200} height={200} src={Image1} className="my-4" />
            <div className="description">
              <h1 className=" text-3xl my-4">蘇韋中</h1>
              <h2 className=" text-lg my-4">組長</h2>
              <p className=" my-4">
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                dolor sit amet consectet.
              </p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
          <div className="member my-5 mx-12 md:m-5">
            <img width={200} height={200} src={Image2} className="my-4" />
            <div className="description">
              <h1 className=" text-3xl my-4">彭康彧</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p className=" my-4">
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                dolor sit amet consectet.
              </p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
        </section>
        <section className="flex align-center justify-center flex-col lg:flex-row">
          <div className="member my-5 mx-12 md:m-5">
            <img width={200} height={200} src={Image3} className="my-4" />
            <div className="description">
              <h1 className=" text-3xl my-4">洪聖凱</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p className=" my-4">
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                dolor sit amet consectet.
              </p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
          <div className="member my-5 mx-12 md:m-5">
            <img width={200} height={200} src={Image4} className="my-4" />
            <div className="description">
              <h1 className=" text-3xl my-4">張凱晴</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p className=" my-4">
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                dolor sit amet consectet.
              </p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
