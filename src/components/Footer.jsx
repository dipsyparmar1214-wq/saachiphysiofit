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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <img src={logoImg} alt="Logo" style={{ height: '40px', borderRadius: '6px', background: '#FFF', padding: '2px' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#FFF' }}>
                {clinicData.name}
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {clinicData.tagline}. Dedicated orthopedic physiotherapy and women's fitness clinic in Bardoli.
            </p>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Designed with <Heart size={14} fill="#E8927C" color="#E8927C" /> for Excellence in Healthcare
          </div>
        </div>
      </div>
    </footer>
  );
};
