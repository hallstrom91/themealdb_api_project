import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../css/CardCategories.css";

export default function CardCategories({ title, image, imgAlt }) {
  return (
    <>
      <Card className="mb-2 bsr-card">
        <Card.Img variant="top" src={image} alt={imgAlt} className="imgSize" />
        <Card.Body className="card-body">
          <ListGroup className="listgroup-body">
            <ListGroup.Item className="listgroup-text playfair-display-400">
              {title}
            </ListGroup.Item>
          </ListGroup>
          {/* <Card.Text className="card-text">{description}</Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
}
