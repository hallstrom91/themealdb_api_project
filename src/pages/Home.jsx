import React, { useState, useEffect } from "react";
import "../css/Home.css";
import { fetchData } from "../FetchData";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardRandom from "../components/CardRandom";
import Badge from "react-bootstrap/Badge";
import { GiKnifeFork } from "react-icons/gi";

export default function Home() {
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        const data = await fetchData("random.php");
        console.log(data);
        setRandomMeal(data.meals);
      } catch (error) {
        console.error("Error fetchin random meal suggestion", error);
      }
    };
    fetchRandomMeal();
  }, []);

  return (
    <>
      <Container>
        <div className="p-4">
          <Row>
            <Col sm={true} className="col-one-home" id="random-meal">
              <h1 className="h1-header-home playfair-display-900 ">
                <GiKnifeFork /> Welcome to MealDB <GiKnifeFork />
              </h1>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="pt-4 col-two-home">
              <h3 className="h3-header-home playfair-display-400">
                Explore the World of Food
              </h3>
              <p className="playfair-display-400 m-3">
                Embark on a delightful journey of flavors and aromas with
                MealDB, your ultimate destination for culinary inspiration.
                Whether you're a seasoned chef or a kitchen novice, our
                extensive collection of mouthwatering recipes is here to spark
                your creativity and satisfy your taste buds.
              </p>
              <p className="playfair-display-400 m-3">
                At MealDB, we curate a diverse selection of recipes from around
                the world, each meticulously crafted to bring joy to your dining
                table. From savory mains to delectable desserts, our recipes are
                designed to suit every palate and occasion.
              </p>
              <p className="playfair-display-400 m-3">
                Featuring a daily special handpicked just for you, MealDB offers
                a tantalizing glimpse into the world of gastronomy. Discover new
                and exciting dishes with our "Dish of the Day" recommendations
                sourced from TheMealDB API. Each day brings a unique culinary
                adventure, ensuring you never run out of delightful surprise
              </p>
              <p className="playfair-display-400 m-3">
                Feel free to explore our recipe categories, where you'll find an
                array of dishes ranging from comforting classics to exotic
                delicacies. Unleash your inner chef, experiment with flavors,
                and create unforgettable meals in the comfort of your own
                kitchen.
              </p>
              <p className="playfair-display-400 m-3">
                MealDB is not just a recipe hub; it's a community of food
                enthusiasts sharing the joy of cooking. Join us on this
                gastronomic expedition, and let the aroma of delicious creations
                fill your home.
              </p>
              <p className="playfair-display-400 m-3">
                Get ready to elevate your cooking experience with MealDB. Your
                next culinary masterpiece awaits!
              </p>
            </Col>
            <Col lg={2} className="pt-4 col-three-home">
              <h3 className="h3-header-home playfair-display-400">
                Todays Suggestion
              </h3>
              {randomMeal.map((suggestion) => (
                <div key={suggestion.idMeal}>
                  <CardRandom
                    key={suggestion.idMeal}
                    randomTitle={suggestion.strMeal}
                    randomImage={suggestion.strMealThumb}
                    randomImgAlt={suggestion.strMeal}
                    randomCategory={suggestion.strCategory}
                    randomYoutube={suggestion.strYoutube}
                  />
                </div>
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
