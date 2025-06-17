
import React from 'react';
import { Car, Paintbrush, Settings, Shield, Sparkles, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: 'Collision Repair',
      description: 'Complete body work and structural repairs using Mercedes-Benz approved methods.',
      features: ['Frame straightening', 'Panel replacement', 'Structural welding']
    },
    {
      icon: Paintbrush,
      title: 'Paint & Refinishing',
      description: 'Color-matched paint using original Mercedes-Benz paint codes and techniques.',
      features: ['Color matching', 'Clear coat application', 'Paint protection']
    },
    {
      icon: Settings,
      title: 'Mechanical Repairs',
      description: 'Engine, transmission, and system repairs by certified Mercedes technicians.',
      features: ['Engine diagnostics', 'Transmission service', 'Electronic systems']
    },
    {
      icon: Shield,
      title: 'Insurance Claims',
      description: 'Full insurance claim assistance and direct billing to major insurers.',
      features: ['Claim processing', 'Direct billing', 'Documentation support']
    },
    {
      icon: Sparkles,
      title: 'Detailing Services',
      description: 'Professional detailing to restore your vehicle to showroom condition.',
      features: ['Interior cleaning', 'Exterior polish', 'Paint correction']
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection',
      description: 'Comprehensive quality checks ensure every repair meets Mercedes standards.',
      features: ['Multi-point inspection', 'Road testing', 'Final quality assurance']
    }
  ];

  return (
    <section className="py-20 bg-mercedes-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-mercedes-charcoal mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-mercedes-gray-medium max-w-3xl mx-auto">
            Comprehensive collision repair and restoration services designed specifically for Mercedes-Benz vehicles
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg animate-fade-in-delay-${Math.min(index % 3 + 1, 3)}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 gradient-mercedes rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-mercedes-charcoal group-hover:text-mercedes-blue transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-mercedes-gray-medium">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-mercedes-gray-medium">
                        <div className="w-2 h-2 bg-mercedes-blue rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-delay-3">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-mercedes-charcoal mb-4">
              Need a Service Not Listed?
            </h3>
            <p className="text-mercedes-gray-medium mb-6">
              Our certified technicians can handle any Mercedes-Benz repair or restoration need.
              Contact us to discuss your specific requirements.
            </p>
            <button className="gradient-mercedes text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 transform hover:scale-105">
              Contact Our Specialists
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
