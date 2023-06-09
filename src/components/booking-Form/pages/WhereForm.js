import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Label, Button } from "reactstrap";
import { validateWhereForm } from "../utils/validateWhereForm";
import "../bookingform.css";
import { useState, useEffect } from "react";

const WhereForm = () => {
  const [placeholderText, setPlaceholderText] = useState("");

  const initialValues = {
    address: "",
    addressTwo: "",
    city: "",
    state: "",
    country: "",
    locationType: "",
    specification: "",
    parking: "",
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
    navigate("/bookingFormGuests");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const placeholderArray = [
        "example: On a yacht",
        "example: Dangerous Chocolate Factory",
        "example: Secret underground city",
        "example: Hot air balloon",
        "example: Mt. Doom",
        "example: Hobbiton",
        "example: Amazon Rainforest",
        "example: Top Secret location",
        "example: Antarctica",
        "example: Keralan Houseboat",
        "example: Deserted island",
        "example: Giant treehouse",
        "example: Yellow Submarine",
        "example: Scottish castle",
        "example: Egyptian tomb",
        "example: Finnish glass igloo",

      ];

      let num = Math.floor(Math.random() * 16);
      setPlaceholderText(placeholderArray[num]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="form">
        <h1 className="form-header">Tell us about your event</h1>
        <br />
        <br />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validateWhereForm}
        >
          <Form className="KB-form">
            <FormGroup>
              <Label>Where is your event?</Label>
              <Field
                name="address"
                type="text"
                placeholder="Address"
                className="form-control field"
              />
              <Field
                name="addressTwo"
                type="text"
                placeholder=""
                className="form-control field"
              />
              <ErrorMessage name="address">
                {(msg) => <p className="text-danger ">{msg}</p>}
              </ErrorMessage>
              <br />
              <div style={{ display: "flex", maxWidth: "300px" }}>
                <Field
                  name="city"
                  type="text"
                  placeholder="City"
                  className="form-control"
                />

                <Field
                  name="state"
                  type="text"
                  placeholder="State"
                  className="form-control "
                />
                <Field
                  name="country"
                  type="text"
                  placeholder="Country"
                  className="form-control "
                />
              </div>
              <ErrorMessage name="city">
                {(msg) => <p className="text-danger ">{msg}</p>}
              </ErrorMessage>

              <br />

              <Label>What type of location is this?</Label>
              <Field
                as="select"
                name="locationType"
                className="form-control field"
              >
                <option value="">Click to select</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="daycare">Daycare</option>
                <option value="backyard">Backyard</option>
                <option value="school">School</option>
                <option value="indoor venue">Indoor Event Venue</option>
                <option value="outdoor venue">Outdoor Event Venue</option>
                <option value="Spark Social SF">Spark Social SF</option>
                <option value="public park">Public Park</option>
              </Field>
              <Label>If not listed, please specify:</Label>
              <Field
                type="text"
                name="specification"
                className="form-control field"
                placeholder={placeholderText}
              />
              <br />

              <Label>What parking is available?</Label>
              <Field
                as="textarea"
                name="parking"
                className="form-control field"
              />
            </FormGroup>
            <Button type="submit" color="info">
              Next
            </Button>
          </Form>
        </Formik>

        <div className="form-navigation">
          <Link to="/bookingFormStart">
            <i className="fa fa-solid fa-circle" />
          </Link>
          <Link to="/bookingFormInfo">
            <i className="fa fa-solid fa-circle " />
          </Link>
          <Link to="/bookingFormDuration">
            <i className="fa fa-solid fa-circle" />
          </Link>
          <Link to="/bookingFormWhen">
            <i className="fa fa-solid fa-circle " />
          </Link>
          <Link to="/bookingFormWhere">
            <i className="fa fa-solid fa-circle form-navigation-active" />
          </Link>
          <i className="fa fa-solid fa-circle not-yet" />
          <i className="fa fa-solid fa-circle not-yet" />
        </div>
      </div>
    </div>
  );
};

export default WhereForm;
