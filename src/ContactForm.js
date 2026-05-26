import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '', // 'success', 'error', or ''
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const subjects = [
    'General Inquiry',
    'Partnership Opportunity',
    'Driver Application',
    'User Support',
    'Feedback & Suggestions'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.',
      });
      return;
    }

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await addDoc(collection(db, 'website_inquiries'), {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
        createdAt: serverTimestamp(),
      });

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting inquiry to Firestore:', error);
      setStatus({
        type: 'error',
        message: 'An error occurred while sending your message. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      {/* Background orbs for premium aesthetics */}
      <div className="contact-orb contact-orb-1" aria-hidden="true" />
      <div className="contact-orb contact-orb-2" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title" id="contact-heading">
            Have Questions? <span className="gradient-text">Contact Us</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to partner with us, drive with SIKAD, or need support, drop us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="contact-container">
          {/* Contact Details Card */}
          <div className="contact-info-card glass-card">
            <div>
              <h3 className="info-title">Contact Information</h3>
              <p className="info-desc">
                Reach out to us directly or fill out the form. We're here to help!
              </p>

              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <h4>Office Address</h4>
                    <p>Future Update</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <h4>Email Support</h4>
                    <p>aplikasyonsikad@gmail.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <h4>Phone Number</h4>
                    <p>Future update</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-brand">
              <img src="/sikad-logo.png" alt="SIKAD Logo" className="info-logo-img" />
              <span>SIKAD Community</span>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card glass-card">
            <form onSubmit={handleSubmit} noValidate>
              {status.message && (
                <div className={`status-banner ${status.type} animate-fade-in`}>
                  <span className="status-icon">
                    {status.type === 'success' ? '✓' : '⚠'}
                  </span>
                  <span className="status-text">{status.message}</span>
                </div>
              )}

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Dela Cruz"
                    disabled={loading}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <div className="select-wrapper">
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={loading}
                  >
                    {subjects.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you today?"
                  rows="5"
                  disabled={loading}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span>✉</span> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
