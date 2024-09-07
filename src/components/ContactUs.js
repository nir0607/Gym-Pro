import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    city: '',
    state: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
        <div >
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-us-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Enter Name '
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
            placeholder='Enter Phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
           placeholder='Enter City'
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder='Enter State'

          value={formData.state}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
        rows={5}
          id="message"
          name="message"
           placeholder='Enter Message'
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button style={{borderRadius:"10px"}} type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default ContactUs;
