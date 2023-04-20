import React from "react";
// import { Formik, Field, Form } from "formik";
import {
  // Container,
  // Row,
  Col,
  Form as RSForm,
  // FormGroup,
  // Label,
  // Input,
  // Button,
} from "reactstrap";
import Header from "../components/Header";
import "./pagescss/contactpage.css"
import { Link } from "react-router-dom";

const Contactpage = () => {
  return (
    <>
      <Header 
       headline="Contact Us"
       tagline="for quick questions"
       display="none"
      />
      
      <div className="container-fluid yellow">
        <div className="row justify-content-center contact-row mx-auto">
          <Col sm="4" className="contact-box">
            <a href="mailto:kevinsballoons@gmail.com">
              <i className="fa fa-envelope mb-2" size={60} />
              <h2>Email</h2>
              <h5>kevinsballoons@gmail.com</h5>
            </a>
          </Col>

          <Col sm="4" className="contact-box">
            <a href="https://instagram.com/kevins.balloons">
              <i className="fa fa-instagram mb-2" size={60} />
              <h2>Instagram</h2>
              <h6>@kevins.balloons</h6>
            </a>
          </Col>

          <Col sm="4" className="contact-box">
            <Link to="/book">
              <i className="fa fa-mobile mb-2" size={60} />
              <h2>Book Kevin</h2>
              <h6>for your event!</h6>
            </Link>
          </Col>
        </div>

        {/* <Container className="contact-form">
          <h2>Just have a quick question?</h2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormGroup row>
                  <Label for="firstName" className="col-md-2 col-form-label">
                    Name
                  </Label>
                  <Col md="10">
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control"
                      placeholder="Name"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="email" className="col-md-2 col-form-label">
                    Email
                  </Label>
                  <Col md="10">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="message" className="col-md-2 col-form-label">
                    Message
                  </Label>
                  <Col md="10">
                    <Field
                      component="textarea"
                      name="message"
                      id="message"
                      className="form-control"
                      rows="10"
                      placeholder="What's your message?"
                    />
                  </Col>
                </FormGroup>

                <Button
                  type="submit"
                  className="subscribe btn teal text-white mb-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting" : "Submit"}
                </Button>
              </Form>
            )}
          </Formik>
        </Container> */}
      </div>
    </>
  );
};

export default Contactpage;
