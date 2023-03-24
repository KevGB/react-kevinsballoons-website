import { Formik, Form, Field } from "formik";
import { FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import "../components/booking-Form/bookingform.css";
import ColorPickerForm from "../utils/ColorPicker";

const initialValues = {
  numColumns: 1,
  numColors: "",
  columnSize: "",
  deliveryDate: "",
  deliveryTime: "",
  deliveryAddress: "",
  deliveryCity: "",
  deliveryState: "",
  deliveryCountry: "",
  occasionColumn: "",
  occaOtherColumn: "",
  columnSetting: "",
  setOtherColumn: "",
  parkingColumn: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  referal: "",
  additionalNotesColumn: "",
};

const ColumnsForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={{paddingBottom: 30}}>
      <Formik initialValues={initialValues} onSumbit={onSubmit} >
        {({ values }) => (
          <Form className="form">
            <div className="col-sm-6 ">
              <h1 className="form-header">Tell me about your Columns</h1>
              <br/>
              <FormGroup row className="mt-2">
                <Label for="numColumns" className="col-form-label">
                  How many Columns do you need?
                </Label>
                <div className="row mt-n4">
                  <Input
                    type="select"
                    className="form-control"
                    id="numColumns"
                    name="numColumns"
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
              <FormGroup row className="mt-2">
                <Label for="columnSize" className="col-form-label">
                  What Size Would You Like?
                </Label>
                <div className="row mt-n4">
                  <Input
                    type="select"
                    name="columnSize"
                    id="columnSize"
                    className="form-control"
                  >
                    <option value=""></option>
                    <option value="10">3ft Balloon Column</option>
                    <option value="20">5ft Balloon Column</option>
                    <option value="30">7ft Balloon Column</option>
                    <option value="40">9ft Balloon Column</option>
                  </Input>
                </div>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label for="columnSize" className="col-form-label">
                  What Style Would You Like?
                </Label>
                <div className="row mt-n4">
                  <Input
                    type="select"
                    name="columnStyle"
                    id="columnStyle"
                    className="form-control"
                  >
                    <option value=""></option>
                    <option value="quad">Quad</option>
                    <option value="organic">Organic</option>
                  </Input>
                </div>
              </FormGroup>

              <FormGroup row className="mt-2">
                <Label for="columnStyle" className="col-form-label">
                  Would you like them decorated with Kevin's world-famous Balloon Art?
                </Label>
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                  <Label  >
                    <Field type="radio" name="decorated" value="yes" />{' '}
                    Yes, please!
                  </Label>
                  <Label>
                    <Field type="radio" name="decorated" value="no" />{' '}
                    No, just a plain Column, please
                  </Label>
                </div >
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
                <Label for="occasionColumn" className="col-form-label">
                  What's the Occasion?
                </Label>
                <Input type="select" name="occasionColumn" id="occasionColumn">
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
                  name="occaOtherColumn"
                  id="occaOtherColumn"
                  placeholder="Other"
                  className="mt-2"
                />
              </FormGroup>

              <FormGroup row className="mt-2">
                <Label for="columnSetting">What's the Setting?</Label>
                <Input type="select" name="columnSetting" id="columnSetting">
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
                  name="setOtherColumn"
                  id="setOtherColumn"
                  placeholder="Other"
                  className="mt-2 "
                />
              </FormGroup>

              <FormGroup className="row mt-2">
                <Label htmlFor="parkingColumn" className="col-form-label">
                  Parking Info
                </Label>

                <Field
                  as={Input}
                  type="textarea"
                  name="parkingColumn"
                  id="parkingColumn"
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
                <Label htmlFor="additionalNotesColumn" className="col-form-label">
                  Additional Notes
                </Label>

                <Field
                  component={Input}
                  type="textarea"
                  name="additionalNotesColumn"
                  id="additionalNotes"
                  className="form-control"
                  rows="4"
                />
              </FormGroup>
            </div>
            <Button type="submit" id="ColumnFormSubmit" color="info">
              Get a Quote
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ColumnsForm;