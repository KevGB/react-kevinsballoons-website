import Header from "../components/Header";
import ArchesForm from "../components/ArchesForm";
import "./pagescss/bookingpage.css";
import { Card, CardBody, CardImg } from "reactstrap";
import archimage from "../app/assets/img/archpinkblue-sq.jpg";
import garlandimage from "../app/assets/img/garland-pink-engagement-sq.jpg";
import duckimage from "../app/assets/img/twisting-duck.jpg";

const InfoCard = () => {
  return (
    <Card
      class="service-card outline d-none d-sm-block"
      style={{ width: "20rem", padding: 0 }}
    >
      <CardBody>
        <p className="service-description ">
          A balloon arch is a fun and versatile addition to any event! They can
          be created in many different styles, such as classic Quad patterns or
          Organic shapes that mimic nature, or even giant floating helium
          arches. They can serve as a focal point or backdrop for photos, adding
          a pop of color and whimsy to any event! Ask Kevin to add some of his
          famous balloon twisting designs to make your arch one of a kind! Plus,
          they're easy to install and can be set up in a variety of locations,
          from giant outdoor arches to small arches that can clip onto a table.
          A balloon arch is sure to impress your guests and make your party
          stand out.
        </p>
      </CardBody>
      <CardImg src={archimage} />
      <CardBody>Organic Style Arch</CardBody>
      <CardImg src={duckimage} />
      <CardBody>
        If you want Kevin to include some of his world-famous balloon art into
        your arch, just click Yes, please!
      </CardBody>
      <CardImg src={garlandimage} />
      <CardBody>
        This is not an arch, this is called a garland. Garlands are not full
        arches, but they're increasingly popular for events
      </CardBody>
    </Card>
  );
};

const ArchesPage = () => {
  return (
    <>
      <Header
        headline="Balloon Arches"
        tagline="Order and Customize the perfect arch for your event"
        display="none"
      />
      <div className="page-content">
        <InfoCard style={{ flex: 1 }} />
        <ArchesForm style={{ flex: 1 }} />
      </div>
    </>
  );
};

export default ArchesPage;
