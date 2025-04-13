import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const MyApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get('/applications').then(res => setApplications(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">My Applications</h2>
      <ul className="space-y-2">
        {applications.map(app => (
          <li key={app._id} className="p-3 border rounded shadow">
            <strong>{app.programId.title}</strong><br />
            Status: <span className="font-semibold">{app.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyApplications;
