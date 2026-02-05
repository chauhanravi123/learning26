import { useState } from "react";
//import './App.css'
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { Watch } from "./components/Watch";
import { ErrorNotFound } from "./components/ErrorNotFound";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch" element = {<Watch/>}></Route>
        <Route path="/errornotfound" element ={<ErrorNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;