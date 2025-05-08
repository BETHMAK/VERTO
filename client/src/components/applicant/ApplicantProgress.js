import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApplicantProgress = ({ applicantId }) => {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      const res = await axios.get(`/api/progress/${applicantId}`);
      setProgress(res.data.stages);
    };
    fetchProgress();
  }, [applicantId]);

  return (
    <div className="p-4 rounded bg-white shadow">
      <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li className={progress?.documentSubmitted ? 'text-green-600' : ''}>Document Submitted</li>
        <li className={progress?.interviewScheduled ? 'text-green-600' : ''}>Interview Scheduled</li>
        <li className={progress?.interviewConfirmed ? 'text-green-600' : ''}>Interview Confirmed</li>
        <li className={progress?.accepted ? 'text-green-600' : ''}>Accepted</li>
        <li className={progress?.rejected ? 'text-red-600' : ''}>Rejected</li>
      </ul>
    </div>
  );
};

export default ApplicantProgress;
