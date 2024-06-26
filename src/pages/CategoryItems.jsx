import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../FetchData";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import CardCategories from "../components/CardCategories";
import PageSelector from "../components/PageSelector";

export default function CategoryItems() {
  const { strCategory } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);

  /* PageSelector Settings */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsDisplay = 6;

  /* PageSelector Settings */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const idxLastItem = (currentPage - 1) * itemsDisplay + itemsDisplay;
  const idxFirstItem = idxLastItem - itemsDisplay;
  const activeitems = categoryItems
    ? categoryItems.slice(idxFirstItem, idxLastItem)
    : [];

  /* API CALL */
  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        const data = await fetchData(`filter.php?c=${strCategory}`);
        setCategoryItems(data.meals);
      } catch (error) {
        console.error("Error fetching Category Items", error);
      }
    };
    fetchCategoryItems();
  }, [strCategory]);

  return (
    <>
      <Container className="p-4 playfair-display-400">
        {/* Category Items Header */}
        <div className="text-center pt-2">
          <h1>{strCategory}</h1>
        </div>

        {/* Display Categories with CardCategories Component */}
        <div className="p-4">
          <Row xl={3} lg={2} md={1} sm={1} xs={1}>
            {/* map function to pagination in page  */}
            {activeitems.map((item) => (
              <Col key={item.idMeal}>
                <Link to={`/recipe/${item.idMeal}`}>
                  <CardCategories
                    title={item.strMeal}
                    image={item.strMealThumb}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </div>

        {/* PageSelector Import - Splits subcategory items into several pages  */}
        <Container>
          <PageSelector
            currentPage={currentPage}
            allItems={categoryItems ? categoryItems.length : 0}
            itemsDisplay={itemsDisplay}
            paginate={paginate}
          />
        </Container>
      </Container>
    </>
  );
}
