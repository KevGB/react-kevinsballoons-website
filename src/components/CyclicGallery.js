import React from "react";
import img1 from "../app/assets/img/centerpiece.png";
import img2 from "../app/assets/img/arches.png";
import img3 from "../app/assets/img/columns.png";
import img4 from "../app/assets/img/garlands.png";
import "./componentcss/cyclicgallery.css";
import { useNavigate } from "react-router-dom";

const CyclicGallery = () => {
  const navigate = useNavigate();

  const handleimg1 = () => {
    navigate("/centerpieces");
  };

  const handleimg2 = () => {
    navigate("/arches");
  };

  const handleimg3 = () => {
    navigate("/columns");
  };

  const handleimg4 = () => {
    navigate("/garlands");
  };

  return (
    <div class="service-display position-absolute">
      <img
        class="first imglink"
        src={img1}
        alt="Kevin can make balloon arches"
        onClick={handleimg1}
      />
      <img
        class="second imglink"
        src={img2}
        alt="Kevin can make balloon garlands"
        onClick={handleimg2}
      />
      <img
        class="third imglink"
        src={img3}
        alt="Kevin can decorated Themed Parties"
        onClick={handleimg3}
      />
      <img
        class="fourth imglink"
        src={img4}
        alt="Kevin is the top balloon twister in San Francisco"
        onClick={handleimg4}
      />
    </div>
  );
};

export default CyclicGallery;
