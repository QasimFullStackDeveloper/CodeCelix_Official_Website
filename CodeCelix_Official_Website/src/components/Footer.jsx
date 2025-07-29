import { Link } from 'react-router-dom';

const Footer = ({ logo }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <img src={logo} alt="CODECELIX Logo" className="h-14 w-auto mb-5" />
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative technology solutions.
              We combine expertise with creativity to deliver exceptional
              digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/codecelix/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#922e2e] transition-colors cursor-pointer">
                <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a
                href="https://www.instagram.com/codecelix?igsh=MTVlNjdveWphbjFxYQ=="
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#922e2e] transition-colors cursor-pointer">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a
                href="https://www.facebook.com/share/14FPASnYKkj/?mibextid=wwXIfr"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#922e2e] transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors">
                  Privacy & Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Codecelix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy & Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
