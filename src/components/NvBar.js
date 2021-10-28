import React from "react";
import logo from "../images/logo.png";
import profile from "../images/profile.jpg";
import cart from "../images/cart.png";
export default function NvBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={logo} alt="..."/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
        <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <img src={profile} alt="..." style={{width: '25px'}}/> Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <img src={cart} alt="..." style={{width: '15px'}}/> Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
