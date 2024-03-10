import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function PaginationItem({
  currentPage,
  allItems,
  itemsDisplay,
  paginate,
}) {
  const allPages = Math.ceil(allItems / itemsDisplay);

  return (
    <>
      {allItems > itemsDisplay && (
        <div className="d-flex justify-content-center">
          <Pagination>
            {/* Previous Page Arrow Button */}
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
            />
            {[...Array(Math.ceil(allPages)).keys()].map((number) => (
              <Pagination.Item
                key={number + 1}
                active={number + 1 === currentPage}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </Pagination.Item>
            ))}
            {/* Next Page Arrow Button */}
            <Pagination.Next
              disabled={currentPage === allItems}
              onClick={() => paginate(currentPage + 1)}
            />
          </Pagination>
        </div>
      )}
    </>
  );
}
