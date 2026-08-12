import React from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink, Navigation } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Contact = () => {
  return (
    <section id="contact" style={{ padding: '5rem 0', background: 'var(--color-surface)' }}>
      <div className="container">
        <div className="section-header reveal-up">
          <div className="badge">Visit Our Clinic</div>
          <h2>Contact & Location Details</h2>
          <p>Conveniently located in Rajiv Nagar, Bardoli. Easy ground-floor access with parking.</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Info Card */}
          <div
            className="glass-card reveal-left"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)', lineHeight: 1.2 }}>
                {clinicData.name}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '50%', background: 'rgba(15, 110, 110, 0.1)', color: 'var(--color-primary)', height: 'fit-content' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>Clinic Address</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5', marginTop: '0.2rem' }}>
                      {clinicData.address}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '50%', background: 'rgba(232, 146, 124, 0.15)', color: 'var(--color-secondary-dark)', height: 'fit-content' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>Phone / Helpline</div>
                    <a href={`tel:${clinicData.phoneRaw}`} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)', display: 'block', marginTop: '0.2rem' }}>
                      {clinicData.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ padding: '0.6rem', borderRadius: '50%', background: 'rgba(37, 211, 102, 0.15)', color: '#25D366', height: 'fit-content' }}>
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>WhatsApp Direct</div>
                    <a
                      href={`https://wa.me/${clinicData.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: '0.9rem', color: '#25D366', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem' }}
                    >
                      Chat with Clinic Desk <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <a
              href={clinicData.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.9rem' }}
            >
              <Navigation size={18} /> Get Directions on Google Maps
            </a>
          </div>

          {/* Embedded Map Frame */}
          <div
            className="glass-card reveal-right"
            style={{
              overflow: 'hidden',
              minHeight: '380px',
              padding: 0
            }}
          >
            <iframe
              title="Saachi Physiotherapy Location Map"
              src={clinicData.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
