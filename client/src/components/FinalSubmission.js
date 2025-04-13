import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinalSubmission = ({ applicantId }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get(`/api/results/applicant/${applicantId}`).then((res) => setResults(res.data));
  }, [applicantId]);

  const submit = async (programId) => {
    await axios.post('/api/results/submit', { applicantId, programId });
    alert('Application submitted!');
    window.location.reload();
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Final Submission & Admission Result</h2>
      {results.map((r) => (
        <div key={r._id} className="mb-3 p-2 border rounded">
          <p><strong>Program:</strong> {r.programId.title}</p>
          <p><strong>Status:</strong> {r.status}</p>
          <p><strong>Submitted:</strong> {r.submitted ? 'Yes' : 'No'}</p>
          {!r.submitted && (
            <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded" onClick={() => submit(r.programId._id)}>
              Submit Final Application
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default FinalSubmission;
