import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function About() {
  return (
    <>
      <Container>
        <div className="p-4 playfair-display-400">
          <Row>
            <Col sm={true}>
              <h1 className="text-center playfair-display-700">About Us</h1>
              <div className=" pt-2 ">
                <p>
                  We are not just a group of food enthusiasts; we're a family of
                  flavor fanatics, a tribe of taste explorers, and a collective
                  of culinary adventurers with one common bond - our love for
                  all things delicious!
                </p>
                <p>
                  Embark on a journey with us as we celebrate the art of
                  indulgence. We're not your average foodies; we're connoisseurs
                  of comfort, champions of cravings, and aficionados of all that
                  makes your taste buds dance in delight.
                </p>
                <p>
                  Our collective is a melting pot of diverse palates, united by
                  the joy that comes with savoring each delectable bite. Whether
                  it's diving into a mountain of cheesy fries, sharing stories
                  over a steaming bowl of ramen, or indulging in the sweet
                  symphony of decadent desserts, we believe in the power of food
                  to bring people together.
                </p>
                <p>
                  Join us as we explore the culinary landscape, sharing recipes,
                  reviews, and the occasional food-related escapade. From guilty
                  pleasures to gourmet delights, we're here to amplify the joy
                  of every meal.
                </p>

                <p>
                  So, if you're passionate about food, a self-proclaimed food
                  critic, or just someone who appreciates the beauty of a
                  well-cooked dish, you've found your tribe. Let's savor the
                  flavors of life together at Flavorful Feasts!
                </p>

                <p>Eat, enjoy, and embrace the deliciousness of life!</p>
              </div>
            </Col>
            <Col sm={true}>
              <h1 className="text-center playfair-display-700">
                Become a Member!
              </h1>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
