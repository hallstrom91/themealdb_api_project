import { React, useState } from "react";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import Switch from "./Switch";

function App() {
  return (
    <>
      <div>
        <NavigationMenu />
        <Switch />
        <Footer />
      </div>
    </>
  );
}

export default App;
