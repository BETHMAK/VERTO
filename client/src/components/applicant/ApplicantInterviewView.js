import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicantInterviewView = ({ applicantId }) => {
  const [interview, setInterview] = useState(null);

  useEffect(() => {
    axios.get(`/api/interviews/applicant/${applicantId}`).then((res) => setInterview(res.data));
  }, [applicantId]);

  const confirmInterview = () => {
    axios.put(`/api/interviews/confirm/${interview._id}`).then(() => {
      alert('Interview confirmed!');
      setInterview({ ...interview, confirmed: true });
    });
  };

  if (!interview) return <p>No interview scheduled yet.</p>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Interview Details</h2>
      <p><strong>Date:</strong> {new Date(interview.date).toLocaleString()}</p>
      <p><strong>Status:</strong> {interview.confirmed ? 'Confirmed' : 'Pending'}</p>
      {!interview.confirmed && (
        <button onClick={confirmInterview} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
          Confirm Interview
        </button>
      )}
    </div>
  );
};

export default ApplicantInterviewView;
