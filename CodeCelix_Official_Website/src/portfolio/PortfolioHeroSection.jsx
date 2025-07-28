import PortfolioHeroSectionImg from '/Portfolio_Page/HeroSectionImg.jpg';
import PortfolioHeroSectionBgImg from '/Portfolio_Page/HeroSectionBgImg.jpg';

const PortfolioHeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden font-inter">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${PortfolioHeroSectionImg}')`
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          <div className="w-full">
            <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-gray-900 mb-6 leading-tight">
              Our <span className="text-[#922e2e]">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Discover our exceptional work and see how we've transformed businesses through innovative technology solutions and creative digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#922e2e]/10 rounded-full flex items-center justify-center">
                  <i className="ri-code-s-slash-line text-[#922e2e] w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold font-poppins text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#922e2e]/10 rounded-full flex items-center justify-center">
                  <i className="ri-user-heart-line text-[#922e2e] w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold font-poppins text-gray-900">40+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            <button className="bg-[#922e2e] text-white px-8 py-4 rounded-full hover:bg-[#7a2525] transition-colors font-semibold font-dmSans text-lg whitespace-nowrap cursor-pointer">
              View Our Work
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={PortfolioHeroSectionBgImg}
                alt="Portfolio Creativity"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#922e2e]/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#922e2e]/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeroSection;
