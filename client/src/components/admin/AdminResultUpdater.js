import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminResultUpdater = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('/api/results/all').then((res) => setResults(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`/api/results/status/${id}`, { status });
    alert('Status updated!');
    window.location.reload();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-3">Set Application Results</h2>
      {results.map((r) => (
        <div key={r._id} className="p-2 mb-3 border rounded">
          <p><strong>Applicant:</strong> {r.applicantId.name}</p>
          <p><strong>Program:</strong> {r.programId.title}</p>
          <p><strong>Submitted:</strong> {r.submitted ? 'Yes' : 'No'}</p>
          <p><strong>Current Status:</strong> {r.status}</p>
          <select
            className="mt-2 border p-1"
            onChange={(e) => updateStatus(r._id, e.target.value)}
            defaultValue={r.status}
          >
            <option>Pending</option>
            <option>Accepted</option>
            <option>Rejected</option>
            <option>Waitlisted</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default AdminResultUpdater;
