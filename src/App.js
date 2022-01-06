import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home";
import Error from "./pages/error";
// Components
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
