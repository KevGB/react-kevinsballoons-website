import Header from "../components/Header";
// import ArchesForm from '../components/archesForm/ArchesForm'
import "./pagescss/bookingpage.css";
// import { Card, CardBody } from "reactstrap";

const ArchesPage = () => {
  return (
    <>
      <Header
        headline="Balloon Arches"
        tagline="Order and Customize the perfect arch for your event"
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
        {/* <ArchesForm /> */}
      </div>
    </>
  );
};

export default ArchesPage;
