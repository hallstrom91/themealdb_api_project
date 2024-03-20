import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/CardCategories.css";
import { ImYoutube2 } from "react-icons/im";

export default function CardContainer({
  title,
  image,
  imgAlt,
  category,
  youtube,
}) {
  return (
    <>
      <Card className="mb-2 bsr-card playfair-display-400">
        <Card.Img variant="top" src={image} alt={imgAlt} />
        <Card.Body className="card-body">
          <ListGroup className="listgroup-body">
            <ListGroup.Item className="listgroup-text">{title}</ListGroup.Item>
          </ListGroup>
          <Card.Text className="card-text">Category: {category}</Card.Text>
          <Card.Text className="card-text">
            <ImYoutube2 size={50} color="red" />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
