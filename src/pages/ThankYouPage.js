import Header from "../components/Header";
import thankyou from "../app/assets/img/thankyou.jpg";
import "./pagescss/thankyou.css";

const ThankYouPage = () => {
  return (
    <>
      <Header
        headline={"Thank you for Booking!"}
        tagline={"San Francisco's Globally-Demanded Balloon Artist"}
        display='none'
      />
      <div className="page-content">
        <div className="thankyou-image-container">
          <img
            src={thankyou}
            style={{ width: "100%", maxWidth: "800px" }}
            alt="thank you message from Kevin's Balloons"
          />
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
