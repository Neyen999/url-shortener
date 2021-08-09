import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--started"></div>
      <div className="footer--details">
        <div className="footer--title">
          <h3>shortly</h3>
        </div>
        <div className="footer--features">
          <h3>Features</h3>
          <p>Link shortener</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="footer--features">
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="footer--features">
          <p>About</p>
          <p>Our team</p>
          <p>Carrers</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="footer--social">
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Pinterest</a>
        <a href="">Instagram</a>
      </div>
    </footer>
  )
}
