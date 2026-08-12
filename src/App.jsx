import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Timings } from './components/Timings';
import { BookingForm } from './components/BookingForm';
import { FAQAndReviews } from './components/FAQAndReviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  useEffect(() => {
    // Safety fallback: reveal all elements automatically after 600ms if intersection observer hasn't fired yet
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        el.classList.add('reveal-active');
      });
    }, 600);

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        el.classList.add('reveal-active');
      });
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 50px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(fallbackTimer);
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onSelectService={handleSelectService} />
        <WhyChooseUs />
        <Timings />
        <BookingForm preselectedService={selectedService} />
        <FAQAndReviews />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
