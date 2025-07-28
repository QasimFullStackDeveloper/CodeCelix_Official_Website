// import React from 'react';

// const ServicesPage = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Header */}
//       <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <a className="flex items-center" href="/">
//               <img 
//                 src="https://static.readdy.ai/image/af00c462bef58f83b1befaafb9928c9b/0abedad4367ba0ac4c64e8f8aac24537.jfif" 
//                 alt="CODECELIX Logo" 
//                 className="h-16 w-auto"
//               />
//             </a>
//             <nav className="hidden md:flex space-x-8">
//               <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium" href="/">Home</a>
//               <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium" href="/about">About</a>
//               <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium" href="/services">Services</a>
//               <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium" href="/portfolio">Portfolio</a>
//               <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium" href="#team">Team</a>
//               <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium" href="#contact">Contact</a>
//             </nav>
//             <div className="hidden md:flex items-center space-x-4">
//               <a href="#contact">
//                 <button className="bg-[#922e2e] text-white px-6 py-2 rounded-full hover:bg-[#7a2525] transition-colors font-semibold whitespace-nowrap">
//                   Get Started
//                 </button>
//               </a>
//             </div>
//             <button className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                 Our <span className="text-[#922e2e]">Services</span>
//               </h1>
//               <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
//                 Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
//               </p>
//               <div className="flex flex-wrap gap-8 text-sm text-gray-500">
//                 <div className="flex items-center">
//                   <svg className="text-[#922e2e] mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Expert Team
//                 </div>
//                 <div className="flex items-center">
//                   <svg className="text-[#922e2e] mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   Proven Results
//                 </div>
//                 <div className="flex items-center">
//                   <svg className="text-[#922e2e] mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   24/7 Support
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="relative z-10">
//                 <img 
//                   src="https://readdy.ai/api/search-image?query=modern%20technology%20services%20illustration%20with%20abstract%20geometric%20shapes%2C%20digital%20transformation%20concept%2C%20burgundy%20red%20accents%2C%20clean%20minimal%20background%2C%20professional%20tech%20consulting%20visualization%2C%20software%20development%20icons%2C%20cloud%20computing%20elements%2C%20data%20analytics%20graphics%2C%20cybersecurity%20symbols%2C%20mobile%20app%20development%2C%20web%20technologies%2C%20futuristic%20digital%20workspace&width=600&height=500&seq=services-hero&orientation=landscape" 
//                   alt="Technology Services Illustration" 
//                   className="w-full h-auto rounded-2xl shadow-2xl object-top"
//                 />
//               </div>
//               <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#922e2e] rounded-full opacity-10"></div>
//               <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#922e2e] rounded-full opacity-10"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               What We <span className="text-[#922e2e]">Offer</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Our comprehensive suite of technology services is designed to meet your unique business needs and drive sustainable growth.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Service Card 1 */}
//             <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
//               <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
//                 <svg className="text-2xl text-[#922e2e] w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Custom web applications built with modern frameworks and technologies to deliver exceptional user experiences and scalable solutions.
//               </p>
//               <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors">
//                 Learn More
//                 <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//               </div>
//             </div>

//             {/* Service Card 2 */}
//             <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
//               <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
//                 <svg className="text-2xl text-[#922e2e] w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android platforms.
//               </p>
//               <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors">
//                 Learn More
//                 <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//               </div>
//             </div>

//             {/* Service Card 3 */}
//             <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
//               <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
//                 <svg className="text-2xl text-[#922e2e] w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Scalable cloud infrastructure, migration services, and DevOps solutions to optimize performance and reduce operational costs.
//               </p>
//               <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors">
//                 Learn More
//                 <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//               </div>
//             </div>

//             {/* Service Card 4 */}
//             <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
//               <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
//                 <svg className="text-2xl text-[#922e2e] w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analytics</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Advanced analytics, business intelligence, and machine learning solutions to transform data into actionable insights.
//               </p>
//               <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors">
//                 Learn More
//                 <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//               </div>
//             </div>

//             {/* Service Card 5 */}
//             <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
//               <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
//                 <svg className="text-2xl text-[#922e2e] w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Comprehensive security solutions, threat assessment, and compliance management to protect your digital assets.
//               </p>
//               <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors">
//                 Learn More
//                 <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//               </div>
//             </div>

//             {/* Service Card 6 */}
//             <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
//               <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
//                 <svg className="text-2xl text-[#922e2e] w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">IT Consulting</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Strategic technology consulting and digital transformation guidance to align your IT infrastructure with business objectives.
//               </p>
//               <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors">
//                 Learn More
//                 <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <img 
//                 src="https://readdy.ai/api/search-image?query=professional%20technology%20team%20working%20on%20digital%20solutions%2C%20modern%20office%20environment%20with%20multiple%20screens%2C%20software%20development%20workspace%2C%20collaborative%20tech%20environment%2C%20burgundy%20red%20color%20accents%2C%20clean%20professional%20setting%2C%20developers%20coding%2C%20project%20management%2C%20digital%20transformation%20workflow%2C%20team%20collaboration&width=600&height=500&seq=featured-services&orientation=landscape" 
//                 alt="CODECELIX Team Working" 
//                 className="w-full h-auto rounded-2xl shadow-xl object-top"
//               />
//               <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#922e2e] rounded-full opacity-10"></div>
//               <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#922e2e] rounded-full opacity-10"></div>
//             </div>
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Why Choose <span className="text-[#922e2e]">CODECELIX</span>
//               </h2>
//               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                 We combine technical excellence with business acumen to deliver solutions that not only meet your current needs but also position you for future growth.
//               </p>
//               <div className="grid sm:grid-cols-2 gap-6 mb-8">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg className="text-lg text-[#922e2e] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">Industry Expertise</h3>
//                     <p className="text-sm text-gray-600">10+ years of proven experience across various industries</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg className="text-lg text-[#922e2e] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">Dedicated Team</h3>
//                     <p className="text-sm text-gray-600">Skilled professionals committed to your project success</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg className="text-lg text-[#922e2e] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">Timely Delivery</h3>
//                     <p className="text-sm text-gray-600">On-time project completion with quality assurance</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg className="text-lg text-[#922e2e] w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
//                     <p className="text-sm text-gray-600">Round-the-clock technical support and maintenance</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-wrap gap-4">
//                 <button className="bg-[#922e2e] text-white px-8 py-4 rounded-full hover:bg-[#7a2525] transition-colors font-semibold">
//                   View Portfolio
//                 </button>
//                 <button className="border-2 border-[#922e2e] text-[#922e2e] px-8 py-4 rounded-full hover:bg-[#922e2e] hover:text-white transition-colors font-semibold">
//                   Get Quote
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesPage;
import React from 'react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen font-inter">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a className="flex items-center" href="/">
              <img 
                src="https://static.readdy.ai/image/af00c462bef58f83b1befaafb9928c9b/0abedad4367ba0ac4c64e8f8aac24537.jfif" 
                alt="CODECELIX Logo" 
                className="h-16 w-auto"
              />
            </a>
            <nav className="hidden md:flex space-x-8">
              <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium font-dmSans" href="/">Home</a>
              <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium font-dmSans" href="/about">About</a>
              <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium font-dmSans" href="/services">Services</a>
              <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium font-dmSans" href="/portfolio">Portfolio</a>
              <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium font-dmSans" href="#team">Team</a>
              <a className="text-gray-700 hover:text-[#922e2e] transition-colors font-medium font-dmSans" href="#contact">Contact</a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#contact">
                <button className="bg-[#922e2e] text-white px-6 py-2 rounded-full hover:bg-[#7a2525] transition-colors font-semibold whitespace-nowrap font-dmSans">
                  Get Started
                </button>
              </a>
            </div>
            <button className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer">
              <i className="ri-menu-line text-2xl text-gray-700"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight font-poppins">
                Our <span className="text-[#922e2e]">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl font-inter">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
              </p>
              <div className="flex flex-wrap gap-8 text-sm text-gray-500 font-inter">
                <div className="flex items-center">
                  <i className="ri-check-line text-[#922e2e] mr-2 text-lg"></i>
                  Expert Team
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#922e2e] mr-2 text-lg"></i>
                  Proven Results
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#922e2e] mr-2 text-lg"></i>
                  24/7 Support
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://readdy.ai/api/search-image?query=modern%20technology%20services%20illustration%20with%20abstract%20geometric%20shapes%2C%20digital%20transformation%20concept%2C%20burgundy%20red%20accents%2C%20clean%20minimal%20background%2C%20professional%20tech%20consulting%20visualization%2C%20software%20development%20icons%2C%20cloud%20computing%20elements%2C%20data%20analytics%20graphics%2C%20cybersecurity%20symbols%2C%20mobile%20app%20development%2C%20web%20technologies%2C%20futuristic%20digital%20workspace&width=600&height=500&seq=services-hero&orientation=landscape" 
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
              What We <span className="text-[#922e2e]">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
              Our comprehensive suite of technology services is designed to meet your unique business needs and drive sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <i className="ri-code-line text-2xl text-[#922e2e]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Web Development</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                Custom web applications built with modern frameworks and technologies to deliver exceptional user experiences and scalable solutions.
              </p>
              <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors font-dmSans">
                Learn More
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <i className="ri-smartphone-line text-2xl text-[#922e2e]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Mobile App Development</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                Native and cross-platform mobile applications that engage users and drive business growth across iOS and Android platforms.
              </p>
              <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors font-dmSans">
                Learn More
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <i className="ri-cloud-line text-2xl text-[#922e2e]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Cloud Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                Scalable cloud infrastructure, migration services, and DevOps solutions to optimize performance and reduce operational costs.
              </p>
              <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors font-dmSans">
                Learn More
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <i className="ri-database-line text-2xl text-[#922e2e]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Data Analytics</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                Advanced analytics, business intelligence, and machine learning solutions to transform data into actionable insights.
              </p>
              <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors font-dmSans">
                Learn More
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <i className="ri-shield-check-line text-2xl text-[#922e2e]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">Cybersecurity</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                Comprehensive security solutions, threat assessment, and compliance management to protect your digital assets.
              </p>
              <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors font-dmSans">
                Learn More
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-[#922e2e] hover:border-2 transition-all duration-300 group cursor-pointer border-2 border-transparent">
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <i className="ri-settings-line text-2xl text-[#922e2e]"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">IT Consulting</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                Strategic technology consulting and digital transformation guidance to align your IT infrastructure with business objectives.
              </p>
              <div className="flex items-center text-[#922e2e] font-medium group-hover:text-[#7a2525] transition-colors font-dmSans">
                Learn More
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=professional%20technology%20team%20working%20on%20digital%20solutions%2C%20modern%20office%20environment%20with%20multiple%20screens%2C%20software%20development%20workspace%2C%20collaborative%20tech%20environment%2C%20burgundy%20red%20color%20accents%2C%20clean%20professional%20setting%2C%20developers%20coding%2C%20project%20management%2C%20digital%20transformation%20workflow%2C%20team%20collaboration&width=600&height=500&seq=featured-services&orientation=landscape" 
                alt="CODECELIX Team Working" 
                className="w-full h-auto rounded-2xl shadow-xl object-top"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#922e2e] rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#922e2e] rounded-full opacity-10"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Why Choose <span className="text-[#922e2e]">CODECELIX</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-inter">
                We combine technical excellence with business acumen to deliver solutions that not only meet your current needs but also position you for future growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-award-line text-lg text-[#922e2e]"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-dmSans">Industry Expertise</h3>
                    <p className="text-sm text-gray-600 font-inter">10+ years of proven experience across various industries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-team-line text-lg text-[#922e2e]"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-dmSans">Dedicated Team</h3>
                    <p className="text-sm text-gray-600 font-inter">Skilled professionals committed to your project success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-lg text-[#922e2e]"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-dmSans">Timely Delivery</h3>
                    <p className="text-sm text-gray-600 font-inter">On-time project completion with quality assurance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-customer-service-line text-lg text-[#922e2e]"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 font-dmSans">24/7 Support</h3>
                    <p className="text-sm text-gray-600 font-inter">Round-the-clock technical support and maintenance</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#922e2e] text-white px-8 py-4 rounded-full hover:bg-[#7a2525] transition-colors font-semibold font-dmSans">
                  View Portfolio
                </button>
                <button className="border-2 border-[#922e2e] text-[#922e2e] px-8 py-4 rounded-full hover:bg-[#922e2e] hover:text-white transition-colors font-semibold font-dmSans">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
console.log("hi")