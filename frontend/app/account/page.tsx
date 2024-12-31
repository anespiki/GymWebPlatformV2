'use client';

import './page.css'; // Import the CSS for styling
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountPage() {

  // Initialize the router to handle logout
  const router = useRouter(); 

  // State to manage user details
  const [user] = useState({
    name: 'John Doe',
    weight: '70 kg',
    height: '180 cm',
  });

  // Handle logout
  const handleLogout = () => {
    router.replace('/');
  };

  return (
    <div className="account-background">
      {/* Account Info Section */}
      <div className="account-info">
        <h2 className="text-3xl font-bold text-white mb-4">Account Information</h2>
        <div className="user-info">
          <p className="text-xl text-white mb-2">Name: {user.name}</p>
          <p className="text-xl text-white mb-2">Weight: {user.weight}</p>
          <p className="text-xl text-white mb-4">Height: {user.height}</p>
        </div>

        {/* Logout Button */}
        <div className="account-buttons">
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Subscription Plan Section (Premium Membership) */}
      <div className="subscription-plan">
        <h2 className="text-3xl font-bold text-white mb-4">Subscription Plan</h2>
        <div className="plan-details text-white">
          <h3 className="text-xl font-semibold">Premium Membership - Active</h3>
          <p className="text-lg">You are currently subscribed to the Premium Membership. Enjoy unlimited access to all exclusive features, including priority booking, premium classes, and more!</p>
          <p className="text-xl font-semibold">Price: $50/month</p>
          <p className="text-lg">Your next billing date: 01/01/2025</p>
        </div>
        <button className="btn-manage">Manage Subscription</button>
      </div>
    </div>
  );
}
