import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgramSelector = ({ onSelectProgram }) => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const res = await axios.get('/api/programs');
      setPrograms(res.data);
    };
    fetchPrograms();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Choose a Program</h2>
      {programs.map((program) => (
        <div key={program._id} className="mb-4 border p-3 rounded hover:bg-gray-50">
          <h3 className="text-lg font-semibold">{program.title} ({program.type})</h3>
          <p><strong>Duration:</strong> {program.duration}</p>
          <p><strong>Requirements:</strong> {program.requirements}</p>
          <p className="mt-1">{program.description}</p>
          <button
            onClick={() => onSelectProgram(program._id)}
            className="mt-2 bg-blue-600 text-white px-4 py-1 rounded"
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProgramSelector;
