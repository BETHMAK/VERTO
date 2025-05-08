// src/pages/admin/ProgramsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgramsPage = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/programs', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => setPrograms(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Programs</h1>
      <table className="w-full border bg-white">
        <thead>
          <tr>
            <th className="p-2 border">Program Name</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Details</th>
          </tr>
        </thead>
        <tbody>
          {programs.map(program => (
            <tr key={program._id}>
              <td className="p-2 border">{program.name}</td>
              <td className="p-2 border">{program.duration} years</td>
              <td className="p-2 border">
                <a href={`/admin/programs/${program._id}`} className="text-blue-500 hover:underline">View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgramsPage;
