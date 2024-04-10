import React, { useState, useEffect } from "react";
import { fetchData } from "../FetchData";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import CardCategories from "../components/CardCategories";
import PageSelector from "../components/PageSelector";

export default function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async (query) => {
      try {
        const data = await fetchData(`search.php?s=${query}`);
        setSearchResults(data.meals);
      } catch (error) {
        console.error("Error fetching serach results.", error);
      }
    };
    fetchSearchResults(query);
  }, [query]);

  /* PageSelector Settings */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsDisplay = 6;

  /* PageSelector Settings */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const idxLastItem = (currentPage - 1) * itemsDisplay + itemsDisplay;
  const idxFirstItem = idxLastItem - itemsDisplay;
  const activeitems = searchResults
    ? searchResults.slice(idxFirstItem, idxLastItem)
    : [];
  return (
    <>
      <Container className="p-4">
        {/* Search Results Header */}
        <div className="text-center pt-2 playfair-display-400">
          <h1>Search Results for {query}</h1>
        </div>

        {/* Display Search Results with CardCategories Component */}

        <div className="p-4">
          {searchResults && searchResults.length > 0 ? (
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
          ) : (
            <div className="text-center">
              <p>No Results found... </p>
            </div>
          )}
        </div>
      </Container>
      {/* PageSelector split search results into several pages if needed */}
      <Container>
        <PageSelector
          currentPage={currentPage}
          allItems={searchResults ? searchResults.length : 0}
          itemsDisplay={itemsDisplay}
          paginate={paginate}
        />
      </Container>
    </>
  );
}
