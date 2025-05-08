import React from 'react';
import { Route, Routes } from 'react-router-dom';


import DashboardLayout from '../../components/applicant/DashboardLayout';
import ProgramList from '../../components/applicant/ProgramList';
import UploadDocuments from '../../components/applicant/UploadDocuments';
import MyApplications from '../../components/applicant/MyApplications';



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
