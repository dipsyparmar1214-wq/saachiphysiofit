import React from 'react';
import { Bone, Activity, Zap, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { clinicData } from '../config/clinicData';
import treatmentImg from '../assets/images/treatment.png';

export const Services = ({ onSelectService }) => {
  const iconComponents = {
    Bone: <Bone size={28} />,
    Activity: <Activity size={28} />,
    Zap: <Zap size={28} />,
    Sparkles: <Sparkles size={28} />
  };

  const handleBookService = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const bookElem = document.getElementById('book');
    if (bookElem) {
      bookElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" style={{ padding: '5rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-up">
          <div className="badge">Specialized Healthcare & Wellness</div>
          <h2>Our Core Treatments & Services</h2>
          <p>
            Tailored orthopedic care, advanced pain-relief therapies, and fitness programs designed exclusively for women.
          </p>
        </div>

        {/* Electrotherapy Spotlight Banner */}
        <div
          className="glass-card reveal-up"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            padding: '1.5rem',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, rgba(15, 110, 110, 0.05), rgba(232, 146, 124, 0.08))',
            borderColor: 'var(--color-border)'
          }}
        >
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <img
              src={treatmentImg}
              alt="Advanced electrotherapy and physiotherapy equipment"
              style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div>
            <div className="badge badge-secondary" style={{ marginBottom: '0.8rem' }}>Advanced Modalities</div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '0.6rem' }}>
              State-of-the-Art Electrotherapy & Traction Setup
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.2rem' }}>
              We utilize certified non-invasive electrotherapy devices (IFT/TENS) and mechanical lumbar/cervical traction to accelerate pain recovery and joint rehabilitation.
            </p>
            <a href="#book" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
              Book Electrotherapy Session
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="reveal-up"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {clinicData.services.map((srv, index) => (
            <div
              key={srv.id}
              className="glass-card service-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                padding: '2rem',
                transition: 'var(--transition)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Card Top */}
              <div>
                <div
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: 'var(--radius-md)',
                    background: index % 2 === 0 ? 'rgba(15, 110, 110, 0.1)' : 'rgba(232, 146, 124, 0.15)',
                    color: index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  {iconComponents[srv.icon]}
                </div>

                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--color-secondary-dark)',
                    marginBottom: '0.4rem',
                    display: 'block'
                  }}
                >
                  {srv.category}
                </span>

                <h3
                  style={{
                    fontSize: '1.3rem',
                    marginBottom: '0.8rem',
                    color: 'var(--color-primary-dark)'
                  }}
                >
                  {srv.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}
                >
                  {srv.description}
                </p>

                {/* Features List */}
                <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                  {srv.features.map((feat, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        color: 'var(--color-text)',
                        marginBottom: '0.4rem'
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom CTA */}
              <button
                onClick={() => handleBookService(srv.title)}
                className="btn btn-outline"
                style={{
                  width: '100%',
                  justify: 'space-between',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.9rem'
                }}
              >
                <span>Book This Service</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary-light);
        }
      `}</style>
    </section>
  );
};
