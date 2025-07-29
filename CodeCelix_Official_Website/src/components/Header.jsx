import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ logo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Navigation links
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="CODECELIX Logo" className="h-16 w-auto" />
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-[#922e2e] transition-colors font-poppins font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 font-dmSans">
            <Link
              to="/contact"
              className="bg-[#922e2e] text-white px-6 py-2 rounded-full hover:bg-[#7a2525] transition-colors font-semibold font-dmSans whitespace-nowrap cursor-pointer">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-gray-700`}></i>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-gray-700 hover:text-[#922e2e] transition-colors font-poppins font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-[#922e2e] text-white px-6 py-2 rounded-full hover:bg-[#7a2525] transition-colors font-dmSans font-semibold mt-4 cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
