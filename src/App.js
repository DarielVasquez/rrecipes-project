import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/recipe/:id" element={<Recipe />}></Route>
        <Route path="/recipes/:id" element={<Recipes />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
