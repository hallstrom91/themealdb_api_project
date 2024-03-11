import React, { useState, useEffect } from "react";
import { fetchData } from "../FetchData";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardCategories from "../components/CardCategories";
/* import my own category descriptions  */
import categoryDescription from "../data/Categories.json";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  /* API CALL */
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const data = await fetchData("categories.php");
        console.log(data);
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchAllCategories();
  }, []);

  /* retrive my own category descriptions */
  const retriveDescription = (categoryId) => {
    return categoryDescription[categoryId] || "No Description Avaliable";
  };

  return (
    <>
      {/* experiment.jsx display of categories */}
      <Container className="p-4">
        <div className="text-center pt-2 playfair-display-400">
          {/* Category Header */}
          <h1>Categories</h1>
        </div>
        <Row xl={1} lg={1} md={1} sm={1} xs={1}>
          <Container>
            {categories.map((category) => (
              <Col key={category.idCategory} className="justify-content-center">
                <Link to={`/category/${category.strCategory}`}>
                  <CardCategories
                    key={category.idCategory}
                    title={category.strCategory}
                    image={category.strCategoryThumb}
                    description={retriveDescription(category.idCategory)}
                  />
                </Link>
              </Col>
            ))}
          </Container>
        </Row>
      </Container>
    </>
  );
}
