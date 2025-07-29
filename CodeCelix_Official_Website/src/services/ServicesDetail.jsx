import React from 'react';
import ServicesSection from '../home/ServicesSection';
import ContactSectionCommon from '../components/ContactSectionCommon';
import { Link } from 'react-router-dom';
import ServiceTeam from '/Services_Image/ServiceTeamImg.jpg';
import ServiceHeroSectionImg from '/Services_Image/ServiceHeroSectionImg.jpg';

const ServicesDetail = () => {
  const features = [
    {
      icon: 'ri-award-line',
      title: 'Industry Expertise',
      description: 'Years of proven experience across various industries',
    },
    {
      icon: 'ri-team-line',
      title: 'Dedicated Team',
      description: 'Skilled professionals committed to your project success',
    },
    {
      icon: 'ri-time-line',
      title: 'Timely Delivery',
      description: 'On-time project completion with quality assurance',
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-gray-900 mb-6 leading-tight">
                Our <span className="text-[#922e2e]">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Comprehensive technology solutions designed to accelerate your
                business growth and digital transformation journey.
              </p>
              <div className="flex flex-wrap gap-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <i className="ri-check-line text-[#922e2e] mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Expert Team
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#922e2e] mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Proven Results
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#922e2e] mr-2 w-4 h-4 flex items-center justify-center"></i>
                  24/7 Support
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={ServiceHeroSectionImg}
                  alt="Technology Services Illustration"
                  className="w-full h-auto rounded-2xl shadow-2xl object-top"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#922e2e] rounded-full opacity-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#922e2e] rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section / Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={ServiceTeam}
                alt="CODECELIX Team Working"
                className="w-full h-auto rounded-2xl shadow-xl object-top"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#922e2e] rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#922e2e] rounded-full opacity-10"></div>
            </div>

            <div>
              <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">
                Why Choose <span className="text-[#922e2e]">CODECELIX</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine technical excellence with business acumen to deliver
                solutions that not only meet your current needs but also
                position you for future growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i
                        className={`${feature.icon} text-lg text-[#922e2e] w-4 h-4 flex items-center justify-center`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold font-poppins text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="bg-[#922e2e] text-white px-8 py-4 font-dmSans rounded-full hover:bg-[#7a2525] transition-colors font-semibold whitespace-nowrap cursor-pointer">
                  View Portfolio
                </Link>
                <Link
                  to="/contact"
                  className="border-2 font-dmSans border-[#922e2e] text-[#922e2e] px-8 py-4 rounded-full hover:bg-[#922e2e] hover:text-white transition-colors font-semibold whitespace-nowrap cursor-pointer">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Common Section */}
      <ContactSectionCommon />
    </div>
  );
};

export default ServicesDetail;
