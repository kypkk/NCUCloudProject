import React from "react";
import "../Styles/Home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import Image1 from "../Images/蘇韋中.jpg";
import Image2 from "../Images/彭康彧.jpg";
import Image3 from "../Images/洪聖凱.jpg";
import Image4 from "../Images/張凱晴.jpg";

const About = () => {
  return (
    <div id="model3" className="mt-auto">
      <div className=""></div>
      <div className="members flex align-center justify-center flex-col lg:flex-row">
        <section className="flex align-center justify-center flex-col md:flex-row ">
          <div className="member my-5 mx-12 md:m-5">
            <img
              width={200}
              height={200}
              src={Image1}
              alt=""
              className="my-4"
            />
            <div className="description">
              <h1 className=" text-3xl my-4">蘇韋中</h1>
              <h2 className=" text-lg my-4">組長</h2>
              <p>蘇韋中 aka 威廉</p>
              <p>來自國立中央大學數學系</p>
              <p>個性剛毅木訥</p>
              <p className=" mb-4 ">不苟言笑且熱愛大自然</p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
          <div className="member my-5 mx-12 md:m-5">
            <img
              width={200}
              height={200}
              src={Image2}
              alt=""
              className="my-4"
            />
            <div className="description">
              <h1 className=" text-3xl my-4">彭康彧</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p>彭康彧 aka 康康</p>
              <p>中央大學數學系 ➡️ 資工系</p>
              <p>霍華德 Like 👍🏿</p>
              <p className=" mb-4 ">雲端ㄌㄢ波萬☝🏼</p>
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
            <img
              width={200}
              height={200}
              src={Image3}
              alt=""
              className="my-4"
            />
            <div className="description">
              <h1 className=" text-3xl my-4">洪聖凱</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p>洪聖凱 aka 盛開</p>
              <p>中央大學通訊系</p>
              <p>公路車摔車一直沒修🥲</p>
              <p className=" mb-4 ">變把現在跟霍金聯名XD</p>
              <div className="social-media">
                <InstagramIcon />
                <FacebookIcon />
                <CallIcon />
              </div>
            </div>
          </div>
          <div className="member my-5 mx-12 md:m-5">
            <img
              width={200}
              height={200}
              src={Image4}
              alt=""
              className="my-4"
            />
            <div className="description">
              <h1 className=" text-3xl my-4">張凱晴</h1>
              <h2 className=" text-lg my-4">組員</h2>
              <p>張凱晴</p>
              <p>中央大學機械系 ➡️ 資工系</p>
              <p>人生一半的時間在睡覺</p>
              <p className=" mb-4 ">但還是睡不飽🥱</p>
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

export default About;
