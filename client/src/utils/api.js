import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import ApplicantsList from './pages/admin/ApplicantsList';
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLayout><ApplicantsList /></AdminLayout>} />
          <Route path="/admin/applicants" element={<AdminLayout><ApplicantsList /></AdminLayout>} />
          {/* Add other admin routes here */}
        </Routes>
      </Router>
    );
  }

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default App;
