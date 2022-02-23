import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="logo">
        <a href="#logo">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="navigation">
        <ul className="nav-links">
          <li>
            <a href="#statistics">Features</a>
          </li>
          <li>
            <a href="#links">Pricing</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
        </ul>

        <div className="login-signup">
          <a href="#login">Login</a>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
      <div className="hamburger-menu">
        {open ? (
          <CgClose
            size="4rem"
            color="hsl(0, 0%, 75%)"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FaBars
            size="4rem"
            color="hsl(0, 0%, 75%)"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      {open && <MobileNavigation />}
    </nav>
  );
};

export default Navbar;
