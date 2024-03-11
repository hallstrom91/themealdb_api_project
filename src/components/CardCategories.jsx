import React from "react";
import "../css/Experiment.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Placeholder from "react-bootstrap/Placeholder";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

export default function CardCategories({ title, image, description }) {
  return (
    <>
      <div className="p-4">
        {/*  data-bs-theme = dark? fix  card text? */}
        <Card bg="dark" data-bs-theme="dark">
          <Card.Header className="text-center">{title}</Card.Header>
          <Card.Body>
            <Stack direction="horizontal">
              <Image src={`${image}`} className="" fluid rounded />
              <Card.Text className="text-dark ">{description}</Card.Text>
            </Stack>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
