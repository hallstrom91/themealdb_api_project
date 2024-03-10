import React, { useState, useEffect } from "react";
import "../css/Categories.css";
import { fetchData } from "../FetchData";
import CardCategories from "../components/CardCategories";
import ListGroups from "../components/ListGroups";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

import Experiment from "../components/Experiment";

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
      {/*     <div className="p-4">
        <Row xl={5} lg={5} md={4} sm={2} xs={1} className="g-2">
          {categories.map((category) => (
            <Col className="g-2" key={category.idCategory}>
              <ListGroups
                key={category.idCategory}
                image={category.strCategoryThumb}
                imgAlt={category.strCategory}
                title={category.strCategory}
                description={retriveDescription(category.idCategory)}
              />
            </Col>
          ))}
        </Row>
      </div> */}

      {/* experiment.jsx display of categories */}
      <Container className="p-4">
        <Row xl={1} lg={1} md={1} sm={1} xs={1}>
          <Container>
            {categories.map((category) => (
              <Col key={category.idCategory} className="justify-content-center">
                <Link to={`/category/${category.strCategory}`}>
                  <Experiment
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

    /*     
Alternativ One
<>
      <div className="p-4">
        <Row xs={2} md={5}>
          /* <Row xs={1} md={4} className="g-3"> 
          {categories.map((category, idx) => (
            <Col key={idx} className="g-3">
              <CardCategories
                key={category.idCategory}
                categoryTitle={category.strCategory}
                /* description={category.strCategoryDescription} 
                categoryImage={category.strCategoryThumb}
                categoryImgAlt={category.strCategory}
              />
            </Col>
          ))}
          /*  </Row> 
        </Row>
      </div>
    </> */
  );
}
