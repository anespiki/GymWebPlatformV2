'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './page.css';

// Define the Merch Object
interface Merch {
  pathToImage: string;
  title: string;
  price: string;
}

export default function MerchPage() {
  // Variables and their initial state
  const [merchList, setMerchList] = useState<Merch[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMerch, setSelectedMerch] = useState<Merch | null>(null); // Track selected merch
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false); // Track if payment form is visible
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  // Fetching merch when the user enters the screen
  useEffect(() => {
    const fetchMerch = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/merch/return-merch');
        setMerchList(response.data.merchList);
      } catch (err) {
        setError('Failed to fetch merch items');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMerch();
  }, []);

  // Handling clean UX and showing to the user whether it is loading or showing an error
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Handle Buy Now button click
  const handleBuyNow = (merch: Merch) => {
    setSelectedMerch(merch); // Set the selected merch item
    setIsPaymentFormVisible(true); // Show the payment form
  };

  // Handle Cancel button click
  const handleCancel = () => {
    setIsPaymentFormVisible(false); // Hide the payment form
    setPaymentDetails({ cardNumber: '', expirationDate: '', cvv: '' }); // Reset payment details
  };

  // Handle form submission (Buy)
  const handleBuy = () => {
    console.log('Payment details:', paymentDetails);
    // Simulate successful purchase
    alert('Purchase Successful!');
    setIsPaymentFormVisible(false); // Hide the payment form
  };

  return (
    <div className="login-background">
      {/* Merch Content */}
      <div className="merch-container">
        {merchList.map((item, index) => (
          <div className="merch-box" key={index}>
            <img
              src={item.pathToImage}
              alt={item.title}
              className="merch-image"
            />
            <div className="merch-details">
              <h3 className="merch-title text-black">{item.title}</h3>
              <p className="merch-price">${item.price}</p>
              <button className="merch-button" onClick={() => handleBuyNow(item)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Form Section */}
      {isPaymentFormVisible && (
        <div className="payment-form-container">
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
              <button type="button" className="merch-button" onClick={handleBuy}>Buy</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
