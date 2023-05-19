import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg fw-bold"
        style={{ position: "absolute", top: 0, zIndex: 5 }}
      >
        <div className="container">
          <a className="navbar-brand text-light" href="#">
            Buddha
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-light active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
