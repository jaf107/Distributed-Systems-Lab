import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a class="navbar-brand m-3 pl-3" href="#">mini FaceBook</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <div class="container">

            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to={'/'}>Home</Link>
                {/* <a class="nav-link" href="#">Home</a> */}
              </li>

            </ul>
            
          </div>
          <div>
            {/* <Link to="/login</Link> */}

          </div>
          <Link class="btn btn-light btn-outline-dark btn m-2 my-sm-0 " to="/login">
            Login
          </Link>
          <Link class="btn btn-outline-light m-2 my-sm-0" to="/register">
            Register
          </Link>
          {/* <button class="btn btn-light btn-outline-dark btn m-2 my-sm-0" routerLink="/login" type="submit">Login</button>
          <button class="btn btn-outline-light m-2 my-sm-0" routerLink="/register" type="submit">Register</button> */}
        </div>
      </nav>
    </div>
  )
}

export default Header