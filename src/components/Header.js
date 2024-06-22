import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiNewspaper } from "react-icons/gi";
function Header() {
  return (
    <>
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg shadow-sm bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-decoration-none ms-3 me-5 fw-semibold">
             <GiNewspaper/> AnyTimeNews
            </NavLink>

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

            <div className="collapse navbar-collapse justify-content-between"id="navbarNavDropdown">
              <ul className="ms-3 navbar-nav me-auto text-uppercase">
                <li className="nav-item me-2">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                    Category{" "}
                  </Link>
                  <ul className=" dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/business">
                        business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        science
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <form className="ms-3 d-flex me-5 " role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
