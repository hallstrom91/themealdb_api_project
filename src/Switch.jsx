import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/CategoryList";
import About from "./pages/About";
import Login from "./pages/Login";
import CategoryItems from "./pages/CategoryItems";
import MealRecipe from "./pages/MealRecipe";
import SearchResult from "./pages/SearchResults";

export default function Switch() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorylist" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category/:strCategory" Component={CategoryItems} />
        <Route path="/recipe/:mealId" Component={MealRecipe} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </>
  );
}
