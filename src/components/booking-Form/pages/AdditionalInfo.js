import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateAdditionalForm } from "../utils/validateAdditionalForm";
import "../bookingform.css";
import { Link, useNavigate } from "react-router-dom";
import { Label, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import { TandC } from "../utils/TandC";

const AdditionalInfo = () => {
  const initialValues = {
    referal: "",
    notes: "",
    tandc: false,
  };

  const navigate = useNavigate();
  const [tandcShow, toggleTandcShow] = useState(false);

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
    navigate("/thankyou");
  };

  const handleClick = () => {
    toggleTandcShow(!tandcShow);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="form">
        <h1 className="form-header">Additional Notes</h1>
        <br />
        <Formik
          initialValues={initialValues}
          validate={validateAdditionalForm}
          onSubmit={handleSubmit}
        >
          <Form className="KB-form">
            <FormGroup md="12">
              <Field
                as="textarea"
                name="referal"
                className="form-control field"
                placeholder="How'd you hear about us?"
              />
            </FormGroup>

            <br />

            <FormGroup md="12">
              <Field
                as="textarea"
                name="notes"
                className="form-control field"
                placeholder="Any additional note about your event"
              />
            </FormGroup>

            <br />

            <FormGroup md="12">
              <Field
                name="tandc"
                type="checkbox"
                className="form-check-input"
              />{" "}
              <Label check htmlFor="tandc">
                I agree to Kevin's Balloons{" "}
                <a href="#0" onClick={handleClick}>
                  T&C
                </a>
              </Label>
              {tandcShow && <TandC />}
              <ErrorMessage name="tandc">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </FormGroup>

            <Button type="submit" color="info">
              Submit
            </Button>
          </Form>
        </Formik>

        <div className="form-navigation">
          <Link to="/bookingFormStart">
            <i className="fa fa-solid fa-circle" />
          </Link>
          <Link to="/bookingFormInfo">
            <i className="fa fa-solid fa-circle" />
          </Link>
          <Link to="/bookingFormDuration">
            <i className="fa fa-solid fa-circle" />
          </Link>
          <Link to="/bookingFormWhen">
            <i className="fa fa-solid fa-circle" />
          </Link>
          <Link to="/bookingFormWhere">
            <i className="fa fa-solid fa-circle" />
          </Link>
          <Link to="/bookingFormGuests">
            <i className="fa fa-solid fa-circle" />
          </Link>
          <Link to="/bookingFormAdditional">
            <i className="fa fa-solid fa-circle form-navigation-active" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
