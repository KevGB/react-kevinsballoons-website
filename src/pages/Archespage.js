import Header from "../components/Header";
import ArchesForm from '../components/ArchesForm'
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
        <ArchesForm />

      </div>
    </>
  );
};

export default ArchesPage;






{/* <Card class="service-card" style={{ width: "18rem", padding: 0 }}>
          <CardBody className="service-description ">
            <p style={{color:'black'}}>
              A balloon arch is a fun and versatile addition to any event. They
              can be created in many different styles, such as classic spiral
              patterns or organic shapes that mimic nature. Balloon arches are a
              fantastic way to elevate the look and feel of your party. They can
              serve as a focal point or backdrop for photos, adding a pop of
              color and whimsy to any event! Whether you're hosting a birthday
              party, baby shower, or wedding, a balloon arch is a great way to
              create a fun and memorable atmosphere. One of the best things
              about balloon arches is their versatility. They can be customized
              to match your party theme, with different colors, patterns, and
              styles to choose from. Ask Kevin to add some of his famous balloon
              twisting designs to make your arch one of a kind! Plus, they're
              easy to install and can be set up in a variety of locations, from
              giant outdoor arches to small arches that clip onto an indoor
              table. Overall, a balloon arch is a fun and festive decoration
              that's sure to impress your guests and make your party stand out.
              With so many different styles and customization options available,
              you can create a look that perfectly matches your vision and sets
              the tone for an unforgettable celebration.
            </p>
          </CardBody>
        </Card> */}