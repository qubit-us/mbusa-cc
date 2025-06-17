
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 76, 117, 0.7), rgba(46, 134, 171, 0.7)), url("/lovable-uploads/d4ca6a67-e322-43ce-a887-325e19621224.png")'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white animate-fade-in">
          Mercedes-Benz
          <span className="block text-mercedes-silver mt-4">
            Certified Collision Center Program
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
