
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../JS/action/UserAction";

import Login from "../../pages/login/Login";
import panier from "../../assets/panier.png";

import search from "../../assets/search.png";
import logo from "../../assets/logo.png";
import "antd/dist/antd.css";
import "./NavBar.css";
import { getOneCategory } from "../../JS/action/categoryAction";

function NavBar() {
  const listProd = useSelector((state) => state.cartReducer.cartItems);

  const listCategory = useSelector(
    (state) => state.categoryReducer.listCategory
  );
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const getCartCount = () => {
    return listProd.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <div>
      <div className="navText">
        <Link to="/">
          <img src={logo} alt="logo" width="100px" />
        </Link>

        <div className="form-group form-inline mr-auto space">
          <Link to="/search">
            <img src={search} alt="search" width="60px" />
            <span>Recherche</span>
          </Link>
        </div>

        <div className="nav_button">
          {!token ? (
            <>
              <span className="navbar-text login">
                <Login />
              </span>
              <div className="login">
                <Link
                  to="/addUser"
                  className="btn btn-light action-button"
                  role="button"
                >
                  Sign Up
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="login">
                <Link
                  to="/"
                  className="btn btn-primary action-button"
                  role="button"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Link>
              </div>
              <div className="login">
                <Link
                  to="/profile"
                  className="btn btn-info action-button"
                  role="button"
                >
                  Profile
                </Link>
              </div>
            </>
          )}

          <div>
            <span>{getCartCount()}</span>
            <Link to="/basketProduct">
              <img className="button_img" src={panier} alt="panier" />
            </Link>
          </div>
        </div>
      </div>
      <div className="nav_bar">
        <div className="header-dark">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                 
                  {listCategory.map((category) => (
                    <li class="nav-item dropdown megamenu">
                      <Link to={`/products`}
                        id="megamneu"
                        onClick={() => dispatch(getOneCategory(category._id))}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        class="nav-link dropdown-toggle font-weight-bold text-uppercase link-text"
                      >
                        {category.name}
                      </Link>
                      
                    </li>
                  ))}
                  {/* contacter nous  */}
                  <li class="nav-item dropdown megamenu">
                    <Link
                      id="megamneu"
                      to="/contact"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="nav-link dropdown-toggle font-weight-bold text-uppercase link-text"
                    >
                      Contacter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container hero">
            <div className="row">
              <Link to="/" className="text_none">
                <div className="col-md-8 offset-md-2">
                  <h1 className="text-center flash-text">
                    Printing Colorful World
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
