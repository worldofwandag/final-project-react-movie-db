import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Searchbar from "./ui/Searchbar";

const Landing = () => {
  return (
    <div>
      <div className="search__container">
        <h1>Type Your Flix</h1>
        <Searchbar />
      </div>
    </div>
  );
};

export default Landing;
