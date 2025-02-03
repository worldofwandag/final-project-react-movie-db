import React from "react";
// import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Flix from "./pages/Flix";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/flix" exact element={<Flix />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
