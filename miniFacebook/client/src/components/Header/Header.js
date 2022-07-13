import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, logout } from '../../actions/userActions';
import { useAlert } from "react-alert";


const Header = () => {
  const dispatch = useDispatch();
    // const alert = useAlert();
    const navigate = useNavigate();
    const { error, isAuthenticated, token } = useSelector((state) => state.user);
    useEffect(() => {
        if (error) {
            // alert.error(error);
            dispatch(clearErrors());
        }
        console.log(token)
    }, [dispatch, error, isAuthenticated]);

    function logoutUser() {
        dispatch(logout());
        console.log(isAuthenticated);
        // alert.success("Logout Successfully");
        //navigate('/login');
    }
    console.log(isAuthenticated)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
          {!isAuthenticated && (
            <ul class="navbar-nav mr-auto">
              <li class="nav-item p-2">
                <Link class="nav-link " to="/login">
                  <i class="fa-solid fa-right-to-bracket fs-4"></i>
                </Link>
              </li>
              <li class="nav-item p-2">
                <Link class="nav-link " to="/register">
                  <i class="fa-solid fa-user-plus fs-4"></i>
                </Link>
              </li>
            </ul>
          )}
          {isAuthenticated && (
            <ul class="navbar-nav mr-auto">
              <li class="nav-item p-2 pt-3">
                <Link to="/account" className=" nav-link">
                  <i className="fa-solid fa-message fs-4"></i>
                </Link>
              </li>
              <li class="nav-item p-2 pt-3">
                <Link to="/" className=" nav-link">
                  <i className="fa-solid fa-bell fs-4"></i>
                </Link>
              </li>
              <li class="nav-item p-2 pt-3">
                <Link to="/account" className=" nav-link">
                  <i className="fa-solid fa-user fs-4"></i>
                </Link>
              </li>
              <li class="nav-item p-2">
                <button
                  class="nav-link btn text-white fw-bold"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
          <div>
            {/* <Link to="/login</Link> */}

          </div>
          
          {/* <Link class="btn btn-light btn-outline-dark btn m-2 my-sm-0 " to="/login">
            Login
          </Link>
          <Link class="btn btn-outline-light m-2 my-sm-0" to="/register">
            Register
          </Link>
           */}{/* <button class="btn btn-light btn-outline-dark btn m-2 my-sm-0" routerLink="/login" type="submit">Login</button>
          <button class="btn btn-outline-light m-2 my-sm-0" routerLink="/register" type="submit">Register</button> */}
        </div>
      </nav>
    </div>
  )
}

export default Header