import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApplicantInterviewViewer({ applicantId }) {
  const [interview, setInterview] = useState(null);
  

  useEffect(() => {
    axios.get(`/api/interviews/${applicantId}`).then(res => setInterview(res.data[0]));
  }, [applicantId]);

  const handleConfirm = async () => {
    await axios.put(`/api/interviews/confirm/${interview._id}`, {
      date: interview.date,
      time: interview.time
    });
    alert('Interview confirmed!');
  };

  return interview ? (
    <div className="p-4 shadow bg-white rounded">
      <p><strong>Date:</strong> {new Date(interview.date).toLocaleDateString()}</p>
      <p><strong>Time:</strong> {interview.time}</p>
      <button onClick={handleConfirm}>Confirm</button>
      {/* Add reschedule form here if needed */}
    </div>
  ) : <p>No interview scheduled yet.</p>;
}

export default ApplicantInterviewViewer;
