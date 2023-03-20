import { useNavigate } from "react-router-dom";
import CyclicGallery from "./CyclicGallery";
import './componentcss/header.css'

const Header = (props) => {
  const { headline, tagline, display } = props;

  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/");
  };

  return (
      <div className=" header ">
        <div className="overlay">
          <h1 className="start-headline">{headline}</h1>
          <p>{tagline}</p>
          <div
            className="  header-btn-container"
            style={{ display: { display } }}
          >
            
            <button
              className="booking-btn"
              onClick={handleBook}
            >
              Book Kevin
            </button>
          </div>
        </div>
    <CyclicGallery  />
      </div>
  );
};

export default Header;
