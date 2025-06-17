
import React from 'react';

const MBUsa = () => {
  return (
    <div className="min-h-screen">
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold text-mercedes-charcoal mb-4">
              Mercedes-Benz USA Information
            </h1>
            <p className="text-xl text-mercedes-gray-medium max-w-3xl mx-auto">
              Official Mercedes-Benz USA resources, warranty information, and corporate details.
            </p>
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8 animate-fade-in-delay-1">
            <h2 className="text-2xl font-semibold text-mercedes-charcoal mb-4">
              Coming Soon
            </h2>
            <p className="text-mercedes-gray-medium">
              This page will provide links and information about Mercedes-Benz USA corporate policies, 
              warranty programs, official resources, and brand information.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MBUsa;
