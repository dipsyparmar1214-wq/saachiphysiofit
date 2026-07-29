import React, { useState } from 'react';
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
