import React from "react";
import Searchbar from "./ui/Searchbar";

const Landing = ({ setSearchResults }) => {
    return (
        <div className="search__container">
            <h1>Type Your Flix</h1>
            <Searchbar setSearchResults={setSearchResults} />
        </div>
    );
};

export default Landing;
