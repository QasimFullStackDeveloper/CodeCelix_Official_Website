import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import EcommerecePlatformImg from '/Portfolio_Page/ProjectImage/ECommercePlatform.jpg';
import HealthcareDashboardImg from '/Portfolio_Page/ProjectImage/HealthCareUI_UX.jpg';
import FinancialMobileAppImg from '/Portfolio_Page/ProjectImage/Financial_Mobile_App.jpg';
import CorporateWebsiteRedesignImg from '/Portfolio_Page/ProjectImage/Corporate_Website_Redesign.jpg';
import LearningManagementSystemImg from '/Portfolio_Page/ProjectImage/Learning_Management_System.jpg';
import RestaurantMobileAppImg from '/Portfolio_Page/ProjectImage/Restaurant_Mobile_App.jpg';

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterButtons = [
    'All',
    'Web Development',
    'UI/UX',
    'Mobile Apps',
    'E-commerce'
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern retail platform with advanced analytics and seamless payment integration',
      image: EcommerecePlatformImg,
      category: 'E-commerce'
    },
    {
      id: 2,
      title: 'Healthcare UI/UX Dashboard',
      description: 'Comprehensive patient management system with real-time monitoring capabilities',
      image: HealthcareDashboardImg,
      category: 'UI/UX'
    },
    {
      id: 3,
      title: 'Financial Mobile App',
      description: 'Intuitive banking app with secure transactions and investment tracking',
      image: FinancialMobileAppImg,
      category: 'Mobile Apps'
    },
    {
      id: 4,
      title: 'Corporate Website Redesign',
      description: 'Complete brand transformation with modern design and improved user experience',
      image: CorporateWebsiteRedesignImg,
      category: 'Web Development'
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Interactive educational platform with course management and progress tracking',
      image: LearningManagementSystemImg,
      category: 'Web Development'
    },
    {
      id: 6,
      title: 'Restaurant Mobile App',
      description: 'Food ordering app with menu browsing, customization, and delivery tracking',
      image: RestaurantMobileAppImg,
      category: 'Mobile Apps'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-20 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio showcasing innovative solutions across various industries and technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium font-dmSans transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#922e2e] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-2 hover:border-[#922e2e] transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#922e2e] text-white px-3 py-1 rounded-full text-sm font-poppins font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3 group-hover:text-[#922e2e] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <Link to="https://aidoctor.runasp.net/" className="flex items-center font-dmSans text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors">
                    View Project
                    <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
                  </Link>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#922e2e] hover:text-white transition-colors cursor-pointer">
                      <i className="ri-external-link-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#922e2e] hover:text-white transition-colors cursor-pointer">
                      <i className="ri-share-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <button className="font-dmSans border-2 border-[#922e2e] text-[#922e2e] px-8 py-4 rounded-full hover:bg-[#922e2e] hover:text-white transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
            Load More Projects
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
