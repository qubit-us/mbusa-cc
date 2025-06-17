
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProgramInfo from '@/components/ProgramInfo';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProgramInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
