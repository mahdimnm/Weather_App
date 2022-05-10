import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

function Cards(props) {
  return (
    <div className="card-container">
      {props.weatherForcast.length > 0 ? (
        props.weatherForcast.map((weather, key) => (
          <Card key={key} weather={weather} />
        ))
      ) : (
        <h1>Please Choose a City...</h1>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    weatherForcast: state.weatherSection.weatherForcast,
  };
};

export default connect(mapStateToProps)(Cards);
