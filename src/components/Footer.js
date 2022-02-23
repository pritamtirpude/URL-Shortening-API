import React from "react";
import LogoFooter from "../assets/logo-footer.svg";
import {
  FaPinterest,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container" id="resources">
      <div className="footer-navigation">
        <div className="logo-footer">
          <a href="#/">
            <img src={LogoFooter} alt="logo" />
          </a>
        </div>
        <div className="footer-features">
          <ul className="footer-links">
            <strong>Features</strong>
            <li>
              <a href="#/">Link Shortening</a>
            </li>
            <li>
              <a href="#/">Branded Links</a>
            </li>
            <li>
              <a href="#/">Analytics</a>
            </li>
          </ul>
        </div>
        <div className="footer-features">
          <ul className="footer-links">
            <strong>Resources</strong>
            <li>
              <a href="#/">Blog</a>
            </li>
            <li>
              <a href="#/">Developers</a>
            </li>
            <li>
              <a href="#/">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-features">
          <ul className="footer-links">
            <strong>Company</strong>
            <li>
              <a href="#/">About</a>
            </li>
            <li>
              <a href="#/">Our Team</a>
            </li>
            <li>
              <a href="#/">Careers</a>
            </li>
            <li>
              <a href="#/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com/pritam.tirpude.1/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="social-icon" />
          </a>
          <a
            href="https://twitter.com/ptirpude1991"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://in.pinterest.com/" target="_blank" rel="noreferrer">
            <FaPinterest className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/pr.itam6519/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
