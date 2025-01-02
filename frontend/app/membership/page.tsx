'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './page.css';

// Defining Membership Object
interface Membership {
  title: string;
  explanation: string;
  price: string;
}

export default function MembershipsPage() {

  // Variables and their initial state
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMembership, setSelectedMembership] = useState<Membership | null>(null); // Track selected membership
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false); // Track if payment form is visible
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  // Fetching memberships when the user enters the screen
  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/memberships/return-memberships');
        setMemberships(response.data.memberships);
      } catch (err) {
        setError('Failed to fetch memberships');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberships();
  }, []);

  // Making clean UX and showing to the user whether it is loading and showing an error if it appears
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Handle Buy Now button click
  const handleBuyNow = (membership: Membership) => {
    setSelectedMembership(membership); // Set the selected membership
    setIsPaymentFormVisible(true); // Show the payment form
  };

  // Handle Cancel button click
  const handleCancel = () => {
    setIsPaymentFormVisible(false); // Hide the payment form
    setPaymentDetails({ cardNumber: '', expirationDate: '', cvv: '' }); // Reset payment details
  };

  // Handle form submission (Buy)
  const handleBuy = async () => {
    console.log('Payment details:', paymentDetails);
    // Simulate successful purchase and redirect to home page or do actual API call

    try {
      // Make a POST request to the backend to add membership
      const response = await axios.post('http://localhost:5001/api/memberships/add-membership', {
        membership: selectedMembership
      });

      // If the request is successful, show alert saying that it was success
      if (response.data.message === 'success') {
        alert('Purchase Successful!');

      } else {
      // If the request have failed, show alert saying that it was fail

        alert('Purchase Failed!');

      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred. Please try again.');
    }

    setIsPaymentFormVisible(false); // Hide the payment form
  };

  return (
    <div className="login-background">
      {/* Membership Boxes Section */}
      <div className="membership-boxes-container">
        {memberships.map((membership, index) => (
          <div className="membership-box" key={index}>
            <h3 className="text-2xl font-bold text-white mb-4">{membership.title}</h3>
            <p className="text-white mb-4">{membership.explanation}</p>
            <p className="text-xl font-semibold text-white mb-6">${membership.price} / month</p>
            <button className="btn-buy" onClick={() => handleBuyNow(membership)}>Buy Now</button>
          </div>
        ))}
      </div>

      {/* Payment Form Section */}
      {isPaymentFormVisible && (
        <div className="payment-form-container">
          <h2 className="text-2xl text-white mb-6">{selectedMembership?.title}</h2>

          <h2 className="text-2xl text-white mb-6">Enter Payment Details</h2>
          <form className="payment-form">
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm text-white mb-2">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                className="payment-input"
                value={paymentDetails.cardNumber}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                placeholder="Enter card number"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="expirationDate" className="block text-sm text-white mb-2">Expiration Date</label>
              <input
                type="text"
                id="expirationDate"
                className="payment-input"
                value={paymentDetails.expirationDate}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, expirationDate: e.target.value })}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cvv" className="block text-sm text-white mb-2">CVV</label>
              <input
                type="text"
                id="cvv"
                className="payment-input"
                value={paymentDetails.cvv}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                placeholder="Enter CVV"
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <button type="button" className="btn-cancel" onClick={handleCancel}>Cancel</button>
              <button type="button" className="btn-buy" onClick={handleBuy}>Buy</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
