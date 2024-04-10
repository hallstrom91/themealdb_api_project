import React, { useState, useEffect } from "react";
import { fetchData } from "../FetchData";
import { Link } from "react-router-dom";
import { Container, Col, Row, Badge, Stack } from "react-bootstrap";
import PageSelector from "../components/PageSelector";
import CardCategories from "../components/CardCategories";
/* import my own category descriptions  */
import categoryDescription from "../data/Categories.json";

//make "most popular" categories choices and pagination of all categories
//Cake / Dessert
import { GiCakeSlice } from "react-icons/gi";
//Meat / Steak
import { LuBeef } from "react-icons/lu";
// Vegan / Vegetarian
import { LuVegan } from "react-icons/lu";
// Chicken
import { GiChicken } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  /* PageSelector Settings */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsDisplay = 4;

  /* PageSelector Settings */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const idxLastItem = (currentPage - 1) * itemsDisplay + itemsDisplay;
  const idxFirstItem = idxLastItem - itemsDisplay;
  const activeitems = categories
    ? categories.slice(idxFirstItem, idxLastItem)
    : [];

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
      <Container className="p-4 playfair-display-400">
        <div className="text-center pt-2">
          {/* Category Header */}
          <h1 className="playfair-display-700">Categories</h1>
        </div>

        {/* TOP CATEGORIES */}
        <Row className="pt-4">
          <Col className="d-flex justify-content-center pb-4">
            {/* LINK TO RESPECTIVE CATEGORY/SUBCATEGORY */}
            <Stack direction="horizontal" gap={4}>
              {/* BEEF */}
              <Link to="/category/Beef">
                <div>
                  <Badge pill bg="dark">
                    <LuBeef size={60} />
                  </Badge>
                  <h6 className="text-center">Beef</h6>
                </div>
              </Link>
              {/* Chicken */}
              <Link to="/category/Chicken">
                <div>
                  <Badge pill bg="dark">
                    <GiChicken size={60} />
                  </Badge>
                  <h6 className="text-center">Chicken</h6>
                </div>
              </Link>
              {/* VEGAN/VEGETARIAN */}
              <Link to="/category/Vegetarian">
                <div>
                  <Badge pill bg="dark">
                    <LuVegan size={60} />
                  </Badge>
                  <h6 className="text-center">Vegetarian</h6>
                </div>
              </Link>
              {/* DESSERT */}
              <Link to="/category/Dessert">
                <div>
                  <Badge pill bg="dark">
                    <GiCakeSlice size={60} />
                  </Badge>
                  <h6 className="text-center">Dessert</h6>
                </div>
              </Link>
            </Stack>
          </Col>
        </Row>

        {/* List All Categories with Pagination */}
        <Row xl={1} lg={1} md={1} sm={1} xs={1}>
          <Container>
            {activeitems.map((category) => (
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
        {/* PageSelector Import - Splits subcategory items into several pages  */}
        <Container>
          <PageSelector
            currentPage={currentPage}
            allItems={categories ? categories.length : 0}
            itemsDisplay={itemsDisplay}
            paginate={paginate}
          />
        </Container>
      </Container>
    </>
  );
}
