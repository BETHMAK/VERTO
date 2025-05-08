// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/GlobalStyles.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/admin">Admin Dashboard</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/admin/applicants">Applicants</Link>
        </li>
        <li>
          <Link to="/admin/programs">Progrms</Link>
        </li>
        <li>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
