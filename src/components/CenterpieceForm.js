import { Formik, Form, Field } from "formik";
import { FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import "../components/booking-Form/bookingform.css";
import ColorPickerForm from "../utils/ColorPicker";

const initialValues = {
  numCenterpieces: 1,
  fileCenterpiece: null,
  numColors: "",
  centerpieceSize: "",
  deliveryDate: "",
  deliveryTime: "",
  deliveryAddress: "",
  deliveryCity: "",
  deliveryState: "",
  deliveryCountry: "",
  occasionCenterpiece: "",
  occaOtherCenterpiece: "",
  centerpieceSetting: "",
  setOtherCenterpiece: "",
  parkingCenterpiece: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  referal: "",
  additionalNotesCenterpiece: "",
};

const CenterpieceForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={{ paddingBottom: 30 }}>
      <Formik initialValues={initialValues} onSumbit={onSubmit}>
        {({ values }) => (
          <Form className="form">
            <div className="col-sm-6 ">
              <h1 className="form-header">Tell me about your Centerpieces</h1>
              <br />
              <FormGroup className="row mt-2">
                <Label
                  htmlFor="centerpieceDescription"
                  className="col-form-label"
                >
                  What centerpiece(s) do you want for you party?
                </Label>

                <Field
                  as={Input}
                  type="textarea"
                  name="centerpieceDescription"
                  id="centerpieceDescription"
                  rows="2"
                />
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label for="fileCenterpiece" className="col-form-label">
                  Upload an image from the internet similar to what you want 
                </Label>
                <Row className="mt-n4">
                  <Field
                    type="file"
                    value={values.fileCenterpiece}
                    className="form-control col-12"
                    id="fileCenterpiece"
                  />
                </Row>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label for="numCenterpieces" className="col-form-label">
                  How many Centerpieces do you need?
                </Label>
                <div className="row mt-n4">
                  <Input
                    type="select"
                    className="form-control"
                    id="numCenterpieces"
                    name="numCenterpieces"
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </Input>
                </div>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label for="numColors" className="col-form-label ">
                  How many colors do you want?
                </Label>
                <Field component={ColorPickerForm} />
              </FormGroup>




              <Row className="mt-2">
                <Col>
                  <FormGroup row>
                    <Label for="deliveryDate" className="col-form-label">
                      Delivery Date
                    </Label>
                    <Row className="mt-n4">
                      <Field
                        type="date"
                        value={values.deliveryDate}
                        className="form-control"
                        id="deliveryDate"
                      />
                    </Row>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup row>
                    <Label for="deliveryTime" className="col-form-label">
                      Delivery Time
                    </Label>
                    <Row className="mt-n4">
                      <Field
                        type="time"
                        value={values.deliveryTime}
                        className="form-control"
                        id="deliveryTime"
                      />
                    </Row>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup row className="mt-2">
                <Label for="deliveryAddress" className="col-form-label">
                  Delivery Address
                </Label>
                <Row className="mt-n4">
                  <Field
                    type="text"
                    value={values.deliveryAddress}
                    className="form-control col-12"
                    placeholder="123 Party St."
                    id="deliveryAddress"
                  />
                </Row>
              </FormGroup>
              <Row className="mt-n2">
                <Col>
                  <FormGroup row>
                    <Label for="deliveryCity" className="col-form-label">
                      City
                    </Label>
                    <Row className="mt-n4">
                      <Field
                        type="text"
                        value={values.deliveryCity}
                        className="form-control"
                        placeholder="San Francisco"
                        id="deliveryCity"
                      />
                    </Row>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup row>
                    <Label for="deliveryState" className="col-form-label">
                      State
                    </Label>
                    <Row className="mt-n4">
                      <Field
                        type="text"
                        value={values.deliveryState}
                        className="form-control"
                        placeholder="CA"
                        id="deliveryState"
                      />
                    </Row>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup row>
                    <Label for="deliveryCountry" className="col-form-label">
                      Country
                    </Label>
                    <Row className="mt-n4">
                      <Field
                        type="text"
                        value={values.deliveryCountry}
                        className="form-control"
                        placeholder="USA"
                        id="deliveryCountry"
                      />
                    </Row>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup row className="mt-2">
                <Label for="occasionCenterpiece" className="col-form-label">
                  What's the Occasion?
                </Label>
                <Input
                  type="select"
                  name="occasionCenterpiece"
                  id="occasionCenterpiece"
                >
                  <option value=""></option>
                  <option value="birthday">Birthday Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="holiday">
                    Holiday Celebration (please specify below)
                  </option>
                  <option value="graduation">Graduation Party</option>
                  <option value="bachelorette">Bachelorette Party</option>
                  <option value="bachelor">Bachelor Party</option>
                  <option value="">If not listed, please specify below</option>
                </Input>
                <Input
                  type="text"
                  name="occaOtherCenterpiece"
                  id="occaOtherCenterpiece"
                  placeholder="Other"
                  className="mt-2"
                />
              </FormGroup>

              <FormGroup row className="mt-2">
                <Label for="centerpieceSetting">What's the Setting?</Label>
                <Input
                  type="select"
                  name="centerpieceSetting"
                  id="centerpieceSetting"
                >
                  <option value=""></option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="backyard">Backyard</option>
                  <option value="pub park">Public Park</option>
                  <option value="priv pool">Private Pool</option>
                  <option value="pub pool">Public Pool</option>
                  <option value="venue">Event Venue</option>
                  <option value="spark">Spark Social SF</option>
                  <option value="">If not listed, please specify below</option>
                </Input>
                <Input
                  type="text"
                  name="setOtherCenterpiece"
                  id="setOtherCenterpiece"
                  placeholder="Other"
                  className="mt-2 "
                />
              </FormGroup>

              <FormGroup className="row mt-2">
                <Label htmlFor="parkingCenterpiece" className="col-form-label">
                  Parking Info
                </Label>

                <Field
                  as={Input}
                  type="textarea"
                  name="parkingCenterpiece"
                  id="parkingCenterpiece"
                  rows="2"
                />
              </FormGroup>

              <Row>
                <Col>
                  <FormGroup className="row mt-4">
                    <Label htmlFor="firstName" className="col-form-label">
                      Your First Name
                    </Label>

                    <Field
                      as={Input}
                      type="text"
                      name="firstName"
                      id="firstName"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="row mt-4">
                    <Label htmlFor="lastName" className="col-form-label">
                      Your Last Name
                    </Label>

                    <Field
                      as={Input}
                      type="text"
                      name="lastName"
                      id="lastName"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup className="row mt-4 ">
                    <Label htmlFor="email" className="col-form-label ">
                      Email
                    </Label>

                    <Field as={Input} type="email" name="email" id="email" />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="row mt-4">
                    <Label htmlFor="telephone" className="col-form-label">
                      Phone
                    </Label>

                    <Field
                      as={Input}
                      type="tel"
                      name="telephone"
                      id="telephone"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup className="row mt-4">
                <Label htmlFor="referal" className="col-form-label">
                  How did you hear about Kevin's Balloons?
                </Label>

                <Field
                  as={Input}
                  type="text"
                  name="referal"
                  id="referal"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup className="row mt-4">
                <Label
                  htmlFor="additionalNotesCenterpiece"
                  className="col-form-label"
                >
                  Additional Notes
                </Label>

                <Field
                  component={Input}
                  type="textarea"
                  name="additionalNotesCenterpiece"
                  id="additionalNotes"
                  className="form-control"
                  rows="4"
                />
              </FormGroup>
            </div>
            <Button type="submit" id="centerpieceFormSubmit" color="info">
              Get a Quote
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CenterpieceForm;