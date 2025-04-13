import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminInterviewScheduler = () => {
  const [applicants, setApplicants] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [form, setForm] = useState({ applicantId: '', programId: '', date: '' });

  useEffect(() => {
    axios.get('/api/users?role=applicant').then((res) => setApplicants(res.data));
    axios.get('/api/programs').then((res) => setPrograms(res.data));
  }, []);

  const schedule = async () => {
    await axios.post('/api/interviews', form);
    alert('Interview scheduled!');
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Schedule Interview</h3>
      <select className="w-full border p-2 mb-2" onChange={(e) => setForm({ ...form, applicantId: e.target.value })}>
        <option>Select Applicant</option>
        {applicants.map((a) => <option key={a._id} value={a._id}>{a.name}</option>)}
      </select>

      <select className="w-full border p-2 mb-2" onChange={(e) => setForm({ ...form, programId: e.target.value })}>
        <option>Select Program</option>
        {programs.map((p) => <option key={p._id} value={p._id}>{p.title}</option>)}
      </select>

      <input type="datetime-local" className="w-full border p-2 mb-2" onChange={(e) => setForm({ ...form, date: e.target.value })} />

      <button onClick={schedule} className="bg-green-600 text-white px-4 py-2 rounded">Schedule Interview</button>
    </div>
  );
};

export default AdminInterviewScheduler;
