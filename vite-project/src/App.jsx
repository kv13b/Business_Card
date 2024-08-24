//import React from "react";
import Photo from "./Components/image";
import "./App.css";
import Info from "./Components/Info";
import Buttons from "./Components/Button";
import About from "./Components/About";
import Interests from "./Components/Interest";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="ctn">
      <Photo />
      <div className="ctn-mid-section">
        <Info />
        <Buttons />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
