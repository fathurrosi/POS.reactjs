import React from 'react';
import Navigation from './Navigation';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Navigation />
      </div>
    </nav>

  );
};

export default Header;