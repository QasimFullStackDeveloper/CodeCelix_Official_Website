// import React from 'react';

// const DiscussProject = () => {
//   return (
//     <section className="py-20 bg-[#922e2e]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">Let's Discuss Your Project</h2>
//           <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
//             Ready to transform your business with cutting-edge technology? Our expert team is here to turn your vision into reality.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
//             <div className="flex items-center text-red-100 font-inter">
//               <i className="ri-phone-line mr-3 text-2xl"></i>
//               <span className="text-lg">+1 (555) 123-4567</span>
//             </div>
//             <div className="flex items-center text-red-100 font-inter">
//               <i className="ri-mail-line mr-3 text-2xl"></i>
//               <span className="text-lg">hello@codecelix.com</span>
//             </div>
//             <div className="flex items-center text-red-100 font-inter">
//               <i className="ri-time-line mr-3 text-2xl"></i>
//               <span className="text-lg">24/7 Support</span>
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="#contact">
//               <button className="bg-white text-[#922e2e] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg font-dmSans">
//                 Contact Us
//               </button>
//             </a>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#922e2e] transition-colors font-semibold text-lg font-dmSans">
//               Email Us Directly
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DiscussProject;
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this import matches your routing setup

const DiscussProject = () => {
  return (
    <section className="py-20 bg-[#922e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
            Ready to transform your business with cutting-edge technology? Our expert team is here to turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center text-red-100 font-inter">
              <i className="ri-phone-line mr-3 text-2xl"></i>
              <span className="text-lg">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-red-100 font-inter">
              <i className="ri-mail-line mr-3 text-2xl"></i>
              <span className="text-lg">infocodecelix@gmail.com</span>
            </div>
            <div className="flex items-center text-red-100 font-inter">
              <i className="ri-time-line mr-3 text-2xl"></i>
              <span className="text-lg">24/7 Support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <button className="bg-white text-[#922e2e] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg font-dmSans">
                Contact Us
              </button>
            </a>
            
            {/* Email Us Directly button using mailto */}
            <Link to="mailto:privacy@codecelix.com">
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

export default DiscussProject;
