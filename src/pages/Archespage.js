import Header from "../components/Header";
import ArchesForm from "../components/ArchesForm";
import "./pagescss/bookingpage.css";
import { Card, CardBody, CardImg } from "reactstrap";
import archimage from "../app/assets/img/archpinkblue-sq.jpg";
import quadarch from "../app/assets/img/quadarch.png";
import heliumarch from "../app/assets/img/heliumarch.png";

const InfoCard = () => {
  return (
    <Card
      class="service-card outline d-none d-sm-block"
      style={{ width: "20rem", padding: 0 }}
      className="d-none d-sm-block"

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
      <CardImg src={quadarch} />
      <CardBody>
        Quad Style Arches are the classic balloon arch that you often see at store openings and graduations. They have a very clean, crisp, almost - dare I say - professional look.  
      </CardBody>
      <CardImg src={archimage} />
      <CardBody>Organic Style Arches have about 2-3x more balloons than Quad arches. The balloons vary in size, creating a lovely natural look. </CardBody>
      <CardImg src={heliumarch} />
      <CardBody>
        Helium Arches are built with a string of floating helium balloons linked together on a single strand. These are great if you want something huge and epic, like an arch that spans across a road or an entire event space.
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
