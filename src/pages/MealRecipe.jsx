import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../FetchData";
import { Link } from "react-router-dom";
import YoutubeIframe from "../components/YoutubeIframe";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function MealRecipe() {
  const { mealId } = useParams();
  const [mealRecipe, setMealRecipe] = useState([]);

  useEffect(() => {
    window.addEventListener("touchstart", { passive: true });
    window.addEventListener("scroll", { passive: true });

    const fetchMealRecipe = async () => {
      try {
        const data = await fetchData(`lookup.php?i=${mealId}`);
        setMealRecipe(data.meals[0]);
      } catch (error) {
        console.error("Error fetching meal details", error);
      }
    };
    fetchMealRecipe();
  }, [mealId]);

  return (
    <>
      <Container className="p-4">
        <Row>
          {/* Recipe Item Header */}
          <Col xs={12} md={12} className="text-center">
            <h1 className="playfair-display-400">{mealRecipe.strMeal}</h1>
          </Col>
        </Row>

        <Row className="pt-2">
          {/* Recipe Item Image Display */}
          <Col xs={12} md={4}>
            <Image
              src={mealRecipe.strMealThumb}
              thumbnail
              fluid
              className="border-2 border-black p-0 mb-1"
            />
            {/* Ingridients List Display*/}
          </Col>
          <Col xs={12} md={8} xl={8}>
            <YoutubeIframe youtubeLink={mealRecipe.strYoutube} />
          </Col>
        </Row>

        {/* Recipe Item Instructions Display */}
        {/* ListGroup Items Recipe */}
        <Row>
          <Col>
            <ListGroup className="pt-2 pb-2">
              <Card bg="dark" data-bs-theme="dark">
                <Card.Header
                  className="text-center playfair-display-400"
                  border="dark"
                >
                  Ingridients & measurement
                </Card.Header>
              </Card>
              {/* Ingredient Map and Display Function */}
              {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                const ingredient = mealRecipe[`strIngredient${index}`];
                const measure = mealRecipe[`strMeasure${index}`];
                return ingredient && measure ? (
                  <ListGroup.Item
                    variant="secondary"
                    className=""
                    key={index}
                  >{`${ingredient}: ${measure}`}</ListGroup.Item>
                ) : null;
              })}
            </ListGroup>
          </Col>

          {/* Recipe Instructions Display */}
          <Col xs={12} md={8} className="justify-content-center">
            <ListGroup className="pt-2 pb-2">
              <Card bg="dark" data-bs-theme="dark">
                <Card.Header
                  className="text-center playfair-display-400"
                  border="dark"
                >
                  Instructions
                </Card.Header>
              </Card>
              <ListGroup.Item variant="secondary">
                {mealRecipe.strInstructions}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
