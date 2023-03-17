import logoGlassdoor from "../app/assets/img/logo-glassdoor.png";
import logoJasonMomoa from "../app/assets/img/logo-jason-momoa.png";
import logoPlayboy from "../app/assets/img/logo-playboy.png";
import logoJenniferGarner from "../app/assets/img/logo-jennifer-garner.png";
import logoGoogle from "../app/assets/img/logo-google.png";
import logoNrdc from "../app/assets/img/logo-nrdc.png";
import logoBruceWillis from "../app/assets/img/logo-bruce-willis.png";
import logoNomadCruise from "../app/assets/img/logo-nomad-cruise.png";
import logoCoworkingBansko from "../app/assets/img/logo-coworking-bansko.png";
import logoBenAffleck from "../app/assets/img/logo-ben-affleck.png";
import logoNomadSafari from "../app/assets/img/logo-nomad-safari.png";
import logoNomadbase from "../app/assets/img/logo-nomadbase.png";
import "./componentcss/scrollinggallery.css";


function ScrollingLogos() {
  return (
    <>
      <div className="row text-center">
        <h4 >
          If these folks enjoyed Kevin's Balloons, so will you!
        </h4>
      </div>
        <div className="scrolling-gallery-container">
          <div className="scrolling-marquee">
            <img src={logoGlassdoor} alt="" className="initiate-marquee" />
            <img src={logoJasonMomoa} alt="" />
            <img src={logoPlayboy} alt="" />
            <img src={logoJenniferGarner} alt="" />
            <img src={logoGoogle} alt="" />
            <img src={logoNrdc} alt="" />
            <img src={logoBruceWillis} alt="" />
            <img src={logoNomadCruise} alt="" />
            <img src={logoCoworkingBansko} alt="" />
            <img src={logoBenAffleck} alt="" />
            <img src={logoNomadSafari} alt="" />
            <img src={logoNomadbase} alt="" />

            <img src={logoGlassdoor} alt="" />
            <img src={logoJasonMomoa} alt="" />
            <img src={logoPlayboy} alt="" />
            <img src={logoJenniferGarner} alt="" />
            <img src={logoGoogle} alt="" />
            <img src={logoNrdc} alt="" />
            <img src={logoBruceWillis} alt="" />
            <img src={logoNomadCruise} alt="" />
            <img src={logoCoworkingBansko} alt="" />
            <img src={logoBenAffleck} alt="" />
            <img src={logoNomadSafari} alt="" />
            <img src={logoNomadbase} alt="" />
          </div>
        </div>
    </>
  );
}

export default ScrollingLogos;
