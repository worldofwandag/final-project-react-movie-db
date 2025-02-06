import React from "react";
import Searchbar from "../components/ui/Searchbar";

const Home = ({ setSearchResults }) => {
  return (
    <div className="search__container">
      <h1>Type Your Flix</h1>
      <Searchbar setSearchResults={setSearchResults} />
    </div>
  );
};

export default Home;