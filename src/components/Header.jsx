import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Shortly</h1>
        {/* <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul> */}
      </div>
      <div>
        {/* <button>Login</button>
        <button>Signup</button> */}
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
};
