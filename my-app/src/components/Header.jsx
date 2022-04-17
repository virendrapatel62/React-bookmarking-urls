import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/cart/useCart";
import { useCartLength } from "../hooks/cart/useCartLength";
import { CartContext } from "./Cart/CartContextProvider";

export default function Header() {
  const numberOfItems = useCartLength();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/cart">
                Cart [ {numberOfItems} ]
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                to="/bookmarkable"
              >
                BookMarkAble
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/non-bookmarkable">
                Non-Bookmarkable
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
