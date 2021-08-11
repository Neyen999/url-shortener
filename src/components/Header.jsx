import React, { useState } from 'react';

export const Header = () => {

  const [hide, setHide] = useState(true);

  return (
    <header className="header">
      <div className="header--nav">
        <h1>Shortly</h1>
        <nav className={`navbar ${hide === true ? "hide" : "show"}`}>
          <ul>
            <li>
              <a href="#features">
                Features
              </a>
            </li>
            <li>
              <a href="#resources">
                Pricing
              </a>
            </li>
            <li>
              <a href="#company">
                Resources
              </a>
            </li>
          </ul>
          <hr />
          <div className="signup">
            <button className="login">Login</button>
            <button className="sign">Sign Up</button>
          </div>
        </nav>
      </div>
      <div>
        {/* <button>Login</button>
        <button>Signup</button> */}
        <i onClick={() => setHide(!hide)} className="fas fa-bars"></i>
      </div>
    </header>
  );
};
