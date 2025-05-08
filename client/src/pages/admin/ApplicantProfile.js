// src/pages/admin/ApplicantProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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

  if (!applicant) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Applicant Profile</h1>
      <div className="profile-container">
        <p><strong>Name:</strong> {applicant.name}</p>
        <p><strong>Email:</strong> {applicant.email}</p>
        <p><strong>Program:</strong> {applicant.program}</p>
        <p><strong>Status:</strong> {applicant.status}</p>
        <p><strong>Documents:</strong></p>
        <ul>
          {applicant.documents.map((doc, index) => (
            <li key={index}>
              <a href={doc.url} target="_blank" rel="noopener noreferrer">{doc.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApplicantProfile;
