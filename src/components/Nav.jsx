import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PickFlixLogo from "../assets/pickflix-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open"
  }
  function closeMenu () {
    document.body.classList.remove("menu--open")
  }


  return (
    <nav>
      <div className="row">
        <div className="nav__container">
          <div className="navbar">
          <Link to="/">
              <div className="logo__wrapper">
                <FontAwesomeIcon
                  icon="fa-solid fa-film"
                  style={{ color: "#B197FC" }}
                  id="logo__film"
                />
                <img src={PickFlixLogo} alt="" className="logo" />
              </div>
            </Link>

            <div className="navbar__links">
              <Link to="/flix">
                <button className="button btn__find">Find Your Flix</button>
              </Link>
              <Link to="/">
                <div className="home__wrapper">
                  <FontAwesomeIcon
                    icon="fa-solid fa-house"
                    size="2xl"
                    id="home--navbar"
                  />
                  {/* <p className="white__text">HOME</p> */}
                </div>
              </Link>
            </div>
            <button className="btn__menu"  onClick={openMenu}>
              <FontAwesomeIcon icon="bars" />
            </button>
          </div>
          <div className="navbar__overlay"></div>

          <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/flix" className="menu__link" onClick={closeMenu}>
                Find
              </Link>
            </li>
            
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
