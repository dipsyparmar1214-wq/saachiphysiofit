import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const MobileActionBar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid var(--color-border)',
        padding: '0.6rem 1rem',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
        display: 'none'
      }}
      className="mobile-action-bar"
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
        <a
          href={`tel:${clinicData.phoneRaw}`}
          className="btn btn-outline"
          style={{ padding: '0.75rem', fontSize: '0.9rem', width: '100%' }}
        >
          <Phone size={18} /> Call Now
        </a>

        <a
          href={`https://wa.me/${clinicData.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-whatsapp"
          style={{ padding: '0.75rem', fontSize: '0.9rem', width: '100%' }}
        >
          <MessageSquare size={18} /> WhatsApp
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-action-bar {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
