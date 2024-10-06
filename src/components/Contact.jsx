// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent from ${formData.name} at ${formData.email}: ${formData.message}`);
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-lg"
          ></textarea>
          <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
