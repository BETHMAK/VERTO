// src/components/admin/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/admin/applicants" className="hover:text-yellow-300">Applicants</Link></li>
          <li><Link to="/admin/programs" className="hover:text-yellow-300">Programs</Link></li>
          <li><Link to="/admin/notifications" className="hover:text-yellow-300">Notifications</Link></li>
          <li><Link to="/logout" className="hover:text-red-400">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
