import Header from "../components/Header";
import GarlandsForm from "../components/GarlandsForm";
import "./pagescss/bookingpage.css";
import { Card, CardBody, CardImg } from "reactstrap";
import champimage from "../app/assets/img/garland-champagne.jpg";
import flowerimg from "../app/assets/img/garland-flowered-sq.jpg";
import mermaidimage from "../app/assets/img/theme-mermaid-sq.jpg";

const InfoCard = () => {
  return (
    <Card
      class="service-card  d-none d-sm-block"
      style={{ width: "20rem", padding: 0 }}
    >
      <CardBody>
        <p className="service-description ">
          A balloon garland is a fun and creative way to add some pizzazz to
          your party decor! A balloon garland is a beautiful arrangement of
          balloons in different colors, sizes, and shapes, attached together to
          form a garland that can decorate a wall, car, staircase, bar, door, or
          pretty much anything you can imagine! Imagine walking into a room
          filled with a stunning, colorful balloon garland that stretches across
          the ceiling or along the walls. It's a beautiful and eye-catching
          addition to any party or event, sure to create a memorable experience
          for your guests. Whether you're hosting a birthday party, bridal
          shower, wedding, or any other celebration, a balloon garland can add
          that extra touch of fun and elegance. Ask Kevin to add his famous
          balloon twisting designs to make your garlands truly 1 of a kind! So why
          not add some balloons to your next party and see the magic they bring
          to your event?
        </p>
      </CardBody>
      <CardImg src={champimage} />
      <CardBody>
        Balloon garlands are versatile and can be customized to fit any theme or
        color scheme.{" "}
      </CardBody>
      <CardImg src={flowerimg} />
      <CardBody>
      They can be used to highlight a specific area, like a staircase for a grand entrance, a car, or serve
          as a backdrop for photos.{" "}
      </CardBody>
      <CardImg src={mermaidimage} />
      <CardBody>The possibilities are endless!</CardBody>
    </Card>
  );
};

const Garlandpage = () => {
  return (
    <>
      <Header
        headline="Balloon Garlands"
        tagline="Order and Customize the perfect Garland for your event"
        display="none"
      />
      <div className="page-content">
        <InfoCard style={{ flex: 1 }} />
        <GarlandsForm style={{ flex: 1 }} />
      </div>
    </>
  );
};

export default Garlandpage;
