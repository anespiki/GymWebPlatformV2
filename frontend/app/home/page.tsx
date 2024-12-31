import './page.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="login-background">
      

      {/* Title and Buttons */}
      <div className="home-title">
        <h2 className="text-3xl font-bold text-white mb-4">Our gym has everything you need</h2>
        <p className="text-white text-lg text-center max-w-2xl mx-auto mb-6">
          At Sarajevo City Gym, we provide top-notch equipment, certified trainers, and a wide range of fitness programs tailored to meet your individual goals. Whether you're a beginner or an experienced athlete, we have the resources to help you succeed. Join us today and become part of a community that values health and wellness.
        </p>
      </div>

      <div className="home-buttons mb-6">
        <button className="btn-explore"><Link href="/membership">Explore memberships</Link></button>
        <button className="btn-train"><Link href="/workouts">Your Workout</Link></button>
      </div>
    </div>
  );
}
