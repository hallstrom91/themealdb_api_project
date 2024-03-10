import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/CardCategories.css";
import { ImYoutube2 } from "react-icons/im";

export default function CardRandom({
  randomTitle,
  randomImage,
  randomImgAlt,
  randomCategory,
  randomYoutube,
}) {
  return (
    <>
      <Card className="mb-2 bsr-card playfair-display-400">
        <Card.Img variant="top" src={randomImage} alt={randomImgAlt} />
        <Card.Body className="card-body">
          <ListGroup className="listgroup-body">
            <ListGroup.Item className="listgroup-text">
              {randomTitle}
            </ListGroup.Item>
          </ListGroup>
          <Card.Text className="card-text">
            Category: {randomCategory}
          </Card.Text>
          <Card.Text className="card-text">
            <a href={randomYoutube} target="_blank">
              <ImYoutube2 size={50} color="red" />
              {""} Watch Tutorial
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
