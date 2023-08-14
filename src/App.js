import React from "react";
import "./App.css";

import { BrowserRouter,  Routes, Route } from 'react-router-dom'

// import Button from "@material-ui/core/Button";

// COMPONENTS
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Movies from "./components/movies/Movies";
import Series from "./components/series/Series";
import Write from "./components/write/Write";
import Searchbar from "./components/searchbar/Searchbar";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Searchbar/>
      {/* <Button variant='contained' size='large'>Hello</Button> */}

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/write" element={<Write/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
