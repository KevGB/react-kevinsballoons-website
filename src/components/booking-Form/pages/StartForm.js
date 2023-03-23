import { Link } from "react-router-dom";
import "../bookingform.css";


const StartForm = () => {
  return (
    <div className="form">
      <h1 className="start-headline ">All right!</h1>
      <h3 className="subheader ">Let's book your event!</h3>
      <p className=" subsubheader">Just answer a few short questions</p>
      <Link className="nav-link" to="/bookingFormInfo">
        <button className="booking-btn" type="submit">
          Let's get this party started!
        </button>
      </Link>
      <div className="form-navigation">
        <Link to="/bookingFormStart">
          <i className="fa fa-solid fa-circle form-navigation-active" />
        </Link>

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />
      </div>
    </div>
  );
};

export default StartForm;
