import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../css/Card.css";

export default function CardShow({ title, description, cardImage, imgAlt }) {
  return (
    <>
      <Card className="mb-2 bsr-card">
        <Card.Img
          variant="top"
          src={cardImage}
          alt={imgAlt}
          className="imgSize"
        />
        <Card.Body className="card-body">
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="listgroup-text">{title}</ListGroup.Item>
          </ListGroup>
          <Card.Text className="card-text">{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
