import React, { useState } from 'react';
import axios from 'axios';

function AdminInterviewScheduler() {
  const [form, setForm] = useState({ applicantId: '', date: '', time: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/interviews/create', form);
    alert('Interview slot created!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow-md bg-white rounded">
      <input type="text" placeholder="Applicant ID" onChange={(e) => setForm({ ...form, applicantId: e.target.value })} />
      <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <input type="time" onChange={(e) => setForm({ ...form, time: e.target.value })} />
      <button type="submit">Create Interview Slot</button>
    </form>
  );
}

export default AdminInterviewScheduler;
