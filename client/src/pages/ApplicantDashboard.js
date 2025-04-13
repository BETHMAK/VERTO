import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import ProgramList from '../components/ProgramList';
import UploadDocuments from '../components/UploadDocuments';
import MyApplications from '../components/MyApplications';

const ApplicantDashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="programs" element={<ProgramList />} />
        <Route path="upload" element={<UploadDocuments />} />
        <Route path="myapps" element={<MyApplications />} />
      </Routes>
    </DashboardLayout>
  );
};

export default ApplicantDashboard;
