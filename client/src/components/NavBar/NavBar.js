/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import "antd/dist/antd.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Login from "../../pages/login/Login";


function NavBar() {
  return (
    <div>
      <div className="navText">
        <a className="navbar-brand logo" href="/">
          Splash Print
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <form className="form-inline mr-auto" target="_self">
          <div className="form-group">
            <label htmlFor="search-field">
              <i className="fa fa-search" />
            </label>
            <input
              className="form-control search-field"
              type="search"
              name="search"
              id="search-field"
            />
          </div>
        </form>
        <div className="">
          <span className="navbar-text login">
            
              <Login/>
          
          </span>
          <Link to="/addUser" className="btn btn-light action-button" role="button" href="/">
            Sign Up
          </Link>
          
        </div>
      </div>
      <div className="nav_bar">
        <div className="header-dark">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                  {/* Impression numerique  */}
                  <li class="nav-item dropdown megamenu">
                    <a
                      id="megamneu"
                      href="/"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="nav-link dropdown-toggle font-weight-bold text-uppercase link-text"
                    >
                      Impression numérique
                    </a>
                    <div
                      aria-labelledby="megamneu"
                      class="dropdown-menu border-0 p-0 m-0"
                    >
                      <div class="container">
                        <div class="row bg-white rounded-0 m-0 shadow-sm">
                          <div class="col-lg-12 col-xl-12">
                            <div class="p-12">
                              <div class="row">
                                <div class="col-lg-6">
                                  <h6 class="font-weight-bold text-uppercase">
                                    Impression offset
                                  </h6>
                                  <ul class="list-unstyled">
                                    <li class="nav-item">
                                      <a href="/" class="nav-link  ">
                                        Carte de visite
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Flyer standard
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Flyer Fort Grammage
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Dépliant
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Brochures
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="col-lg-6 mb-4">
                                  <h6 class="font-weight-bold text-uppercase">
                                    Bureautique
                                  </h6>
                                  <ul class="list-unstyled">
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Invitations
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Etiquette
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Badge PVC
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Catalogue
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Diplôme
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Papier en tete
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Chemise
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Bloc note
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12 col-xl-12 px-0 d-none d-lg-block">
                            <img src="" alt="impression numerique" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Grand format  */}
                  <li class="nav-item dropdown megamenu">
                    <a
                      id="megamneu"
                      href="/"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="nav-link dropdown-toggle font-weight-bold text-uppercase link-text"
                    >
                      Grand Format
                    </a>
                    <div
                      aria-labelledby="megamneu"
                      class="dropdown-menu border-0 p-0 m-0"
                    >
                      <div class="container">
                        <div class="row bg-white rounded-0 m-0 shadow-sm">
                          <div class="col-lg-12 col-xl-12">
                            <div class="p-4">
                              <div class="row">
                                <div class="col-lg-6 mb-4">
                                  <h6 class="font-weight-bold text-uppercase">
                                    Grand format
                                  </h6>
                                  <ul class="list-unstyled">
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Impression Bâche
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Impression vinyle
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Impression vinyle transparent
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Impression vinyle micro-perforé
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Impression papier peint
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Impression Tissu
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="col-lg-6 mb-4">
                                  <h6 class="font-weight-bold text-uppercase">
                                    Supports Rigides
                                  </h6>
                                  <ul class="list-unstyled">
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Panneaux polypropyléne
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Panneaux mousse
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Panneaux plexiglass
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Panneaux pvc
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block">
                            <img src="" alt="frant format" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Structure PVL  */}
                  <li class="nav-item dropdown megamenu">
                    <a
                      id="megamneu"
                      href="/"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="nav-link dropdown-toggle font-weight-bold text-uppercase link-text"
                    >
                      Structure PVL
                    </a>
                    <div
                      aria-labelledby="megamneu"
                      class="dropdown-menu border-0 p-0 m-0"
                    >
                      <div class="container">
                        <div class="row bg-white rounded-0 m-0 shadow-sm">
                          <div class="col-lg-7 col-xl-8">
                            <div class="p-4">
                              <div class="row">
                                <div class="col-lg-6 mb-4">
                                  <h6 class="font-weight-bold text-uppercase">
                                    Structure PVL
                                  </h6>
                                  <ul class="list-unstyled">
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Roll-up
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        X-Banner
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Drapeaux Publicitaires
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Plaques plexiglass
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Press wall
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block">
                            <img src="" alt="PVL" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Impression numerique  */}
                  <li class="nav-item dropdown megamenu">
                    <a
                      id="megamneu"
                      href="/"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="nav-link dropdown-toggle font-weight-bold text-uppercase link-text"
                    >
                      Article Personnaliser
                    </a>
                    <div
                      aria-labelledby="megamneu"
                      class="dropdown-menu border-0 p-0 m-0"
                    >
                      <div class="container">
                        <div class="row bg-white rounded-0 m-0 shadow-sm">
                          <div class="col-lg-7 col-xl-8">
                            <div class="p-4">
                              <div class="row">
                                <div class="col-lg-6 mb-4">
                                  <h6 class="font-weight-bold text-uppercase">
                                    Flex / Sublimation
                                  </h6>
                                  <ul class="list-unstyled">
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Mug Blanc
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Mug magique
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Casquette
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        T-Shirt
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Sac en Tissu
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Cartable
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="col-lg-6 mb-4">
                                  <h6 class="font-weight-bold text-uppercase">
                                    Publicitée
                                  </h6>
                                  <ul class="list-unstyled">
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Bloc note
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Etiquette
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Agenda
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Porte document
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Porte clé
                                      </a>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        href="/"
                                        class="nav-link text-small pb-0 "
                                      >
                                        Tapis Souris
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block">
                            <img src="" alt="impression numerique" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

              
                  {/* contacter nous  */}
                  <li class="nav-item dropdown megamenu">
                    <a
                      id="megamneu"
                      href="/"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="nav-link dropdown-toggle font-weight-bold text-uppercase link-text"
                    >
                      Evenment  
                    </a>
                  </li>
               
                  {/* contacter nous  */}
                  <li class="nav-item dropdown megamenu">
                    <a
                      id="megamneu"
                      href="/"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="nav-link dropdown-toggle font-weight-bold text-uppercase link-text"
                    >
                      Contacter 
                    </a>
                  </li>
               
                </ul>
              </div>
            </div>
          </nav>
          <div className="container hero">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h1 className="text-center flash-text">Printing Colorful World</h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
