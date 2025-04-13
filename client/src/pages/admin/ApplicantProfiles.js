// src/pages/admin/ApplicantProfile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApplicantProfile = () => {
  const { id } = useParams();
  const [applicant, setApplicant] = useState(null);

  useEffect(() => {
    axios.get(`/api/admin/applicants/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => setApplicant(res.data))
    .catch(err => console.error(err));
  }, [id]);

  const updateStatus = (status) => {
    axios.post(`/api/admin/applicants/${id}/status`, { status }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => setApplicant({ ...applicant, status }))
    .catch(err => console.error(err));
  };

  if (!applicant) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Applicant Profile</h1>
      <div className="bg-white p-6 rounded shadow space-y-4">
        <p><strong>Name:</strong> {applicant.name}</p>
        <p><strong>Email:</strong> {applicant.email}</p>
        <p><strong>Program:</strong> {applicant.program}</p>
        <p><strong>Status:</strong> <span className="uppercase">{applicant.status}</span></p>
        
        <div className="space-x-4 mt-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => updateStatus('approved')}
          >
            Approve
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => updateStatus('rejected')}
          >
            Reject
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Uploaded Documents</h2>
          <ul className="list-disc pl-5">
            {applicant.documents.map((doc, i) => (
              <li key={i}>
                <a
                  href={`/uploads/${doc}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {doc}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfile;
