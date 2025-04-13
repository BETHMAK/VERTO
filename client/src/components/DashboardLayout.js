import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-1/5 p-4 bg-blue-100 min-h-screen">
        <h1 className="font-bold text-xl mb-4">Applicant Portal</h1>
        <nav className="flex flex-col gap-2">
          <Link to="/dashboard/programs" className="hover:text-blue-700">Programs</Link>
          <Link to="/dashboard/upload" className="hover:text-blue-700">Upload Docs</Link>
          <Link to="/dashboard/myapps" className="hover:text-blue-700">My Applications</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
