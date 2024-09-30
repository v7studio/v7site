import React, { useState } from 'react';
import { db } from '../firebase'; // Import Firestore
import '../styles/ContactUs.css'; 
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState(''); // New state for handling errors
  const [loading, setLoading] = useState(false); // New state for handling loading

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess(''); // Clear success message on input change
    setError(''); // Clear error message on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      await addDoc(collection(db, 'contacts'), form); // Save form data to Firestore
      setSuccess('Message sent successfully!');
      setForm({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending message: ', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-hero-section">
        <h1>Contact</h1>
        <p>Contact us for more information</p>
      </div>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Please drop us a message or reach out to us using the details below.</p>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>
              <a
                href="https://maps.app.goo.gl/z9BqhSkRSodv7kXq8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Address: V7 STUDIO, No:46,P&K West Gate, Saravanampatti, Coimbatore-641035
              </a>
            </p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>
              <a href="tel:+916379916782">Phone: 6379916782</a>
            </p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>
              <a href="mailto:v7studio007@gmail.com">Email: v7studio007@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {success && <p className="success-message">{success}</p>}
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
