// src/pages/admin/ApplicantsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicantsList = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/applicants', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(res => setApplicants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Applicants</h1>
      <table className="w-full border bg-white">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(applicant => (
            <tr key={applicant._id}>
              <td className="p-2 border">{applicant.name}</td>
              <td className="p-2 border">{applicant.email}</td>
              <td className="p-2 border">{applicant.status}</td>
              <td className="p-2 border">
                <a href={`/admin/applicants/${applicant._id}`} className="text-blue-500 hover:underline">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantsList;
