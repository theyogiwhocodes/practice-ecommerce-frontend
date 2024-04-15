import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen() {
  const { prod_id } = useParams();
  const product = products.find((p) => String(p._id) === prod_id);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        <i className="fa-solid fa-arrow-left"></i> Go Back
      </Link>
      <Row>
        <Col md={6} sm={12}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3} sm={12}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color="#f8e825"
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} sm={12}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price: </Col>
                <Col>
                  <strong>$ {product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status: </Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock == 0}
                >
                  Add to Cart
                </Button>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
