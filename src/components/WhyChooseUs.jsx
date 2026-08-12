import React from 'react';
import { ShieldCheck, Stethoscope, FileCheck, MapPin, Check } from 'lucide-react';
import { clinicData } from '../config/clinicData';

export const WhyChooseUs = () => {
  const iconComponents = {
    ShieldCheck: <ShieldCheck size={32} />,
    Stethoscope: <Stethoscope size={32} />,
    FileCheck: <FileCheck size={32} />,
    MapPin: <MapPin size={32} />
  };

  return (
    <section id="why-us" style={{ padding: '5rem 0', background: 'var(--color-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge badge-secondary">Patient-Centric Advantage</div>
          <h2>Why Choose Saachi Clinic?</h2>
          <p>
            We blend clinical expertise, modern therapeutic modalities, and a gentle women-focused touch in Bardoli.
          </p>
        </div>

        {/* Why Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {clinicData.whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(250, 247, 245, 0.6)',
                transition: 'var(--transition)'
              }}
            >
              <div
                style={{
                  color: idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary-dark)',
                  marginBottom: '1.2rem'
                }}
              >
                {iconComponents[item.icon]}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem', color: 'var(--color-primary-dark)' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Treatment Process Roadmap */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(15, 110, 110, 0.04) 0%, rgba(232, 146, 124, 0.06) 100%)',
            borderColor: 'var(--color-border)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
              Your Pathway To Pain Relief
            </h3>
            <p style={{ color: 'var(--color-text-muted)' }}>4 simple steps to restore your strength and mobility</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            {clinicData.processSteps.map((p, idx) => (
              <div key={idx} style={{ textAlign: 'left', position: 'relative' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(15, 110, 110, 0.2)',
                    lineHeight: 1,
                    marginBottom: '0.5rem'
                  }}
                >
                  {p.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--color-primary-dark)' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
