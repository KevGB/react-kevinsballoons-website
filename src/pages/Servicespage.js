import { Container, Row, Col } from "reactstrap";
import "./pagescss/servicepage.css";
import Header from "../components/Header";
import archimg from "../app/assets/img/archpinkblue-sq.jpg";
import garlandimg from "../app/assets/img/garland-pink-engagement-sq.jpg";
import columnimg from "../app/assets/img/columns50.jpg";
import bikeimg from "../app/assets/img/kev-bike-sq.png";
import twisting from "../app/assets/img/kev-owl2-sm.jpg";
import { Link, useNavigate } from "react-router-dom";

const Servicepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header headline="Services" tagline="Party Decor & more" display="none" />
      <div className="page-content">

        <Container style={{ width: "800px" }}>

        <Row className="service-row ser-teal" onClick = {()=> navigate("/book")} >
            <Col xs="8" className="service-text">
              <h6>Balloon Twisting</h6>
              <p>
                {" "}
                Kevin's Specialty!
              </p>
              <p className="d-none d-sm-block">
                Kevin is widely regarded as the best Balloon Twister in the Bay Area (some say in the world, but we'll try to be modest). With mesmerizing soeed and precision, watch as he brings animals and characters to life right before your eyes!
                {" "}
                <Link to='/book'>learn more</Link>
              </p>
            </Col>
            <Col xs="4" className="p-0 justify-content-center d-flex">
              <Link to='/garlands'>
                <img src={twisting} alt="" className="service-img" />
              </Link>
            </Col>
          </Row>

          <hr></hr>
          <Row
            className="service-row ser-yel"
            onClick={() => navigate("/arches")}
          >
            <Col xs="4" className="p-0  d-flex">
              <Link to="/arches">
                <img src={archimg} alt="" className="service-img" />
              </Link>
            </Col>
            <Col xs="8" className="service-text">
              <h6>Balloon Arches</h6>
              <p> Customized balloon arches of any size and specifications.</p>
              <p className="d-none d-sm-block">
                A balloon arch adds a fun, playful element to any event and is a
                great way to make a statement and create a memorable photo
                backdrop. <Link to="/arches">learn more</Link>
              </p>
            </Col>
          </Row>
          <hr></hr>
          <Row
            className="service-row ser-teal"
            onClick={() => navigate("/garlands")}
          >
            <Col xs="8" className="service-text">
              <h6>Balloon Garlands</h6>
              <p>
                {" "}
                Give your event that extra pizazz with a stunning balloon
                garland
              </p>
              <p className="d-none d-sm-block">
                A balloon garland is a fun and festive way to add color and
                texture to your party decor. It's versatile, customizable, and
                perfect for creating a photo-worthy backdrop or highlighting key
                areas of your event space.{" "}
                <Link to="/garlands">learn more</Link>
              </p>
            </Col>
            <Col xs="4" className="p-0 justify-content-center d-flex">
              <Link to="/garlands">
                <img src={garlandimg} alt="" className="service-img" />
              </Link>
            </Col>
          </Row>
          <hr></hr>
          <Row
            className="service-row ser-or"
            onClick={() => navigate("/columns")}
          >
            <Col xs="4" className="p-0 d-flex">
              <Link to="/columns">
                <img src={columnimg} alt="" className="service-img" />
              </Link>
            </Col>
            <Col xs="8" className="service-text">
              <h6>Balloon Columns</h6>
              <p>Amaze your guests with balloon columns, short or tall</p>
              <p className="d-none d-sm-block">
                Balloon columns are a must-have at any event as they add a touch
                of whimsy and create an inviting atmosphere. They're versatile,
                customizable, and perfect for adding visual interest and depth
                to your party decor. <Link to="/columns">learn more</Link>
              </p>
            </Col>
          </Row>
          <hr></hr>
          <Row
            className="service-row ser-teal"
            onClick={() => navigate("/centerpieces")}
          >
            <Col xs="8" className="service-text">
              <h6>Custom Centerpieces</h6>
              <p>
                Kevin is a world-renowned balloon twister, capable to turning
                almost any idea into a balloon sculpture
              </p>
              <p className="d-none d-sm-block">
                A balloon centerpiece sculpture adds a fun and festive touch to
                any event or party, serving as a unique and eye-catching
                decoration that guests will love. Plus, it can be customized to
                fit any theme or color scheme, making it a versatile addition to
                any celebration. <Link to="/centerpieces">learn more</Link>
              </p>
            </Col>
            <Col xs="4" className="p-0 justify-content-center d-flex">
              <Link to="/centerpieces">
                <img src={bikeimg} alt="" className="service-img" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Servicepage;
