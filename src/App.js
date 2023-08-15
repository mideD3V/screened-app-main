import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

// import Button from "@material-ui/core/Button";

// COMPONENTS
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Movies from "./components/movies/Movies";
import Series from "./components/series/Series";
import Write from "./components/write/Write";
import Login from "./components/account/Login";
import Signup from "./components/account/SignUp";


import Searchbar from "./components/searchbar/Searchbar";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <>
      <Header />
      <Searchbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<Signup/>} />
        <Route path="/signup" element={<Login />} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
