
import React from 'react';
import { Phone, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CTASection = () => {
  return (
    <section className="py-20 gradient-mercedes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Restore Your Mercedes-Benz?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get started with a free estimate today. Our certified technicians are ready to bring your vehicle back to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Options */}
          <div className="space-y-6 animate-fade-in-delay-1">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Call for Immediate Service</h3>
                    <p className="text-gray-200">(555) 123-4567</p>
                    <p className="text-sm text-gray-300">Available 24/7 for emergencies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Schedule Online</h3>
                    <p className="text-gray-200">Book your appointment online</p>
                    <p className="text-sm text-gray-300">Choose your preferred time slot</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-white" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Visit Our Facility</h3>
                    <p className="text-gray-200">123 Luxury Lane, Beverly Hills</p>
                    <p className="text-sm text-gray-300">State-of-the-art equipment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main CTA */}
          <div className="text-center lg:text-left animate-fade-in-delay-2">
            <div className="bg-white rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-mercedes-charcoal mb-4">
                Get Your Free Estimate
              </h3>
              <p className="text-mercedes-gray-medium mb-6">
                Our certified estimators will provide a detailed assessment of your vehicle's repair needs at no cost to you.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3 text-mercedes-charcoal">
                  <Clock className="w-5 h-5 text-mercedes-blue" />
                  <span>Quick 30-minute assessment</span>
                </div>
                <div className="flex items-center space-x-3 text-mercedes-charcoal">
                  <Phone className="w-5 h-5 text-mercedes-blue" />
                  <span>Direct insurance communication</span>
                </div>
                <div className="flex items-center space-x-3 text-mercedes-charcoal">
                  <Calendar className="w-5 h-5 text-mercedes-blue" />
                  <span>Flexible scheduling options</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full gradient-mercedes hover:opacity-90 transition-opacity duration-300 transform hover:scale-105" size="lg">
                  Schedule Free Estimate
                </Button>
                <Button variant="outline" className="w-full border-mercedes-blue text-mercedes-blue hover:bg-mercedes-blue hover:text-white transition-all duration-300" size="lg">
                  Call Now: (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
