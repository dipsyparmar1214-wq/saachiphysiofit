import React from 'react';
import { Heart, Phone, MessageSquare } from 'lucide-react';
import { clinicData } from '../config/clinicData';
import logoImg from '../../logo.png';

export const Footer = () => {
  return (
    <footer style={{ background: 'var(--color-primary-dark)', color: '#FFFFFF', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <img src={logoImg} alt="Logo" style={{ height: '65px', width: 'auto', objectFit: 'contain', background: 'transparent' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.15rem', color: '#FFF', lineHeight: 1.2 }}>
                {clinicData.name}
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {clinicData.tagline}. Dedicated orthopedic physiotherapy and women's fitness clinic in Bardoli.
            </p>

            {/* Social Media Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginTop: '1.2rem' }}>
              <a
                href={clinicData.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#FFFFFF',
                  transition: 'var(--transition)',
                  opacity: 0.9
                }}
                className="social-icon"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a
                href={clinicData.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justify: 'center',
                  color: '#FFFFFF',
                  transition: 'var(--transition)',
                  opacity: 0.9
                }}
                className="social-icon"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '1.2rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <li><a href="#home" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Home</a></li>
              <li><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>About Clinic</a></li>
              <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Services & Treatments</a></li>
              <li><a href="#timings" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Clinic Timings</a></li>
              <li><a href="#book" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Book Appointment</a></li>
              <li><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Location & Map</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '1.2rem' }}>Specialized Care</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
              <li>Orthopedic & Joint Care</li>
              <li>PIVD & Slip Disc Rehab</li>
              <li>Post-Surgical Movement Rehab</li>
              <li>Electrotherapy & Traction</li>
              <li>Women's Health & Conditioning</li>
            </ul>
          </div>

          {/* Col 4: Timings & Address */}
          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '1.2rem' }}>Clinic Timings</h4>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem' }}>
              <strong>Mon – Sat:</strong> 9:00 AM – 12:00 PM & 2:00 PM – 5:30 PM
            </p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1.5rem' }}>
              <strong>Sunday:</strong> Closed
            </p>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              G1, G2, Maruti Complex, Near Swaminarayan Mandir, Bardoli - 394601
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'rgba(255, 255, 255, 0.65)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {clinicData.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
            Created by Harsh Web Creations <Heart size={16} fill="#E8927C" color="#E8927C" />
          </div>
        </div>
      </div>
      <style>{`
        .social-icon:hover {
          background: var(--color-secondary-dark) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};
