import React from "react";
import kevleaning from "../app/assets/img/kev-transparent-background.png";
import instagram from "../app/assets/img/instagram.png";
import video from "../app/assets/video/balloonCompilation.mp4";
import { useNavigate } from "react-router-dom";

import "./componentcss/videoplayer.css";

const VideoPlayer = () => {
  const navigate = useNavigate();
  const handleBook = () => {
    navigate("/book");
  };

  return (
    <div className=" row  phone-leaning-container ">
      <div className=" col  phone-container">
        <div className=" phone">
          <video className="video" width="214px" height="390px" controls>
            <source src={video} />
          </video>

          <div className="instagram-div ">
            <a
              className="text-white"
              href="https://instagram.com/kevins.balloons"
            >
              Follow on Instagram
              <img className="instagram-img" src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className=" col  leaning-img-container">
        <img className=" leaning-img" src={kevleaning} alt="" />
      </div>
      <button className="booking-btn" onClick={handleBook}>
        Book Kevin
      </button>{" "}
    </div>
  );
};

export default VideoPlayer;
