import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3005/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // Login successful
      console.log('Login successful', data);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } else {
      // Login failed
      console.log('Login failed', data);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-900">
      <form className="w-72 space-y-4" onSubmit={loginSubmit}>
        <input
          className="w-full py-2 px-3 rounded text-white bg-black bg-opacity-30 border border-black border-opacity-30 shadow-inner"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full py-2 px-3 rounded text-white bg-black bg-opacity-30 border border-black border-opacity-30 shadow-inner"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-2 px-4 rounded text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
