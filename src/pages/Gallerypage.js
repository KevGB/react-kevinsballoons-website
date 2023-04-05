import ScrollingGallery from "../components/ScrollingGallery";
import Header from "../components/Header";
import { Row } from "reactstrap";
import duck from "../app/assets/img/twisting-duck.jpg";
import owl from "../app/assets/img/kev-owl2-sm.jpg";
import frog from "../app/assets/img/twisting-frogballoon.jpg";
import champagne from "../app/assets/img/garland-champagne.jpg";
import bike from "../app/assets/img/twisting-bike.jpg";
import kite from "../app/assets/img/twisting-fish-kite.jpg";
import butterflycolumns from "../app/assets/img/column-butterfly-sq.jpg";
import mermaid from "../app/assets/img/theme-mermaid-sq.jpg";
import columns from "../app/assets/img/columns50.jpg";
import garland50 from "../app/assets/img/garland50.jpg";
import garland75 from "../app/assets/img/garland75.jpg";
import easter from "../app/assets/img/easter.jpg";
import santa from "../app/assets/img/santa.jpg";
import leprachaun from "../app/assets/img/leperchaun.jpg";
import "./pagescss/gallerypage.css";

const Gallerypage = () => {
  return (
    <>
      <Header
        headline="The Gallery"
        tagline="What can Kevin make?"
        display="none"
      />
      <ScrollingGallery />
      <div className="gallery-row">
        <img className="gallery-img" src={easter} alt="" />
        <img className="gallery-img" src={leprachaun} alt="" />
        <img className="gallery-img" src={santa} alt="" />
      </div>
      <div className="gallery-row">
        <img className="gallery-img" src={garland75} alt="" />
        <img className="gallery-img" src={champagne} alt="" />
        <img className="gallery-img" src={garland50} alt="" />
      </div>
      <div className="gallery-row">
        <img className="gallery-img" src={frog} alt="" />
        <img className="gallery-img" src={owl} alt="" />
        <img className="gallery-img" src={duck} alt="" />
      </div>
      <div className="gallery-row">
        <img className="gallery-img" src={columns} alt="" />
        <img className="gallery-img" src={butterflycolumns} alt="" />
        <img className="gallery-img" src={mermaid} alt="" />
      </div>
    </>
  );
};

export default Gallerypage;
