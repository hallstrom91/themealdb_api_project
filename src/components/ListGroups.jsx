import React from "react";
import "../css/ListGroups.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Placeholder from "react-bootstrap/Placeholder";

export default function ListGroups({ image, imgAlt, title, description }) {
  return (
    <>
      <Card>
        <Card.Header className="card-header-title">
          <h4 className="playfair-display-700">{title}</h4>
        </Card.Header>
        <ListGroup>
          <ListGroup.Item className="list-group-image">
            <Image src={image} alt={imgAlt} thumbnail />
          </ListGroup.Item>
          <ListGroup.Item className="list-group-item">
            <Placeholder xs={12} bg="dark" />
            <p className="playfair-display-400">{description}</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}
