import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                NEtflix Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/teamdetail">
                Teams
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/fundemo1">
                fundemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/employees">
                Employees
              </Link>
            </li>
              <li class="nav-item">
                <Link class="nav-link" to="/inputdemo1">
                  inputdemo1
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/inputdemo2">
                  inputdemo2
                </Link>
              </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                FormDemo1
              </Link>
            </li>
               <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                FormDemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
              FormDemo3
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
              FormDemo4
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};