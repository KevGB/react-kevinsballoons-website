import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateForm } from "../utils/validateForm";
import "../bookingform.css";
import { Link, useNavigate } from "react-router-dom";
import { Label, FormGroup } from "reactstrap";
import { Button } from "reactstrap";

const PersonalInfo = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    instagram: "",
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(JSON.stringify(values));
    navigate("/bookingFormDuration");
  };

  return (
    <div className="form">
      <h1>Tell us about yourself</h1>
      <br />
      <p>Your contact info</p>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className="KB-form">
          <FormGroup md="12">
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-control field"
            />
            <ErrorMessage name="firstName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup md="12">
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-control field"
            />

            <ErrorMessage name="lastName">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup md="12">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="form-control field"
            />
            <ErrorMessage name="email">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup md="12">
            <Field
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="form-control field"
            />
            <ErrorMessage name="phone">
              {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
          </FormGroup>

          <FormGroup md="12">
            <Label className="small-text">
              If you prefer Instagram messaging, add your handle here (optional)
              <Field
                type="text"
                name="instagram"
                placeholder="Instagram"
                className="form-control field"
              />
            </Label>
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
          <i className="fa fa-solid fa-circle form-navigation-active" />,
        </Link>
        <i className="fa fa-solid fa-circle not-yet" />
        <i className="fa fa-solid fa-circle not-yet" />
        <i className="fa fa-solid fa-circle not-yet" />
        <i className="fa fa-solid fa-circle not-yet" />

        <i className="fa fa-solid fa-circle not-yet" />
      </div>
    </div>
  );
};

export default PersonalInfo;
