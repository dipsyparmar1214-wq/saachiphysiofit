import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Quote, HelpCircle } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const FAQAndReviews = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section style={{ padding: '5rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        {/* Testimonials */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="section-header">
            <div className="badge">Patient Testimonials</div>
            <h2>Trusted by Women Across Bardoli</h2>
            <p>Read real recovery experiences from patients treated at Sacchi Clinic.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {clinicData.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <Quote size={32} style={{ color: 'rgba(232, 146, 124, 0.4)', marginBottom: '1rem' }} />
                  
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: '#F59E0B' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" />
                    ))}
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    "{t.review}"
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary-dark)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="badge badge-secondary">Got Questions?</div>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before your first visit.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {clinicData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    border: isOpen ? '1px solid var(--color-primary)' : '1px solid var(--color-border)'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--color-primary-dark)'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <HelpCircle size={18} style={{ color: 'var(--color-secondary-dark)' }} />
                      {faq.question}
                    </span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.5rem 1.25rem 1.5rem',
                        fontSize: '0.95rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: '1.6',
                        borderTop: '1px dashed var(--color-border-light)'
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
