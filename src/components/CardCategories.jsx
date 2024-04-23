import React from "react";
import {
  Card,
  ListGroup,
  Image,
  Placeholder,
  Stack,
  Container,
} from "react-bootstrap";

export default function CardCategories({ title, image, description }) {
  return (
    <>
      <div className="p-4">
        <Card bg="dark" data-bs-theme="dark">
          <Card.Header className="text-center">{title}</Card.Header>
          <Card.Body>
            <Stack direction="horizontal">
              <Image src={`${image}`} className="" fluid rounded />
              <Card.Text className="text-dark d-none d-md-block m-4">
                {description}
              </Card.Text>
            </Stack>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
