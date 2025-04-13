import React, { useState } from 'react';
import API from '../utils/api';

const UploadDocuments = () => {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('document', file);

    try {
      await API.post('/documents/upload', formData);
      setMsg("Uploaded successfully");
    } catch {
      setMsg("Failed to upload");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">Upload Documents</h2>
      {msg && <p className="text-green-600">{msg}</p>}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
        <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">Upload</button>
      </form>
    </div>
  );
};

export default UploadDocuments;
