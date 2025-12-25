import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
          Help Us
        </h1>

        {/* Info Section */}
        <div className="space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            We’re here to help! Whether you have questions about bookings,
            schedules, cancellations, or general inquiries, feel free to reach
            out to us anytime.
          </p>

          {/* Contact Details */}
          <div className="bg-indigo-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">
              Contact Information
            </h2>
            <ul className="space-y-2">
              <li>
                <strong>Email:</strong> support@bustravel.com
              </li>
              <li>
                <strong>Phone:</strong> +91 97019 94156
              </li>
              <li>
                <strong>Address:</strong> 548 Travel St, Cherukuwada
              </li>
            </ul>
          </div>

          {/* Bus Travel Info */}
          <div className="bg-purple-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              Bus Travel Information
            </h2>
            <p>
              We offer safe, comfortable, and reliable bus services across major
              cities. Our fleet is equipped with modern amenities, professional
              drivers, and regular maintenance checks to ensure a smooth travel
              experience.
            </p>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-gray-100 p-6 rounded-xl border">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Terms & Conditions
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>All bookings are subject to availability.</li>
              <li>
                Tickets once booked may be rescheduled but are non-refundable.
              </li>
              <li>
                Passengers must arrive at least 30 minutes before departure.
              </li>
              <li>Valid ID proof is mandatory during boarding.</li>
              <li>
                BusTravel is not responsible for delays due to weather or
                traffic conditions.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-10 text-gray-500">
          <p>Thank you for choosing BusTravel. Safe journeys!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
