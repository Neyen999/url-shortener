import React from 'react';
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="features">
      <div className="footer--started">
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>
      <div className="footer--details">
        <div className="footer--title">
          <h2>Shortly</h2>
        </div>
        <div className="footer--features detail1">
          <h3>Features</h3>
          <p>Link shortener</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="footer--features detail2">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="footer--features detail3">
          <h3>Company</h3>
          <p>About</p>
          <p>Our team</p>
          <p>Carrers</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="footer--social">
        <a href="https://www.facebook.com/">
          <img src={iconFacebook} alt="Facebook" />
        </a>
        <a href="https://twitter.com/?lang=es">
        <img src={iconTwitter} alt="Twitter" />
        </a>
        <a href="https://ar.pinterest.com/">
        <img src={iconPinterest} alt="Pinterest" />
        </a>
        <a href="https://www.instagram.com/?hl=es">
        <img src={iconInstagram} alt="Instagram" />
        </a>
      </div>
    </footer>
  )
}
