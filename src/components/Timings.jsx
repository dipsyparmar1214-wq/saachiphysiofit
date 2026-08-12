import React, { useState, useEffect } from 'react';
import { Clock, Calendar, AlertCircle, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const Timings = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      // Calculate current IST Time
      const now = new Date();
      // IST offset: UTC+5:30 = +330 mins
      const utcMinutes = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istDate = new Date(utcMinutes + (3600000 * 5.5));
      
      const day = istDate.getDay(); // 0 is Sunday
      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentMin = hours * 60 + minutes;

      // Slot 1: 9:00 AM (540 min) to 12:00 PM (720 min)
      // Slot 2: 2:00 PM (840 min) to 5:30 PM (1050 min)
      const isSlot1 = currentMin >= 540 && currentMin < 720;
      const isSlot2 = currentMin >= 840 && currentMin < 1050;
      
      const open = day !== 0 && (isSlot1 || isSlot2);
      setIsOpenNow(open);

      // Formatted Time String
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setCurrentTimeStr(istDate.toLocaleTimeString('en-US', options));
    };

    checkStatus();
    const interval = setInterval(checkStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timings" style={{ padding: '5rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div className="section-header reveal-up">
          <div className="badge">Clinic Schedule</div>
          <h2>Operating Hours & Live Status</h2>
          <p>
            We are open Monday through Saturday with dedicated morning and afternoon consultation slots.
          </p>
        </div>

        <div
          className="reveal-up"
          style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {/* Main Timings Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              background: '#FFFFFF'
            }}
          >
            {/* Live Indicator Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid var(--color-border-light)',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: isOpenNow ? 'var(--color-open)' : 'var(--color-closed)',
                    boxShadow: isOpenNow ? '0 0 10px var(--color-open)' : '0 0 10px var(--color-closed)'
                  }}
                />
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: isOpenNow ? 'var(--color-open)' : 'var(--color-closed)' }}>
                  {isOpenNow ? 'CLINIC IS CURRENTLY OPEN' : 'CLINIC IS CURRENTLY CLOSED'}
                </span>
              </div>

              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={16} /> IST Time: {currentTimeStr || '11:15 AM'}
              </div>
            </div>

            {/* Schedule Details */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
              }}
            >
              {/* Left Column - Days */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                  <Calendar size={20} style={{ color: 'var(--color-primary)' }} />
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)' }}>Weekly Schedule</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div style={{ padding: '0.8rem 1rem', background: 'rgba(15, 110, 110, 0.04)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--color-primary)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-primary-dark)' }}>Monday – Saturday</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                      Morning: 9:00 AM – 12:00 PM <br />
                      Afternoon: 2:00 PM – 5:30 PM
                    </div>
                  </div>

                  <div style={{ padding: '0.8rem 1rem', background: 'rgba(239, 68, 68, 0.05)', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--color-closed)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-closed)' }}>Sunday</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                      Closed (Emergency WhatsApp Consultation Only)
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Note & Contact */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                    <AlertCircle size={20} style={{ color: 'var(--color-secondary-dark)' }} />
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)' }}>Patient Guidance</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                    Prior appointment booking is highly recommended to minimize wait times. Walk-ins are welcomed subject to specialist availability.
                  </p>
                </div>

                <div style={{ padding: '1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.3rem' }}>Need Immediate Help?</div>
                  <a
                    href={`tel:${clinicData.phoneRaw}`}
                    style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <Phone size={16} /> Call {clinicData.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
