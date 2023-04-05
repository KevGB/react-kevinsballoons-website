import Header from "../components/Header";
import ColumnsForm from "../components/ColumnsForm";
import "./pagescss/bookingpage.css";
import { Card, CardBody, CardImg } from "reactstrap";
import butterflyimage from "../app/assets/img/column-butterfly-sq.jpg";
import columns50 from "../app/assets/img/columns50.jpg";
import mermaidimage from "../app/assets/img/theme-mermaid-sq.jpg";


const InfoCard = () => {
  return (
    <Card
      class="service-card  d-none d-sm-block"
      style={{ width: "20rem", padding: 0 }}
      className="d-none d-sm-block"
    >
      <CardBody>
        <p className="service-description ">
          Balloon columns are versatile and eye-catching balloon decor that can
          add a pop of fun and excitement to any party or event! Essentially,
          it's a towering structure made up of dozens of balloons that are
          attached to a central column, creating a stunning vertical display
          that's sure to impress your guests. They add visual interest and depth
          to your event, whether you're celebrating a birthday, a wedding, or
          sports event, a balloon column can help create a festive and inviting
          atmosphere. You can choose from a wide range of colors, patterns, and
          sizes, whether you want something bright and bold, or more understated
          and elegant, there's a balloon column out there that's perfect for
          you. Choose either a Quad or Organic style. Make sure you ask Kevin to
          add some of his famous balloon twisting designs to make your columns 1
          of a kind! Whether you're looking to add a pop of color to your decor,
          create a festive atmosphere, or just make your guests smile, balloon
          columns are a fantastic choice. So why not give it a try at your next
          party and see the magic for yourself?
        </p>
      </CardBody>
      <CardImg src={columns50} />
      <CardBody>
        Arches can be short or tall, but they always stand alone
      </CardBody>
      <CardImg src={butterflyimage} />
      <CardBody>
        Many people like to top their columns with mylar or extra large balloons
      </CardBody>
      <CardImg src={mermaidimage} />
      <CardBody>
        This mermaid tail is not technically a column, its a garland. Columns
        can stand alone, but this tail requires a wall for support.
      </CardBody>
    </Card>
  );
};

const Columnpage = () => {
  return (
    <>
      <Header
        headline="Balloon Columns"
        tagline="Order and Customize the perfect columns for your event"
        display="none"
      />
      <div className="page-content">
        <InfoCard style={{ flex: 1 }} />
        <ColumnsForm style={{ flex: 1 }} />
      </div>
    </>
  );
};

export default Columnpage;
