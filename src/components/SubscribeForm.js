import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./componentcss/subscribeform.css";

const SubscribeForm = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  const handleSubscribe = (values) => {
    const { firstNameSubscribe, emailSubscribe } = values;
    setSubscriptions([
      ...subscriptions,
      { firstName: firstNameSubscribe, email: emailSubscribe },
    ]);
    console.log(subscriptions);
  };

  return (
    <div className="subscribe-form-container">
      <h5 className="subscribe-header">
        Subscribe to know when Kevin's in your area
      </h5>
      <Formik
        initialValues={{ firstNameSubscribe: "", emailSubscribe: "" }}
        onSubmit={handleSubscribe}
        className="subscribe-form"
      >
        {({ values, handleChange }) => (
          <Form>
            <div className="form-group row">
              <label
                htmlFor="firstNameSubscribe"
                className="col-form-label sr-only"
              >
                Name
              </label>
              <div className="field">
                <Field
                  type="text"
                  className="form-control yellow"
                  id="firstNameSubscribe"
                  name="firstNameSubscribe"
                  placeholder="Name"
                  value={values.firstNameSubscribe}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="emailSubscribe"
                className="col-form-label sr-only"
              >
                Email
              </label>
              <div className="field">
                <Field
                  type="email"
                  className="form-control yellow"
                  id="emailSubscribe"
                  name="emailSubscribe"
                  placeholder="Email"
                  value={values.emailSubscribe}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="button" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubscribeForm;
