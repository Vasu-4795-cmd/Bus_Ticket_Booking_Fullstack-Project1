import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">About Us</h1>

        <p className="text-lg leading-relaxed mb-6">
          Welcome to <strong>Bus Travels</strong>, your trusted partner for safe, reliable,
          and comfortable bus journeys. We are committed to making travel easier for everyone—
          from daily commuters to long-distance adventurers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">Our Mission</h2>
        <p className="mb-6 text-lg">
          Our mission is to provide a seamless travel booking experience through a modern,
          user-friendly platform. We combine affordability, comfort, and convenience to bring
          you the best travel experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">Why Choose Us?</h2>
        <ul className="list-disc ml-6 space-y-3 text-lg">
          <li><strong>Easy Online Booking:</strong> Book your bus tickets in minutes.</li>
          <li><strong>Comfort & Safety:</strong> Verified operators, clean buses, trained drivers.</li>
          <li><strong>24/7 Customer Support:</strong> We're here whenever you need us.</li>
          <li><strong>Affordable Prices:</strong> Travel smarter without breaking your budget.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">Our Story</h2>
        <p className="text-lg leading-relaxed mb-6">
          Founded with the goal of transforming bus travel, SwiftBus Travels started as a
          small booking service. Today, we connect thousands of passengers with hundreds of
          routes across the region, ensuring a smooth journey from start to finish.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-600">Connect With Us</h2>
        <p className="text-lg leading-relaxed">
          Have questions or feedback? We'd love to hear from you. Reach out to our support
          team anytime and let us help you travel better.
        </p>
      </div>
    </div>
  );
}
