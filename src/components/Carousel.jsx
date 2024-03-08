import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function SlideShow({ items }) {
  return (
    <>
      <Carousel>
        {items.map((item) => {
          <Carousel.Item interval={1000} key={item.idCategory}>
            <img src={item.strCategoryThumb} alt={item.strMeal} />
            <Carousel.Caption>
              <h4>{item.strCategory}</h4>
            </Carousel.Caption>
          </Carousel.Item>;
        })}
      </Carousel>
    </>
  );
}
