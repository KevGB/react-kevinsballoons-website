import React from "react";
import img1 from '../app/assets/img/centerpiece.png'
import img2 from '../app/assets/img/arches.png'
import img3 from '../app/assets/img/columns.png'
import img4 from '../app/assets/img/garlands.png'
import './componentcss/cyclicgallery.css'

const CyclicGallery = () => {


  return (
    <div class="service-display position-absolute">
                <img class="first imglink" src={img1} alt="Kevin can make balloon arches"/>
                <img class="second imglink" src={img2} alt="Kevin can make balloon garlands"/>
                <img class="third imglink" src={img3} alt="Kevin can decorated Themed Parties"/>
                <img class="fourth imglink" src={img4}
                alt="Kevin is the top balloon twister in San Francisco"/>
        </div>
  );
};

export default CyclicGallery;
