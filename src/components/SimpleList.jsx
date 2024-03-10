import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

export default function SimpleList({ title, image, imageAlt }) {
  return (
    <>
      <ListGroup>
        <ListGroup.Item variant="dark">{title}</ListGroup.Item>
      </ListGroup>
    </>
  );
}
