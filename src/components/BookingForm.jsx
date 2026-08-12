import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, FileText, Send, Sparkles, AlertCircle } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const BookingForm = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    selectedService: clinicData.services[0].title,
    preferredDate: '',
    preferredTimeSlot: 'Morning (9:00 AM – 12:00 PM)',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, selectedService: preselectedService }));
    }
  }, [preselectedService]);

  // Set min date to today (YYYY-MM-DD format)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!indianPhoneRegex.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select an appointment date';
    } else {
      const selected = new Date(formData.preferredDate);
      if (selected.getDay() === 0) {
        newErrors.preferredDate = 'Clinic is closed on Sundays. Please choose Mon-Sat.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setShowToast(true);

    // Format human-readable date
    const dateObj = new Date(formData.preferredDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const notesText = formData.additionalNotes.trim() ? formData.additionalNotes.trim() : 'N/A';

    // Construct formatted WhatsApp message with emojis
    const message = `Hello Saachi Physiotherapy & Ladies Fitness Clinic! 👋\n\nI would like to inquire about an appointment / consultation slot.\n\n🧑 Name: ${formData.fullName}\n📞 Contact: +91 ${formData.mobileNumber}\n🩺 Service: ${formData.selectedService}\n📅 Preferred Date: ${formattedDate}\n⏰ Preferred Time: ${formData.preferredTimeSlot}\n📝 Notes: ${notesText}\n\nPlease let me know your availability for this slot. Looking forward to your reply!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${clinicData.whatsappNumber}?text=${encodedMessage}`;

    // Redirect after slight delay for user toast perception
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 3000);
    }, 1200);
  };

  return (
    <section id="book" style={{ padding: '5rem 0', background: 'var(--color-surface)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge badge-secondary">Seamless WhatsApp Appointment</div>
          <h2>Book Your Consultation</h2>
          <p>
            Fill in your details below to generate a pre-filled WhatsApp booking request sent directly to our clinic team.
          </p>
        </div>

        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <form
            onSubmit={handleSubmit}
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              background: '#FFFFFF',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {/* Toast Notification */}
            {showToast && (
              <div
                style={{
                  background: '#25D366',
                  color: '#FFFFFF',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                <Sparkles size={20} />
                Redirecting to WhatsApp to send your booking confirmation...
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {/* Full Name */}
              <div>
                <label className="form-label">
                  <User size={16} /> Full Name <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Anjali Patel"
                  className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                />
                {errors.fullName && <div className="error-text">{errors.fullName}</div>}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="form-label">
                  <Phone size={16} /> Mobile Number (WhatsApp) <span style={{ color: 'red' }}>*</span>
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ padding: '0.8rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>+91</span>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`form-input ${errors.mobileNumber ? 'input-error' : ''}`}
                  />
                </div>
                {errors.mobileNumber && <div className="error-text">{errors.mobileNumber}</div>}
              </div>
            </div>

            {/* Service Selection */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">
                <Sparkles size={16} /> Select Required Service <span style={{ color: 'red' }}>*</span>
              </label>
              <select
                name="selectedService"
                value={formData.selectedService}
                onChange={handleChange}
                className="form-input"
              >
                {clinicData.services.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Not sure / General Consultation">Not sure / General Consultation</option>
              </select>
            </div>

            {/* Date & Time Slot Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {/* Preferred Date */}
              <div>
                <label className="form-label">
                  <Calendar size={16} /> Preferred Date <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  min={getMinDate()}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={`form-input ${errors.preferredDate ? 'input-error' : ''}`}
                />
                {errors.preferredDate && <div className="error-text">{errors.preferredDate}</div>}
              </div>

              {/* Preferred Time Slot */}
              <div>
                <label className="form-label">
                  <Clock size={16} /> Preferred Time Slot <span style={{ color: 'red' }}>*</span>
                </label>
                <select
                  name="preferredTimeSlot"
                  value={formData.preferredTimeSlot}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                  <option value="Afternoon/Evening (2:00 PM – 5:30 PM)">Afternoon/Evening (2:00 PM – 5:30 PM)</option>
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div style={{ marginBottom: '2rem' }}>
              <label className="form-label">
                <FileText size={16} /> Additional Notes / Symptoms (Optional)
              </label>
              <textarea
                name="additionalNotes"
                rows={3}
                value={formData.additionalNotes}
                onChange={handleChange}
                placeholder="Briefly describe your condition or main area of pain (e.g., lower back stiffness, knee pain after surgery...)"
                className="form-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                padding: '1.1rem',
                fontSize: '1.1rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <Send size={20} />
              {isSubmitting ? 'Preparing WhatsApp...' : 'Book via WhatsApp'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .form-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          margin-bottom: 0.5rem;
        }
        .form-input {
          width: 100%;
          padding: 0.8rem 1rem;
          font-size: 0.95rem;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          outline: none;
          background: #FFFFFF;
          transition: var(--transition);
        }
        .form-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(15, 110, 110, 0.15);
        }
        .input-error {
          border-color: red !important;
        }
        .error-text {
          color: red;
          font-size: 0.8rem;
          margin-top: 0.3rem;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};
