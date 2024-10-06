// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">About</Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">Education</Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">Skills</Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
