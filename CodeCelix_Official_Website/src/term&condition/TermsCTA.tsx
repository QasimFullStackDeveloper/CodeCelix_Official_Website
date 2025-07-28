import {Link} from 'react-router-dom';

export default function TermsCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#922e2e] to-[#7a2525] font-inter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold font-poppins text-white mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms & Conditions or need clarification 
            on any aspect of our services, our support team is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row font-dmSans gap-4 justify-center items-center">
            <Link to="/contact">
              <button className="bg-white text-[#922e2e] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                Contact Support
              </button>
            </Link>
            <Link to="/privacy-policy">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#922e2e] transition-colors whitespace-nowrap cursor-pointer">
                Privacy & Policy
              </button>
            </Link>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/80">
            <div className="flex items-center space-x-2">
              <i className="ri-mail-line w-4 h-4 flex items-center justify-center"></i>
              <span>infocodecelix@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
              <span>+39 (350) 854-0334</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
