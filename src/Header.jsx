import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import satukLogo from './images/satuk_logo.png';
import tukLogo from './images/tuk_logo.png';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle state for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on clicking a link
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={satukLogo} alt="SATUK Logo" className="h-12 mr-4" />
          <img src={tukLogo} alt="TUK Logo" className="h-12 mr-4" />
          <h1 className="text-2xl font-bold text-blue-800 whitespace-nowrap md:whitespace-normal">
            SATUK <br className="md:hidden" /> AWARDS 2024
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex md:flex-row md:space-x-8 ml-auto">
          <ul className="flex flex-row items-center space-x-8">
            <li>
              <Link 
                to="/"
                className={`block text-lg font-bold ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className={`block text-lg font-bold ${location.pathname === '/nomination' ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-300`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/vote"
                className={`block text-lg font-bold ${location.pathname === '/vote' ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-300`}
              >
                Vote
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center space-y-1 focus:outline-none"
        >
          <span className={`block h-1 w-6 bg-gray-800 transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-1 w-6 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-1 w-6 bg-gray-800 transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Navigation Links */}
        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg`}>
          <ul className="flex flex-col items-center p-4 space-y-4">
            <li>
              <Link 
                to="/"
                onClick={handleLinkClick}
                className={`block text-lg font-bold ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/nomination"
                onClick={handleLinkClick}
                className={`block text-lg font-bold ${location.pathname === '/nomination' ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-300`}
              >
                Nomination
              </Link>
            </li>
            <li>
              <Link 
                to="/vote"
                onClick={handleLinkClick}
                className={`block text-lg font-bold ${location.pathname === '/vote' ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-300`}
              >
                Vote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
