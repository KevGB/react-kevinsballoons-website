import Header from "../components/Header";
import CenterpieceForm from "../components/CenterpieceForm";
import "./pagescss/bookingpage.css";
import { Card, CardBody, CardImg } from "reactstrap";
import bike from "../app/assets/img/kev-bike-sq.png";
import car from "../app/assets/img/ballooncar.png";
import owl from "../app/assets/img/kev-owl2.jpg";

const InfoCard = () => {
  return (
    <Card
      class="service-card  d-none d-sm-block"
      style={{ width: "20rem", padding: 0 }}
      className="d-none d-sm-block"

    >
      <CardBody>
        <p className="service-description ">
          Looking for a unique way to add excitement to your event decor?
          Kevin's stunning balloon centerpieces are the perfect solution!
          Whether you want full-sized vehicles or larger-than-life characters
          and animals, Kevin can create custom balloon designs that will leave
          your guests in awe! Go all in on your next theme party!
        </p>
      </CardBody>
      <CardImg src={bike} />
      <CardBody>
        Life-size and large-then-life centerpieces for any theme!{" "}
      </CardBody>
      <CardImg src={car} />
      <CardBody>
Want a full-sized car for your guests to take photos in? No problem!{" "}
      </CardBody>
      <CardImg src={owl} />
      <CardBody>Realistic and creative jubmo animals and characters!</CardBody>
    </Card>
  );
};

const Centerpiecepage = () => {
  return (
    <>
      <Header
        headline="Balloon Centerpiece"
        tagline="Order and Customize the perfect Centerpiece for your event"
        display="none"
      />
      <div className="page-content">
        <InfoCard style={{ flex: 1 }} />
        <CenterpieceForm style={{ flex: 1 }} />
      </div>
    </>
  );
};

export default Centerpiecepage;
