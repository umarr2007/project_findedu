import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            FindEdu
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition">
              Bosh sahifa
            </Link>
            <Link to="/centers" className="text-gray-600 hover:text-purple-600 transition">
              O'quv markazlar
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-purple-600 transition">
              Resurslar
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600 transition">
              Biz haqimizda
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition">
              Aloqa
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-purple-600 hover:text-purple-700 transition"
            >
              Kirish
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Ro'yxatdan o'tish
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-purple-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 