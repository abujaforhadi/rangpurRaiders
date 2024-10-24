import React from "react";
import PropTypes from "prop-types";
import Hero from "./Hero";

function MainSection() {
  return (
    <div>
      <h1>main</h1>
      <Hero></Hero>
      <div className="flex justify-between py-5">
        <h3 className="font-bold text-xl">Available Players</h3>
        <div  className="flex gap-2">
          <button className="btn btn-outline font-bold text-xs">Available</button>
          <button className="btn btn-outline font-bold text-xs">Selected (0)</button>
        </div>
      </div>
    </div>
  );
}

MainSection.propTypes = {};

export default MainSection;
