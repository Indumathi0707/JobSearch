import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/user/login', { email, password })
      .then(result => {
        if (result.data === 'Success') {
          navigate('/home');
        } else {
          alert('Incorrect email or password');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="mt-20 h-[100vh] flex justify-center items-center bg-cover left-0 right-0"
         style={{ background: "url('../../public/BG-img.jpg')" }}>
      <div className="bg-violet-100 border-violet-600 border-2 rounded-md px-6 py-12 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-50 relative">
        <h1 className="font-bold text-violet-500 text-center text-4xl top-0 underline mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative my-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="block placeholder:text-black w-72 py-2 px-0 bg-transparent border-b-2 border-violet-400 focus:outline-none focus:border-violet-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-2">
            <input
              type="password"
              placeholder="Enter your password"
              className="block placeholder:text-black w-72 py-2 px-0 bg-transparent border-b-2 border-violet-400 focus:outline-none focus:border-violet-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center mt-7 bg-violet-400 p-2 font-bold rounded-lg cursor-pointer duration-200 hover:bg-violet-500">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="mt-2">
          <a href='/RegisterPage'>
            New Here? <span className="text-violet-500 underline font-bold">Register</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;