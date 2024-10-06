// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
