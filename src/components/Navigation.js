import './App.css';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <div className="container flex">
        <nav className="nav-logo">
          <h1>
            <Link to="/" className="logo">Bookstore CMS</Link>
          </h1>
          <ul className="flex">
            <li>
              <Link to="/" className="my-link">Books</Link>
            </li>
            <li>
              <Link to="/categories" className="my-link">Categories</Link>
            </li>
          </ul>
        </nav>
        <div className="user-icon">
          <p><FaUserAlt /></p>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
