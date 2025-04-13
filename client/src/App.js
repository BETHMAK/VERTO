import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicantDashboard from './pages/ApplicantDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<ApplicantDashboard />} />
        {/* Add login/register and admin dashboard here */}
      </Routes>
    </Router>
  );
}

export default App;
