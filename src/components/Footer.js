import React from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./componentcss/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col>
            <h6>Links</h6>
            <ul className="list-unstyled">
              <li>
                <div to="/">Home</div>
              </li>
              <li>
                <div to="/contact">Contact</div>
              </li>
              <li>
                <div to="/services">Services</div>
              </li>
              <li>
                <ul>
                  <li>
                    <div to="/book">Balloon Twisting</div>
                  </li>
                  <li>
                    <div to="/arches">Balloon Arches</div>
                  </li>
                  <li>
                    <div to="/garlands">Balloon Garlands</div>
                  </li>
                  <li>
                    <div to="/clusters">Balloon Clusters</div>
                  </li>
                  <li>
                    <div to="/deliverables">Deliverables</div>
                  </li>
                  <li>
                    <div to="/centerpieces">Centerpieces</div>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>

          <Col>
            <div className="col">
              <a href="mailto:kevinsballoons@gmail.com">
                <div className="email">
                  <i class="fa fa-lg fa-envelope-o"></i>

                  <span class="footer-email">kevinsballoons@gmail.com</span>
                </div>
              </a>
              <br />
              <div>
                <a
                  className="btn btn-social-icon btn-instagram"
                  href="http://instagram.com/kevins.balloons"
                >
                  <i className="fa fa-instagram" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/"
                >
                  <i className="fa fa-facebook" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://https://www.linkedin.com/in/kevin-bice-927385133/"
                >
                  <i className="fa fa-linkedin" />
                </a>{" "}
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/"
                >
                  <i className="fa fa-youtube" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
