import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../FetchData";
import { Link } from "react-router-dom";
import Experiment from "../components/Experiment";
import SimpleList from "../components/SimpleList";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Pagination from "react-bootstrap/Pagination";
import PaginationItem from "../components/PaginationItem";

export default function CategoryItems() {
  const { strCategory } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);

  /* PaginationItem Settings */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsDisplay = 6;

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

  /* PaginationItem Settings */
  const idxLastItem = (currentPage - 1) * itemsDisplay + itemsDisplay;
  const idxFirstItem = idxLastItem - itemsDisplay;
  const activeitems = categoryItems
    ? categoryItems.slice(idxFirstItem, idxLastItem)
    : [];
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="text-center pt-2 playfair-display-400">
        {/* Category Items Header */}
        <h1>{strCategory}</h1>
      </div>
      <Container className="p-4">
        {/* experiment.jsx display of categories */}
        <div className="p-4">
          <Row xl={3} lg={2} md={1} sm={1} xs={1}>
            {/* map function to pagination in page  */}
            {activeitems.map((item) => (
              <Col key={item.idMeal}>
                <Link to={`/recipe/${item.idMeal}`}>
                  <Experiment title={item.strMeal} image={item.strMealThumb} />
                </Link>
              </Col>
            ))}

            {/*  {categoryItems.map((item) => (
              <div className="">
                <Col key={item.idMeal} className="">
                  <Experiment
                    key={item.idMeal}
                    title={item.strMeal}
                    image={item.strMealThumb}
                  />
                </Col>
              </div>
            ))} */}
          </Row>
        </div>

        {/* PaginationItem Import  */}
        <PaginationItem
          currentPage={currentPage}
          allItems={categoryItems ? categoryItems.length : 0}
          itemsDisplay={itemsDisplay}
          paginate={paginate}
        />

        {/* Select Page - Pagination Default Function In Page */}
        {/*         {categoryItems.length > itemsDisplay && (
          <div className="d-flex justify-content-center">
            <Pagination>
             
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
              />
              {[
                ...Array(Math.ceil(categoryItems.length / itemsDisplay)).keys(),
              ].map((number) => (
                <Pagination.Item
                  key={number + 1}
                  active={number + 1 === currentPage}
                  onClick={() => paginate(number + 1)}
                >
                  {number + 1}
                </Pagination.Item>
              ))}
              
              <Pagination.Next
                disabled={
                  currentPage === Math.ceil(categoryItems.length / itemsDisplay)
                }
                onClick={() => paginate(currentPage + 1)}
              />
            </Pagination>
          </div>
        )} */}
      </Container>
    </>
  );
}
