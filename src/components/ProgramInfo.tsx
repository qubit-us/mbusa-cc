
import React from 'react';

const ProgramInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-black mb-6">
            Mercedes-Benz Certified Collision Program Application
          </h1>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Thank you for your interest in becoming a part of the Mercedes-Benz Certified Collision Program. 
            We are thrilled to have the opportunity to collaborate with your team to uphold the highest 
            standards of customer care and vehicle service. Together, we can ensure that Mercedes-Benz 
            customers continue to receive the exceptional, consistent experience they expect and deserve. 
            <span className="font-bold"> Please read the following instructions before filling out the 
            Mercedes-Benz Certified Collision Program Application.</span>
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Dealership</h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            The Certified Collision Program aims to provide every Mercedes-Benz customer with access to a 
            Certified Collision Center, ensuring comprehensive coverage in all Areas of Influence (AOI). 
            Dealerships are encouraged to sponsor as many collision centers as needed to meet their customers' 
            needs. Eligible collision centers should be located within the sponsoring dealership's sales area 
            or a reasonable distance, as determined by MBUSA. MBUSA will analyze the dealership's AOI and Units 
            in Operation (UIO) and, if applicable, the current number of certified centers to determine approval.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Thank you for participating in our Certified Collision Program. Please complete the following sections:
          </p>
          
          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li>Review Submission Guidelines (last page)</li>
            <li>Fill out dealership information</li>
            <li>Acknowledge the "Certified Collision Repair Program Participation Agreement" in NetStar</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-800 mb-4">Collision Center</h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We're excited to guide you through the application process! Please complete the following sections:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Review all program materials including Program Standards, Tools & Equipment requirements, and program fees <a href="#" className="text-blue-600 underline">MB Collision Program Materials</a></li>
            <li>Review Submission Guidelines (last page)</li>
            <li>Set up your facility on our ISP Portal at <a href="#" className="text-blue-600 underline">MBUSA ISP Portal</a> - Click on "New User" and follow prompts. Note: "Organization type" should be "Independent Workshop".</li>
            <li>Fully complete the application - Sponsored facilities should include their Shop ID obtained from the ISP Portal</li>
          </ul>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Please be aware that a Dealer-Owned facility operates as an extension of the Mercedes-Benz dealership.</strong>
          </p>

          <p className="text-gray-700 leading-relaxed">
            Once you've completed these sections, kindly email your application to your sponsoring dealership 
            for their signatures. We're here to support you every step of the way!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramInfo;
