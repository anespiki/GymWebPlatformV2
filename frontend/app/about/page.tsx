'use client';

import './page.css'; // Import the CSS for styling
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="about-background">
      {/* About Section */}
      <div className="about-content text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Why Choose Sarajevo City Gym?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Sarajevo City Gym is committed to providing a high-quality fitness experience for everyone, whether you are just starting your fitness journey or you are an experienced athlete. Our state-of-the-art equipment, expert trainers, and diverse classes will ensure that you have all the tools you need to reach your fitness goals. We are more than just a gym – we are a community of like-minded individuals who support and encourage each other.
        </p>
      </div>

      {/* History Section */}
      <div className="history-section text-center text-white py-10">
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Founded in 2010, Sarajevo City Gym has quickly become one of the top fitness destinations in the city. What started as a small, community-focused gym has grown into a full-service fitness center offering personalized training, a wide range of classes, and modern facilities. We are proud of our journey and excited for the future!
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="contact-section text-center text-white py-10">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-4">We’d love to hear from you! Get in touch with us for any inquiries, feedback, or to schedule a tour.</p>
        <p className="text-lg mb-2">📍 Address: 123 Fitness St, Sarajevo, Bosnia and Herzegovina</p>
        <p className="text-lg mb-2">📞 Phone: +387 33 123 456</p>
        <p className="text-lg mb-6">📧 Email: info@sarajevo-gym.com</p>

        <div className="social-media-links">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </div>
    </div>
  );
}
