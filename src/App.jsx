import { useState } from "react";
//import './App.css'
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { Watch } from "./components/Watch";
import { ErrorNotFound } from "./components/ErrorNotFound";
import { TeamDetail } from "./components/TeamDetail";
import { Play } from"./components/Play";
import { UseStateDemo3 } from "./components/UseStateDemo3";
<co></co>

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/usestatedemo1" element={<UseStateDemo1 />}></Route>
        <Route path="/usestatedemo2" element={<UseStateDemo2 />}></Route>
        <Route path="/usestatedemo3" element={<UseStateDemo3 />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/teamdetail" element= {<TeamDetail />}></Route>
        <Route path="/play/:name" element = {<Play/>}></Route>
        <Route path="/*" element ={<ErrorNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;