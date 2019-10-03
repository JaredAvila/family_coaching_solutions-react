import React from "react";
import { Link } from "react-router-dom";

import classes from "./Footer.css";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Top}>
        <div className={classes.Left}>
          <h1 className={classes.Title}>Family Coaching Solutions</h1>
          <h3>Jay Harnden</h3>
          <h5>Certified Christian Counselor/Life Coach</h5>
          <p>80 Gilman Ave., Suite 31C</p>
          <p>Campbell, CA 95008</p>
          <p>(408) 449-3057</p>
        </div>
        <div className={classes.Right}>
          <p>Links</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <a
                href="https://www.jaredavila.com/staging-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.Bottom}>
        <p>
          &copy; <span id="year">2001</span> |
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.jaredavila.com/"
          >
            Jared Avila Designs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
