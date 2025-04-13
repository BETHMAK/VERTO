import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminApplicantTracker = ({ applicantId }) => {
  const [stages, setStages] = useState({
    documentSubmitted: false,
    interviewScheduled: false,
    interviewConfirmed: false,
    accepted: false,
    rejected: false
  });

  useEffect(() => {
    const fetchProgress = async () => {
      const res = await axios.get(`/api/progress/${applicantId}`);
      if (res.data?.stages) {
        setStages(res.data.stages);
      }
    };
    fetchProgress();
  }, [applicantId]);
  

  const handleToggle = (key) => {
    setStages({ ...stages, [key]: !stages[key] });
  };

  const handleUpdate = async () => {
    await axios.put(`/api/progress/${applicantId}`, { stages });
    alert("Progress updated.");
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">Update Applicant Progress</h3>
      <div className="space-y-2">
        {Object.keys(stages).map((stage) => (
          <label key={stage} className="block">
            <input
              type="checkbox"
              checked={stages[stage]}
              onChange={() => handleToggle(stage)}
              className="mr-2"
            />
            {stage}
          </label>
        ))}
      </div>
      <button onClick={handleUpdate} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
        Save Progress
      </button>
    </div>
  );
};

export default AdminApplicantTracker;
