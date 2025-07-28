export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-[#922e2e] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20tech%20company%20office%20environment%20with%20modern%20workstations%2C%20collaborative%20spaces%2C%20and%20innovative%20design%20elements.%20Team%20members%20working%20on%20computers%20with%20multiple%20monitors%2C%20whiteboards%20with%20diagrams%2C%20and%20contemporary%20office%20furniture.%20Bright%2C%20clean%20atmosphere%20with%20red%20and%20burgundy%20accent%20colors%20throughout%20the%20space.&width=600&height=500&seq=our-story-red-1&orientation=landscape"
              alt="CODECELIX Office Environment"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              From Vision to <span className="text-[#922e2e]">Reality</span>
            </h3>

            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2019, CODECELIX emerged from a simple yet powerful
                vision: to bridge the gap between innovative technology and
                practical business solutions. Our founders, Sarah Chen and
                Michael Rodriguez, recognized the need for a technology partner
                that could truly understand business challenges and deliver
                transformative results.
              </p>

              <p>
                What started as a small team of passionate developers has grown
                into a comprehensive technology company serving clients across
                industries. We've maintained our startup agility while building
                enterprise-grade capabilities, ensuring we can tackle projects
                of any scale or complexity.
              </p>

              <p>
                Today, CODECELIX stands as a trusted partner for businesses
                seeking to leverage technology for growth, efficiency, and
                innovation. Our commitment to excellence and client success
                drives everything we do.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-[#922e2e]">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Our Mission
              </h4>
              <p className="text-gray-700">
                To empower businesses with innovative technology solutions that
                drive growth, enhance efficiency, and create lasting value in
                the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
