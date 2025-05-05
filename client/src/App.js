import React from 'react';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ApplicantDashboard from './pages/ApplicantDashboard';
import AdminLayout from './components/admin/AdminLayout';
import ApplicantsList from './pages/admin/ApplicantsList';
import ApplicantProfile from './pages/admin/ApplicantProfile';
import ProgramsPage from './pages/admin/ProgramsPage';

function App() {
  return (
    <Routes>
      {/* 🔁 Redirect from root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* 👇 Your existing routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<ApplicantDashboard />} />
      <Route path="/admin" element={<AdminLayout><ApplicantsList /></AdminLayout>} />
      <Route path="/admin/applicants" element={<AdminLayout><ApplicantsList /></AdminLayout>} />
      <Route path="/admin/applicants/:id" element={<AdminLayout><ApplicantProfile /></AdminLayout>} />
      <Route path="/admin/programs" element={<AdminLayout><ProgramsPage /></AdminLayout>} />
    </Routes>
  );
}

export default App;
