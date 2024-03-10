import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../FetchData";
import { Link } from "react-router-dom";
import Experiment from "../components/Experiment";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";

export default function MealRecipe() {
  const { mealId } = useParams();
  const [mealRecipe, setMealRecipe] = useState([]);

  useEffect(() => {
    const fetchMealRecipe = async () => {
      try {
        const data = await fetchData(`lookup.php?i=${mealId}`);
        setMealRecipe(data.meals[0]);
        console.log(mealRecipe);
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
          {/* Header Col */}
          <Col xs={12} md={12} className="d-flex justify-content-center">
            <h1 className="playfair-display-400">{mealRecipe.strMeal}</h1>
          </Col>
        </Row>
        <Row className="pt-2">
          {/* Image Col */}
          <Col xs={6} md={4}>
            <Image src={mealRecipe.strMealThumb} thumbnail fluid />
            {/* Ingridients List */}
            <div className="">
              <ListGroup className="pt-2 pb-2">
                <Card bg="dark" data-bs-theme="dark">
                  <Card.Header className="text-center" border="dark">
                    Ingridients
                  </Card.Header>
                </Card>
                {/* Indgridients Map Function */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = mealRecipe[`strIngredient${index}`];
                  const measure = mealRecipe[`strMeasure${index}`];
                  return ingredient && measure ? (
                    <ListGroup.Item
                      variant="secondary"
                      key={index}
                    >{`${ingredient}: ${measure}`}</ListGroup.Item>
                  ) : null;
                })}
              </ListGroup>
            </div>
          </Col>
          <Col xs={12} md={8} className="justify-content-center">
            {/* ListGroup Items Recipe */}
            <h4 className="pt-2 playfair-display-400">Instructions:</h4>
            <p>{mealRecipe.strInstructions}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
