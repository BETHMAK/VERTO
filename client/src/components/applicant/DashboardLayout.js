// src/components/applicant/DashboardLayout.js
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MyApplications from '../../components/applicant/MyApplications';
import ApplicationProgress from '../../components/applicant/ApplicantProgress';
import ProgramList from '../../components/applicant/ProgramList';
import UploadDocuments from '../../components/applicant/UploadDocuments';
import ProgramSelector from '../../components/applicant/ProgramSelector';
import ApplicantInterviewView from '../../components/applicant/ApplicantInterviewView';
import '../../styles/GlobalStyles.css';

const DashboardLayout = () => {
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
        <h1>Applicant Dashboard</h1>
      </header>

      <div className="sidebar">
        <ul>
          <li onClick={() => handleNavigation('/applicant/programs')}>Programs</li>
          <li onClick={() => handleNavigation('/applicant/interviews')}>Interviews</li>
          <li onClick={() => handleNavigation('/applicant/progress')}>Application Status</li>
          <li onClick={() => handleNavigation('/applicant/program-selector')}>Program Selector</li>
          <li onClick={() => handleNavigation('/applicant/uploads')}>Upload Documents</li>
          <li onClick={() => handleNavigation('/applicant/applications')}>Applications</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      <div className="content">
        <Routes>
          <Route path="/programs" element={<ProgramList />} />
          <Route path="/interviews" element={<ApplicantInterviewView />} />
          <Route path="/progress" element={<ApplicationProgress />} />
          <Route path="/program-selector" element={<ProgramSelector />} />
          <Route path="/uploads" element={<UploadDocuments />} />
          <Route path="/applications" element={<MyApplications />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
