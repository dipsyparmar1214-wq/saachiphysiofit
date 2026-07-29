import React from 'react';
import { Calendar, MessageSquare, Award, HeartHandshake, Activity, UserCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { clinicData } from '../config/clinicData';
import logoImg from '../../logo.png';
import heroImg from '../assets/images/hero.png';

export const Hero = () => {
  const iconMap = {
    Award: <Award size={20} />,
    HeartHandshake: <HeartHandshake size={20} />,
    Activity: <Activity size={20} />,
    UserCheck: <UserCheck size={20} />
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        padding: '4rem 0 5rem 0',
        background: 'radial-gradient(circle at 80% 20%, rgba(232, 146, 124, 0.15) 0%, rgba(250, 247, 245, 0) 50%), radial-gradient(circle at 10% 80%, rgba(15, 110, 110, 0.1) 0%, rgba(250, 247, 245, 0) 50%)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Hero Left Text */}
          <div>
            <div className="badge badge-secondary" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={16} style={{ color: 'var(--color-secondary-dark)' }} />
              Bardoli's Premier Women's Wellness & Rehab Center
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                letterSpacing: '-0.5px',
                marginBottom: '1.25rem',
                color: 'var(--color-primary-dark)'
              }}
            >
              Restoring Movement, <br />
              <span className="gradient-text">Empowering Women's Wellness</span>
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-text-muted)',
                marginBottom: '2rem',
                maxWidth: '540px'
              }}
            >
              {clinicData.subTagline}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              <a href="#book" className="btn btn-primary">
                <Calendar size={18} />
                Book an Appointment
              </a>
              <a
                href={`https://wa.me/${clinicData.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Address Quick Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.875rem',
                color: 'var(--color-text-muted)',
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)'
              }}
            >
              <ShieldCheck size={16} style={{ color: 'var(--color-primary)' }} />
              Opposite Kedareshvar Complex, Rajiv Nagar, Bardoli
            </div>
          </div>

          {/* Hero Right Visual Showcase */}
          <div style={{ position: 'relative' }}>
            {/* Background Blob Glow */}
            <div
              style={{
                position: 'absolute',
                top: '-5%',
                right: '-5%',
                width: '110%',
                height: '110%',
                background: 'linear-gradient(135deg, rgba(15, 110, 110, 0.15), rgba(232, 146, 124, 0.2))',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                filter: 'blur(30px)',
                zIndex: 0
              }}
            />

            <div
              className="glass-card"
              style={{
                position: 'relative',
                zIndex: 1,
                padding: '1.25rem',
                background: 'rgba(255, 255, 255, 0.95)'
              }}
            >
              <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <img
                  src={heroImg}
                  alt="Physiotherapist assisting patient at Sacchi Clinic"
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <img src={logoImg} alt="Logo" style={{ height: '22px' }} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
                    Sacchi Clinic
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.8rem',
                  textAlign: 'left'
                }}
              >
                <div style={{ background: 'var(--color-bg)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)' }}>TIMINGS</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)' }}>Mon - Sat</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>9 AM - 12 PM | 2 PM - 5:30 PM</div>
                </div>

                <div style={{ background: 'var(--color-bg)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-light)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-secondary-dark)' }}>LOCATION</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)' }}>Bardoli</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>G1, G2 Maruti Complex</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginTop: '4rem'
          }}
        >
          {clinicData.trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.2rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'var(--transition)'
              }}
            >
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(15, 110, 110, 0.1)',
                  color: 'var(--color-primary)'
                }}
              >
                {iconMap[badge.icon]}
              </div>
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                  {badge.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
