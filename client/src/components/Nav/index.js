import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";


class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      //navbar-light bg-light
      <nav className="navbar navbar-light navbar-expand-lg mb-2">
        <Link className="navbar-brand" to="/">
          <span className="logo">Super Recipes</span>
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${this.state.open ? "" : "collapse "}navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Search
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/saved"
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Saved
              </Link>
            </li> */}

            <li>
              <a>
              <a className="fun" target="_blank" href="http://peiwren.com/fortune/">For fun</a>
              </a>
</li>

            {/* <li>
              <Link
                to="/login"
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Login
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
