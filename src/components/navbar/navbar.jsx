import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="topnav">
      <Link to="/">
        UserData
      </Link>

      
      <Link to="/cars">
        CarData
      </Link>
    </div>
  );
}
