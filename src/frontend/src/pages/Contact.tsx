import React from 'react';
import Navbar from '../components/Navbar';
import MainContact from '../components/MainContact';
import JoinSection from '../components/JoinSection';
import Footer from '../components/Footer';

const Contact = () => (
  <div className="bg-white min-h-screen w-full">
    <Navbar />
    <MainContact />
    <JoinSection />
    <Footer />
  </div>
);

export default Contact; 