import { React, useState } from "react";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <NavigationMenu />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
