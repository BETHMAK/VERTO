import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token, role } = res.data;

      // Save JWT token
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirect based on role
      if (role === 'applicant') {
        navigate('/applicant/dashboard');
      } else if (role === 'admin') {
        navigate('/admin/dashboard');
      } else if (role === 'reviewer') {
        navigate('/reviewer/dashboard');
      } else {
        setError('Unknown role');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white">
  <form onSubmit={handleLogin} className="bg-white text-black p-8 rounded-xl shadow-xl w-96 space-y-4">
    <h2 className="text-3xl font-bold text-center text-indigo-700">Welcome Back</h2>

    {error && <div className="text-red-500">{error}</div>}

    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full p-3 border rounded-md"
      required
    />
    
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full p-3 border rounded-md"
      required
    />
    <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition">
      Log In
    </button>
    <p className="text-center text-sm">
      Don't have an account? <a className="text-blue-600 hover:underline" href="/register">Register</a>
    </p>
  </form>
</div>

  );
};

export default LoginPage;
