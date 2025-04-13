import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicantDashboard from './pages/ApplicantDashboard';
import AdminLayout from './components/admin/AdminLayout';
import ApplicantsList from './pages/admin/ApplicantsList';
import ApplicantProfile from './pages/admin/ApplicantProfile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<ApplicantDashboard />} />
        <Route path="/admin" element={<AdminLayout><ApplicantsList /></AdminLayout>} />
        <Route path="/admin/applicants" element={<AdminLayout><ApplicantsList /></AdminLayout>} />
        <Route path="/admin/applicants/:id" element={<AdminLayout><ApplicantProfile /></AdminLayout>}
/>
        {/* Add login/register and admin dashboard here */}
      </Routes>
    </Router>
  );
}

export default App;
