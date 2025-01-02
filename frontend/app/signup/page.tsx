'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './page.css';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import axios from 'axios';


export default function SignUpPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      // Make a POST request to the backend to register user
      const response = await axios.post('http://localhost:5001/api/authentication/register', {
        inputedFullName: fullName, inputedEmail: email, inputedUsername: username, inputedPassword: password
      });

      // If the registration is successful, navigate to the login page
      if (response.data.message === 'success') {
        router.push('/');
      } else {
        //Print if there was some error. 
        console.log("There was some error!");
      }
    } catch (err) {
      console.error('Error during registration:', err);
      setError('An error occurred. Please try again.');
    }

  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="back-button"
          aria-label="Go Back"
        >
          {/* Back Arrow Icon */}
          <MdArrowBack />
        </button>
        <div className="heading-wrapper">
          <h1 className="heading-title-large">Register Now!</h1>
          <h5 className="heading-title-small">Sarajevo City Gym</h5>
        </div>

        <form onSubmit={handleSignUp}>
          {/* Form Inputs */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"

              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"

              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"

              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"

              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"

              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
