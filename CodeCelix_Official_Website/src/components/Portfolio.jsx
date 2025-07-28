import { Link } from 'react-router-dom';
import EcommerecePlatformImg from '/Portfolio_Page/ProjectImage/ECommercePlatform.jpg';
import HealthcareDashboardImg from '/Portfolio_Page/ProjectImage/HealthCareUI_UX.jpg';
import FinancialMobileAppImg from '/Portfolio_Page/ProjectImage/Financial_Mobile_App.jpg';
import CorporateWebsiteRedesignImg from '/Portfolio_Page/ProjectImage/Corporate_Website_Redesign.jpg';

const portfolioData = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description:
      'A comprehensive e-commerce solution with advanced analytics, inventory management, and seamless payment integration.',
    image: EcommerecePlatformImg,
  },
  {
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description:
      'A patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
    image: HealthcareDashboardImg,
  },
  {
    title: 'Financial Dashboard',
    category: 'Data Analytics',
    description:
      'Real-time financial analytics platform with advanced reporting, data visualization, and risk management tools.',
    image: FinancialMobileAppImg,
  },
  {
    title: 'Corporate Website Redesign',
    category: 'Web Development',
    description:
      'A complete overhaul of the corporate website with a focus on user experience and modern design.',
    image: CorporateWebsiteRedesignImg,
  },
];

const PortfolioCard = ({ project }) => (
  <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition hover:shadow-xl cursor-pointer">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute top-2 left-2 bg-[#922e2e] text-white px-4 py-1 text-xs rounded-full">
        {project.category}
      </div>
    </div>

    <div className="p-5 flex flex-col justify-between grow">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <a
          href="#"
          className="text-sm text-[#922e2e] font-medium hover:underline transition">
          View Project →
        </a>
        <div className="flex gap-2">
          <button
            title="Open"
            className="w-10 h-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center justify-center">
            <i className="ri-external-link-line text-lg text-gray-600"></i>
          </button>
          <button
            title="Share"
            onClick={() => alert(`Share ${project.title}`)}
            className="w-10 h-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center justify-center">
            <i className="ri-share-line text-lg text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-20 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-800">
            Our Portfolio
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Explore our recent projects and discover how we've helped businesses
            transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="font-dmSans px-8 py-4 border-2 border-[#922e2e] text-[#922e2e] rounded-full hover:bg-[#922e2e] hover:text-white transition">
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
