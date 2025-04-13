import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProgramManager = () => {
  const [programs, setPrograms] = useState([]);
  const [newProgram, setNewProgram] = useState({ title: '', type: '', description: '', duration: '', requirements: '' });

  const fetchPrograms = async () => {
    const res = await axios.get('/api/programs');
    setPrograms(res.data);
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const handleSubmit = async () => {
    await axios.post('/api/programs', newProgram);
    fetchPrograms();
    setNewProgram({ title: '', type: '', description: '', duration: '', requirements: '' });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/programs/${id}`);
    fetchPrograms();
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Program Manager</h3>

      <div className="mb-4 space-y-2">
        <input className="w-full border p-2" placeholder="Title" value={newProgram.title} onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })} />
        <select className="w-full border p-2" value={newProgram.type} onChange={(e) => setNewProgram({ ...newProgram, type: e.target.value })}>
          <option value="">Select Type</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Diploma">Diploma</option>
          <option value="Certificate">Certificate</option>
        </select>
        <input className="w-full border p-2" placeholder="Duration" value={newProgram.duration} onChange={(e) => setNewProgram({ ...newProgram, duration: e.target.value })} />
        <input className="w-full border p-2" placeholder="Requirements" value={newProgram.requirements} onChange={(e) => setNewProgram({ ...newProgram, requirements: e.target.value })} />
        <textarea className="w-full border p-2" placeholder="Description" value={newProgram.description} onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })} />
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Add Program</button>
      </div>

      <h4 className="font-semibold mt-6 mb-2">Existing Programs</h4>
      {programs.map((prog) => (
        <div key={prog._id} className="border p-3 rounded mb-2">
          <p className="font-medium">{prog.title} ({prog.type})</p>
          <button onClick={() => handleDelete(prog._id)} className="text-red-600 text-sm mt-1">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminProgramManager;
