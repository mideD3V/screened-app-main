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
import ContactUs from "./components/contact/Contact";
import Reset from "./components/account/Reset";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
