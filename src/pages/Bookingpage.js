import Header from "../components/Header";
import BookingForm from "../components/booking-Form/bookingForm";

const Bookingpage = () => {
  return (
    <>
      <Header
        headline="Book Kevin"
        tagline="World-famous balloon twisting"
        display= "none"
      />
      <BookingForm />
    </>
  );
};

export default Bookingpage;
