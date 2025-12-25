import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Wrapper = ({ token, handleLogout, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    handleLogout();
    navigate('/login');
  };

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div>
      {/* Header/Navigation */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-indigo-700 font-bold text-xl">🚌</span>
              </div>
              <span className="text-xl font-bold">BusTravel</span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/buses" 
                className="hover:text-indigo-200 transition duration-200 font-medium"
              >
                Browse Buses
              </Link>
              {token && (
                <>
                  
                  <Link 
                    to="/my-bookings" 
                    className="hover:text-indigo-200 transition duration-200 font-medium"
                  >
                    My Bookings
                  </Link>
                </>
              )}
              <Link 
                to="/contact" 
                className="hover:text-indigo-200 transition duration-200 font-medium"
              >
                Contact
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              {token ? (
                <div className="flex items-center space-x-4">
                  <div className="hidden md:block">
                    <span className="text-indigo-200">Welcome back!</span>
                  </div>
                  <button
                    onClick={logout}
                    className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition duration-200 shadow-md"
                  >
                    Logout
                  </button>
                </div>
              ) : !isAuthPage ? (
                <div className="flex items-center space-x-4">
                  <Link to="/login">
                    <button className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-indigo-700 transition duration-200 font-medium">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="px-6 py-2 bg-white text-indigo-700 rounded-lg hover:bg-indigo-50 transition duration-200 font-semibold">
                      Register
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BusTravel</h3>
              <p className="text-gray-400">Your journey begins with us. Safe, comfortable, and reliable bus travel.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/buses" className="hover:text-white">Browse Buses</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@bustravel.com</li>
                <li>+1 234 567 8900</li>
                <li>123 Travel St, City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} BusTravel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Wrapper;