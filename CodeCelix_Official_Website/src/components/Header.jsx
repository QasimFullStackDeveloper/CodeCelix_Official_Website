import { Link } from 'react-router-dom';

export default function Header({ logo }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="CODECELIX Logo" className="h-16 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium">
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium">
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium">
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium">
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4 font-dmSans">
            <Link
              to="/contact"
              className="bg-[#922e2e] text-white px-6 py-2 rounded-full hover:bg-[#7a2525] transition-colors font-medium whitespace-nowrap cursor-pointer">
              Get Started
            </Link>
            <button className="md:hidden p-2 cursor-pointer">
              <i className="ri-menu-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
