import { Card, CardBody, CardTitle } from "reactstrap";
import './componentcss/testimonialcarousel.css'

const TestimonialItem = ({ testimonial }) => {
  const { firstName, lastName, quote } = testimonial;
  return (
    <Card style={{
        maxWidth: "200px",
        paddingLeft: "14px",
        paddingRight: "10px",
        backgroundColor: "#03a4b6ae",
        borderRadius: "20px",
        height: "300px"
    }}>
      <CardBody className="card-body">
        <p className="quote">"{quote}"</p>
        <p className="rating">⭐⭐⭐⭐⭐</p>
      </CardBody>
      <CardTitle className="cardtitle">
        <p className="author">
          -{firstName} {lastName}
        </p>
      </CardTitle>
    </Card>
  );
};
export default TestimonialItem;
