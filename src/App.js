import React from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from "./components/details";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail" element={<Details />}>
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
