import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" exact element={<Login/> }></Route >
          <Route path="/register" exact element={<Register />}></Route >
        </Routes>

      </BrowserRouter>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
