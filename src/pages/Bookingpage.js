import Header from "../components/Header";
import BookingForm from "../components/booking-Form/bookingForm";
import "./pagescss/bookingpage.css";
// import { Card, CardBody } from "reactstrap";

const Bookingpage = () => {
  return (
    <>
      <Header
        headline="Book Kevin"
        tagline="World-famous balloon twisting"
        display="none"
      />
      <div className="page-content">
        {/* <Card class="service-card" style={{width: '18rem', padding:0}}>
          <CardBody className="service-description ">
            A balloon twister is a fun, interactive addition to any
            celebration. With some fast
            and dazzling twists and turns, Kevin can transform a simple balloon
            into almost anything, from a sword to
            an intricate character. Captivate your
            guests, and let them to take a home a little piece of
            the celebration. 
          </CardBody>
        </Card> */}
        <BookingForm />
      </div>
    </>
  );
};

export default Bookingpage;
