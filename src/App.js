import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/ConfigureStore";
import InputOption from "./components/input option/InputOption";
import "./App.css";
import Cards from "./components/card/Cards";

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="container">
        <InputOption />
        {<Cards />}
      </div>
    </Provider>
  );
}

export default App;
