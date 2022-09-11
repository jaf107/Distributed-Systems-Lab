import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useAlert } from "react-alert";
import { login, clearErrors } from "../../../redux/actions/userActions";

function Login({ history, location }) {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, /* alert, */ navigate, isAuthenticated, loginEmail]);

  return (
    <div class="container pb-5">
      <div class="row m-5  shadow-lg">
        <div class="col-md-6 d-none d-md-block"></div>
        <div class="col-md-6 bg-white p-4">
          <h3 class="pb-3 text-center fw-bold mt-5">SIGN IN</h3>
          <div class="form-style p-5">
            <form className="loginForm" onSubmit={loginSubmit}>
              <div class="form-group pb-3">
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div class="form-group pb-3">
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <div class="d-flex align-items-center justify-content-between">
                
              </div>
              <div class="pb-2 text-center mt-4">
                <button
                  type="submit"
                  class="btn btn-success w-50"
                  value={Login}
                >
                  Login
                </button>
              </div>
            </form>

            <div class="sideline">OR</div>

            <div class="pt-4 text-center">
              Dont have an Account?{" "}
              <Link
                to="/register"
                class=" text-success text-decoration-none fw-bold"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
