import React from "react";
import { Link } from "react-router-dom";
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
                <Link className="link" to="/">Home</Link>
              </li>
              <li>
                <Link className="link" to="/contact">Contact</Link>
              </li>
              <li>
                <Link className="link" to="/services">Services:</Link>
              </li>
              <li>
                <ul>
                  <li>
                    <Link className="link" to="/book">Balloon Twisting</Link>
                  </li>
                  <li>
                    <Link className="link" to="/arches"> Arches</Link>
                  </li>
                  <li>
                    <Link className="link" to="/garlands"> Garlands</Link>
                  </li>
                  <li>
                    <Link className="link" to="/columns"> Columns</Link>
                  </li>
                  <li>
                    <Link className="link" to="/centerpieces">Centerpieces</Link>
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
              <div className="social-icons">
                <a
                  className="btn  btn-instagram"
                  href="http://instagram.com/kevins.balloons"
                >
                  <i className="fa fa-instagram fa-lg" />
                </a>{" "}
                <a
                  className="btn btn-facebook"
                  href="http://www.facebook.com/"
                >
                  <i className="fa fa-facebook fa-lg" />
                </a>{" "}
                <a
                  className="btn btn-linkedin"
                  href="http://https://www.linkedin.com/in/kevin-bice-927385133/"
                >
                  <i className="fa fa-lg fa-linkedin" />
                </a>{" "}
                <a
                  className="btn btn-google"
                  href="http://youtube.com/"
                >
                  <i className="fa fa-lg fa-youtube" />
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
