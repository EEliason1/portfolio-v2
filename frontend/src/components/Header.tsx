import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="relative bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center h-[70vh] text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-12 py-4">
        <div className="text-2xl font-bold text-accent">
          <Link to="/">ShadowCraft</Link>
        </div>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-accent transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-accent transition">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-accent transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-accent transition">
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Craft Your Digital Legacy
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Showcase your creative journey in an immersive dark-themed portfolio
          that captures attention and leaves a lasting impression.
        </p>
        <Link
          to="/portfolio"
          className="inline-block px-4 py-3 bg-accent text-primaryBg font-medium rounded-md shadow-lg hover:bg-accent/90 transition w-fit"
        >
          Explore Projects →
        </Link>
      </div>
    </header>
  );
};

export default Header;
