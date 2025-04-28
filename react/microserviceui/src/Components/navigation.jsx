// Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import { loginAsync } from "../Services/authservice";

const handleLogin = async () => {
    await loginAsync();
};

export const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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
              <li>
                <Link className="navbar-brand" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navbar-brand" to="/people">
                  People
                </Link>
              </li>
              <li>
                <button onClick={handleLogin}>Login (Hardcoded)</button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
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
    </>
  );
};

