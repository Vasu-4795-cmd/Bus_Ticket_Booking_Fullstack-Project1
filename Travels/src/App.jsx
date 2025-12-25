import React, { useState } from 'react'
import RegisterForm from './deepcomponents/RegisterForm'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './deepcomponents/LoginForm'
import BusList from './deepcomponents/BusList'
import BusSeats from './deepcomponents/BusSeats'
import UserBookings from './deepcomponents/UserBookings'
import Wrapper from './deepcomponents/Wrapper'
import Contact from "./deepcomponents/Contact";
import About from "./deepcomponents/About";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  const [selectedBusId, setSelectedBusId] = useState(null);

  const handleLogin = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    setToken(token);
    setUserId(userId);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setToken(null);
    setUserId(null);
    setSelectedBusId(null);
  };

  return (
    <div>
      <Wrapper token={token} handleLogout={handleLogout}>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/buses"
            element={<BusList onSelectBus={(id) => setSelectedBusId(id)} token={token} />}
          />

          <Route path="/bus/:busId" element={<BusSeats token={token} />} />

          <Route
            path="/my-bookings"
            element={<UserBookings token={token} userId={userId} />}
          />
        </Routes>
      </Wrapper>
    </div>
  );
};

export default App;
