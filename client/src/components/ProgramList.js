import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const ProgramList = () => {
  const [programs, setPrograms] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get('/programs').then(res => setPrograms(res.data));
  }, []);

  const apply = async (programId) => {
    try {
      await API.post('/applications', { programId });
      setMessage('Application submitted!');
    } catch (err) {
      setMessage(err.response?.data?.msg || 'Failed to apply');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Available Programs</h2>
      {message && <p className="text-green-600">{message}</p>}
      <ul className="grid gap-4">
        {programs.map(prog => (
          <li key={prog._id} className="border p-3 rounded shadow">
            <h3 className="font-semibold">{prog.title}</h3>
            <p>{prog.description}</p>
            <button onClick={() => apply(prog._id)} className="bg-blue-500 text-white mt-2 px-3 py-1 rounded">Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramList;
