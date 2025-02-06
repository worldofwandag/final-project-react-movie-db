import React, { useState } from "react";
// import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Flix from "./pages/Flix";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsFlix from "./pages/DetailsFlix";


const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home setSearchResults={setSearchResults} />} />
          <Route path="/flix" exact element={<Flix searchResults={searchResults} setSearchResults={setSearchResults} />} />
          {/* <Route path="/flix/:imdbID" render = {<DetailsFlix movie={searchResults}/>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;