import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import products from "../data/books/scifi.json";
import { Col, Container, Row } from "react-bootstrap";

class MyBooksCards extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5 mb-5 row-gap-2">
          {products.map((product) => {
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={product.asin}
                className="d-flex"
              >
                <Card style={{ width: "18rem" }} className="h-100">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Button variant="primary">{product.price}$</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default MyBooksCards;
