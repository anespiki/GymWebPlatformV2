'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './page.css';
import axios from 'axios';
import Link from 'next/link'; // Import the Link component from next/link

export default function LoginPage() {

  // Initialize main variables
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Method to handle login
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend to authenticate
      const response = await axios.post('http://localhost:5001/api/authentication/login', {
        inputedUsername: username,
        inputedPassword: password,
      });

      // If the login is successful, navigate to the home page
      if (response.data.message === 'success') {
        router.push('/home');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h1 className="login-title" style={{ color: 'white' }}>Sarajevo City Gym</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"

          
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {/* Link to sign-up page */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-300">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-400 hover:text-blue-500">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
