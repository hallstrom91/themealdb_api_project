import React, { useState, useEffect } from "react";
import CategoryCard from "../components/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://themealdb.com/api/json/v1/1/categories.php"
        );
        if (response.ok) {
          const results = await response.json();
          console.log(results.categories);
          setCategories(results.categories);
        } else {
          console.error("Failed to fetch random meal.");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <div className="p-4">
        <Row xs={1} md={4} className="g-3">
          {categories.map((category, idx) => (
            <Col key={idx} className="g-3">
              <CategoryCard
                key={category.idCategory}
                title={category.strCategory}
                /* description={category.strCategoryDescription} */
                cardImage={category.strCategoryThumb}
                imgAlt={category.strCategory}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
