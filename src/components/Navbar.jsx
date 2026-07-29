import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, HeartHandshake } from 'lucide-react';
import { clinicData } from '../config/clinicData';
import logoImg from '../../logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Timings', href: '#timings' },
    { name: 'Book', href: '#book' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'var(--transition)',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(250, 247, 245, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        padding: '0.8rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo & Name */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <img
            src={logoImg}
            alt="Sacchi Clinic Logo"
            style={{
              height: '46px',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
          <div>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.25rem',
              color: 'var(--color-primary-dark)',
              lineHeight: 1.1
            }}>
              Sacchi Clinic
            </span>
            <span style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--color-secondary-dark)',
              letterSpacing: '0.5px'
            }}>
              Physiotherapy & Women's Fitness
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', mdDisplay: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                transition: 'var(--transition)'
              }}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div style={{ display: 'none', mdDisplay: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-ctas">
          <a
            href={`tel:${clinicData.phoneRaw}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: 'var(--color-primary)'
            }}
          >
            <Phone size={16} />
            {clinicData.phone}
          </a>
          <a href="#book" className="btn btn-primary" style={{ padding: '0.6rem 1.3rem', fontSize: '0.9rem' }}>
            <Calendar size={16} />
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-primary-dark)',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: '#FFFFFF',
            borderBottom: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-lg)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-primary-dark)',
                padding: '0.4rem 0',
                borderBottom: '1px solid var(--color-border-light)'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem' }}>
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Calendar size={18} />
              Book Appointment
            </a>
            <a
              href={`https://wa.me/${clinicData.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ width: '100%' }}
            >
              <HeartHandshake size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Navbar */}
      <style>{`
        @media (min-width: 850px) {
          .desktop-nav, .desktop-ctas {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--color-primary-light) !important;
        }
      `}</style>
    </header>
  );
};
