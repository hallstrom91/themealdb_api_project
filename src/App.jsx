import { React, useState } from "react";

import "./App.css";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavigationMenu />
      <Home />
      <Footer />
    </>
  );
}

export default App;
