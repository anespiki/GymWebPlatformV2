'use client';

import './page.css'; // Import the CSS for styling
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Membership {
  title: string;
  explanation: string;
  price: string;
}

export default function AccountPage() {
  const router = useRouter();

  // State for handling memberships (list of memberships)
  const [membership, setMembership] = useState<Membership | null>(null);

  // State to manage user details
  const [user, setUser] = useState({
    username: '',
    email: '',
    fullName: '',
    weight: '70 kg',
    height: '180 cm',
  });

  // Handle logout
  const handleLogout = () => {
    router.replace('/');
  };

  useEffect(() => {
    // Fetch user data
    axios
      .get('http://localhost:5001/api/authentication/return-user')
      .then((response) => {
        const fetchedUser = response.data.user[0];
        setUser({
          username: fetchedUser.username,
          fullName: fetchedUser.name,
          email: fetchedUser.email,
          weight: fetchedUser.weight,
          height: fetchedUser.height,
        });
      })
      .catch((error) => console.error('Error fetching user info:', error));
  }, []);

  useEffect(() => {
    // Fetch membership data
    axios
      .get('http://localhost:5001/api/memberships/return-user-membership')
      .then((response) => {
        console.log(response.data);  // Log the response to check the data structure
        const fetchedMembership = response.data.userMembership; // Access the userMembership directly
        setMembership(fetchedMembership);  // Set the membership data directly
      })
      .catch((error) => console.error('Error fetching user memberships:', error));
  }, []);

  const hasActiveMembership = membership !== null; // Check if there is an active membership

  console.log('Membership:', membership); // Log to check the state of membership

  // Handle cancel membership action
  const handleCancelMembership = () => {
    // Confirm the cancellation
    const userConfirmed = window.confirm('Are you sure you want to cancel your membership?');

    if (userConfirmed) {
      // Call the backend API to cancel the membership
      axios
        .post('http://localhost:5001/api/memberships/cancel-membership')
        .then((response) => {
          console.log('Membership canceled:', response.data);
          // Update the membership state to null (no active membership)
          setMembership(null);
        })
        .catch((error) => console.error('Error canceling membership:', error));
    }
  };

  const handleBuyMembership = () => {
    router.push("/membership");
  }

  return (
    <div className="account-background">
      {/* Account Info Section */}
      <div className="account-info">
        <h2 className="text-3xl font-bold text-white mb-4">Account Information</h2>
        <div className="user-info">
          <p className="text-xl text-white mb-2">@{user.username}</p>
          <p className="text-xl text-white mb-2">{user.fullName}</p>
          <p className="text-xl text-white mb-2">{user.email}</p>
          <p className="text-xl text-white mb-2">Weight: {user.weight}</p>
          <p className="text-xl text-white mb-4">Height: {user.height}</p>
        </div>

        {/* Logout Button */}
        <div className="account-buttons">
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Subscription Plan Section */}
      <div className="subscription-plan">
        <h2 className="text-3xl font-bold text-white mb-4">Subscription Plan</h2>

        {hasActiveMembership ? (
          <div className="plan-details text-white">
            <h3 className="text-xl font-semibold text-white">
              <span className="font-bold mb-3">{membership.title}</span> - 
              <span className="text-green-500"> Active</span>
            </h3>
            <p className="text-lg text-white">{membership.explanation}</p>
            <p className="text-xl font-semibold text-white">Price: ${membership.price}/month</p>
            <p className="text-lg text-white">Your next billing date: 01/01/2025</p>
          </div>
        ) : (
          <p className="text-white">No active subscription found.</p>
        )}

        {/* Button for managing subscription */}
        <button 
          className={`btn-manage ${hasActiveMembership ? 'btn-red' : 'btn-green'}`}
          onClick={hasActiveMembership ? handleCancelMembership : handleBuyMembership}
        >
          {hasActiveMembership ? 'Cancel Membership' : 'Buy Membership'}
        </button>
      </div>
    </div>
  );
}
