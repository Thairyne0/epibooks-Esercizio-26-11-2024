import { Component } from "react";
import { Col, Row } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <Row>
        <Col className="bg-dark text-light">
          <h4>EpiBooks-2024</h4>
          <ul>
            <li>Informazioni</li>
            <li>Privacy</li>
            <li>About</li>
            <li>Aziende</li>
            <li>Tommaso Cesaro</li>
          </ul>
        </Col>
      </Row>
    );
  }
}

export default MyFooter;
