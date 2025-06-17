
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mercedes-Benz Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/715de681-9acc-4e80-aab1-dcc3e31c3a27.png" 
              alt="Mercedes-Benz Logo" 
              className="w-12 h-12 mr-3"
            />
            <div>
              <h1 className="text-xl font-bold text-mercedes-charcoal">Mercedes-Benz</h1>
              <p className="text-sm text-mercedes-gray-medium">Collision Center</p>
            </div>
          </div>

          {/* CTA Button with micro animations */}
          <Button 
            className="gradient-mercedes hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 shadow-md"
            onClick={() => window.location.href = 'https://mbusa-cc.lovable.app/collision-center'}
          >
            Submit Your Application
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
