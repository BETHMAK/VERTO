// src/pages/admin/AdminDashboard.js
import React from 'react';

import ProgramsPage from '../../pages/admin/ProgramsPage';
import ApplicantsList from '../../pages/admin/ApplicantsList';
import ApplicantProfile from '../../pages/admin/ApplicantProfile';
import { Routes, Route, useNavigate } from 'react-router-dom';
import '../../styles/GlobalStyles.css';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard admin-dashboard">
      
      <header className="header">
        <h1>Administrator Dashboard</h1>
      
      </header>

      <div className="sidebar">
        <ul>
          <li onClick={() => handleNavigation('/admin/applicants')}>Applicants</li>
          <li onClick={() => handleNavigation('/admin/programs')}>Programs</li>
          <li onClick={() => handleLogout("logout-button")}>Logout</li>
        </ul>
       
      </div>

      <div className="content">
        <Routes>+
          <Route path="/applicants" element={<ApplicantsList />} />
          <Route path="/applicants/:id" element={<ApplicantProfile />} />
          <Route path="/programs" element={<ProgramsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
