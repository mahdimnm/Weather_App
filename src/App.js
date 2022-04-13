import React, { useState } from "react";
import InputOption from "./components/input option/InputOption";
import "./App.css";
import Cards from "./components/card/Cards";

function App() {
  const [selectedCity, setSelectedCity] = useState(false);
  return (
    <div className="container">
      <InputOption changeSelectedCity={selectedCity} />
      <Cards changeSelectedCity={selectedCity} />
    </div>
  );
}

export default App;
