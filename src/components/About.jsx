import React from 'react';
import { Heart, Activity, Sparkles } from 'lucide-react';
import { clinicData } from '../config/clinicData';
import aboutImg from '../assets/images/about.png';

export const About = () => {
  const stats = [
    { number: '1000+', label: 'Happy Patients Treated' },
    { number: '10+', label: 'Years Combined Clinical Experience' },
    { number: '98%', label: 'Pain Recovery Success Rate' },
    { number: '100%', label: 'Women-Centric Comfort' }
  ];

  return (
    <section id="about" style={{ padding: '5rem 0', background: 'var(--color-surface)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Text */}
          <div>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <Heart size={14} /> About Sacchi Clinic
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                marginBottom: '1.25rem',
                color: 'var(--color-primary-dark)'
              }}
            >
              Combining Clinical Physiotherapy Excellence with <span className="gradient-text">Women's Wellness</span>
            </h2>

            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              At <strong>{clinicData.name}</strong>, we believe every woman deserves personalized, respectful, and evidence-based physical therapy care. Whether recovering from a complex spine condition (PIVD), post-surgery rehabilitation, or seeking functional fitness conditioning, our clinic offers a welcoming and private sanctuary.
            </p>

            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              We combine advanced electrotherapy, manual joint mobilization, and targeted exercise modalities to relieve chronic pain, correct posture, and empower women to lead an active, pain-free life.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(232, 146, 124, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary-dark)' }}>
                  <Sparkles size={18} />
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>Women-Only Studio Space</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(15, 110, 110, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <Activity size={18} />
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>Certified Specialists</span>
              </div>
            </div>
          </div>

          {/* Right Image + Stats Column */}
          <div>
            <div
              className="glass-card"
              style={{
                overflow: 'hidden',
                padding: 0,
                marginBottom: '1.5rem',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img
                src={aboutImg}
                alt="Women wellness conditioning at Sacchi Clinic"
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}
            >
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.4rem 1rem',
                    textAlign: 'center',
                    background: idx % 2 === 0 ? 'rgba(15, 110, 110, 0.03)' : 'rgba(232, 146, 124, 0.05)',
                    borderColor: idx % 2 === 0 ? 'rgba(15, 110, 110, 0.15)' : 'rgba(232, 146, 124, 0.2)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary-dark)',
                      marginBottom: '0.2rem'
                    }}
                  >
                    {item.number}
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
