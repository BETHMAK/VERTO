// src/pages/admin/ProgramsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgramsPage = () => {
  const [programs, setPrograms] = useState([]);
  const [newProgram, setNewProgram] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    const res = await axios.get('/api/admin/programs', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setPrograms(res.data);
  };

  const addProgram = async () => {
    if (!newProgram) return;
    await axios.post('/api/admin/programs', { name: newProgram }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setNewProgram('');
    fetchPrograms();
  };

  const deleteProgram = async (id) => {
    await axios.delete(`/api/admin/programs/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    fetchPrograms();
  };

  const saveEdit = async (id) => {
    await axios.put(`/api/admin/programs/${id}`, { name: editingName }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setEditingId(null);
    setEditingName('');
    fetchPrograms();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Programs</h1>

      <div className="flex mb-4 space-x-2">
        <input
          type="text"
          placeholder="Add new program..."
          className="border px-2 py-1 rounded w-full"
          value={newProgram}
          onChange={(e) => setNewProgram(e.target.value)}
        />
        <button onClick={addProgram} className="bg-blue-600 text-white px-4 py-1 rounded">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {programs.map((program) => (
          <li key={program._id} className="flex justify-between items-center bg-white p-3 rounded shadow">
            {editingId === program._id ? (
              <>
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  className="border px-2 py-1 rounded w-full"
                />
                <button onClick={() => saveEdit(program._id)} className="ml-2 bg-green-600 text-white px-2 py-1 rounded">Save</button>
              </>
            ) : (
              <>
                <span>{program.name}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => {
                      setEditingId(program._id);
                      setEditingName(program.name);
                    }}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProgram(program._id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramsPage;
