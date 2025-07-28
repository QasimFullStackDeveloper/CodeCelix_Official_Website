import { Link } from 'react-router-dom';

const ContactSectionCommon = () => {
  return (
    <section className="py-20 bg-[#922e2e] font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Our
            expert team is here to turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center text-red-100">
              <i className="ri-phone-line mr-3 text-2xl"></i>
              <span className="text-lg">+39 (350) 854-0334</span>
            </div>
            <div className="flex items-center text-red-100">
              <i className="ri-mail-line mr-3 text-2xl"></i>
              <span className="text-lg">infocodecelix@gmail.com</span>
            </div>
            <div className="flex items-center text-red-100">
              <i className="ri-time-line mr-3 text-2xl"></i>
              <span className="text-lg">24/7 Support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#922e2e] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg font-dmSans">
              Contact Us
            </Link>

            {/* Email Us Directly button using mailto */}
            <Link to="mailto:infocodecelix@gmail.com">
              <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#922e2e] transition-colors font-semibold text-lg font-dmSans">
                Email Us Directly
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionCommon;
