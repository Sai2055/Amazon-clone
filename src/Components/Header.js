import React, { Component } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FlagIndia from "../Components/Flag-India.webp";
import Logo from "../Components/Amazon-India-Logo.webp";
import { Link } from "react-router-dom";
import Cart from "./Cart";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header-Img">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <div className="header-Location">
        <div className="icon">
          <PlaceOutlinedIcon />
        </div>
        <div className="icon-des">
          <div className="location-add">Delivering to sai 524132</div>
          <div className="location">Update Venkatagiri</div>
        </div>
      </div>
      <div className="form">
        <div className="form-input">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="input-styl"
          />
        </div>
        <div className="form-search">
          <SearchOutlinedIcon className="custom-icon" />
        </div>
      </div>
      <div className="language">
        <div className="flag-logo">
          <img src={FlagIndia} className="flag-styl" />
        </div>
        <div className="language-name">EN</div>
      </div>
      <div className="user-info">
        <div className="sign">Hello, Sign in</div>
        <div className="Account">Account & List</div>
      </div>
      <div className="order-info">
        <div className="return">Returns</div>
        <div className="order">& Orders</div>
      </div>
      <Link to="/cart">
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-count">5</div>
            <div className="cart-logo">
              <ShoppingCartOutlinedIcon className="cartlogo" />
            </div>
          </div>
          <div className="cart-name">Cart</div>
        </div>
      </Link>
    </div>
  );
}
