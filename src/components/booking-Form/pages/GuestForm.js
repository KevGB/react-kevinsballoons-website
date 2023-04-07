import { Formik, Field, Form } from "formik";
import { Label, FormGroup, Button } from "reactstrap";
import "../bookingform.css";

import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

const GuestsForm = () => {
  // const [numGuests, setNumGuests] = useState(0);

  const navigate = useNavigate();

  const initialValues = {
    numGuests: "",
    ageRange: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/bookingFormAdditional");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="form">
        <h1 className="form-header">Tell us about your event</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(formikProps) => (
            <Form className="KB-form">
              <FormGroup>
                <Label>Approximately how many guests/kids do you expect? (drag the slider to change)</Label>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    id="numGuests"
                    value={formikProps.values.numGuests}
                    name="numGuests"
                    className="field"
                    onChange={(e) => {
                      formikProps.setFieldValue(
                        "numGuests",
                        parseInt(e.target.value)
                      );
                    }}
                    style={{ width: "300px" }}
                  />{" "}
                  <span className="range-display">
                    {formikProps.values.numGuests}
                  </span>
                </div>

                <Label>What's the age range of the guests/kids?</Label>
                <Field
                  name="ageRange"
                  className="form-control field"
                  placeholder=""
                />
              </FormGroup>
              <Button type="submit" color="info">
                Next
              </Button>
            </Form>
          )}
        </Formik>

        <div className="form-navigation">
          <Link to="bookingFormStart/">
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
            <i className="fa fa-solid fa-circle " />
          </Link>
          <Link to="/bookingFormGuests">
            <i className="fa fa-solid fa-circle form-navigation-active" />
          </Link>
          <i className="fa fa-solid fa-circle not-yet" />
        </div>
      </div>
    </div>
  );
};

export default GuestsForm;
