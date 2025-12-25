import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BusSeats = ({ token }) => {
  const [bus, setBus] = useState(null);
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [seatError, setSeatError] = useState('');

  const { busId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/buses/${busId}`);
        setBus(response.data);
        setSeats(response.data.seats || []);
      } catch (error) {
        console.log('Error in fetching details', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBusDetails();
  }, [busId]);

  const handleBook = async (seatId) => {
    if (!token) {
      alert("Please login to book a seat");
      navigate('/login');
      return;
    }

    setSelectedSeat(seatId);
    setSeatError('');
    setBookingLoading(true);

    try {
      await axios.post("http://localhost:8000/api/booking/",
        { seat: seatId },
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      );
      
      alert("🎉 Booking Successful!");
      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.id === seatId ? { ...seat, is_booked: true } : seat
        )
      );
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Booking failed. Please try again.";
      setSeatError(errorMsg);
      alert(errorMsg);
    } finally {
      setBookingLoading(false);
      setSelectedSeat(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!bus) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">Bus not found</h2>
      </div>
    );
  }

  const availableSeats = seats.filter(seat => !seat.is_booked).length;
  const totalSeats = seats.length;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Bus Header Card */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{bus.bus_name}</h1>
            <p className="text-indigo-100">Bus Number: {bus.number}</p>
          </div>
          <div className="mt-4 md:mt-0 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-lg font-bold">{availableSeats} seats available</p>
            <p className="text-sm text-indigo-100">Out of {totalSeats} total seats</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-indigo-200 mb-1">Origin</p>
            <p className="text-xl font-bold">{bus.origin}</p>
          </div>
          <div>
            <p className="text-sm text-indigo-200 mb-1">Destination</p>
            <p className="text-xl font-bold">{bus.destination}</p>
          </div>
          <div>
            <p className="text-sm text-indigo-200 mb-1">Departure</p>
            <p className="text-xl font-bold">
              {bus.start_time}
            </p>
            <p className="text-sm text-indigo-100">
              {bus.start_time}
            </p>
          </div>
          <div>
            <p className="text-sm text-indigo-200 mb-1">Arrival</p>
            <p className="text-xl font-bold">
              {bus.reach_time}
            </p>
            <p className="text-sm text-indigo-100">
              {bus.reach_time}
            </p>
          </div>
        </div>
      </div>

      {/* Seat Legend */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Seat Selection</h2>
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-emerald-500 rounded mr-2"></div>
            <span className="text-gray-700">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-500 rounded mr-2"></div>
            <span className="text-gray-700">Booked</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-amber-500 rounded mr-2"></div>
            <span className="text-gray-700">Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 bg-indigo-100 border-2 border-indigo-300 rounded mr-2"></div>
            <span className="text-gray-700">Driver's Seat</span>
          </div>
        </div>
      </div>

      {/* Seat Layout */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-center mb-8">
          <div className="w-3/4 h-3 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-gray-700 font-semibold">
              🚌 FRONT
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4 mb-8">
          {seats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => !seat.is_booked && handleBook(seat.id)}
              disabled={seat.is_booked || bookingLoading}
              className={`
                relative p-4 rounded-lg transition-all duration-200 transform hover:scale-105
                ${seat.is_booked 
                  ? 'bg-red-500 text-white cursor-not-allowed' 
                  : selectedSeat === seat.id
                  ? 'bg-amber-500 text-white ring-2 ring-amber-200'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }
                ${seat.seat_number === 'D1' ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-300' : ''}
              `}
            >
              {seat.is_booked && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-xs">✗</span>
                </div>
              )}
              <span className="font-bold text-lg">{seat.seat_number}</span>
            </button>
          ))}
        </div>

        {seatError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {seatError}
          </div>
        )}

        <div className="text-center">
          {!token ? (
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-200 font-semibold text-lg"
            >
              Login to Book Seats
            </button>
          ) : bookingLoading ? (
            <div className="inline-flex items-center px-8 py-3 bg-indigo-500 text-white rounded-lg">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </div>
          ) : availableSeats === 0 ? (
            <div className="text-red-600 font-semibold text-lg">
              All seats are booked for this journey
            </div>
          ) : (
            <p className="text-gray-600">
              Select a seat and click to book. {availableSeats} seats remaining.
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => navigate('/my-bookings')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        View Booking Details
      </button>
    </div>
  );
};

export default BusSeats;