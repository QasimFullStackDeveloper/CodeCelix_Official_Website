export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-red-50 to-red-100 pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                About
                <span className="text-[#922e2e]"> CODECELIX</span>
              </h1>

              <p className="text-2xl text-gray-600 leading-relaxed">
                Pioneering the future of technology through innovation,
                integrity, and exceptional delivery
              </p>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                We are a forward-thinking technology company dedicated to
                transforming businesses through cutting-edge digital solutions.
                Our passion for innovation drives us to deliver exceptional
                results that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#922e2e] mb-2">
                  500+
                </div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#922e2e] mb-2">
                  50+
                </div>
                <div className="text-gray-600 text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#922e2e] mb-2">5</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#922e2e] to-red-600 rounded-3xl transform rotate-3 opacity-20"></div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Abstract%20technology%20illustration%20featuring%20interconnected%20nodes%2C%20digital%20networks%2C%20and%20geometric%20patterns%20in%20burgundy%20and%20red%20tones.%20Modern%20tech%20company%20visual%20with%20floating%20elements%2C%20circuit%20patterns%2C%20and%20innovative%20design%20elements.%20Clean%2C%20professional%2C%20and%20futuristic%20atmosphere%20with%20minimal%20background.&width=600&height=500&seq=about-hero-red-1&orientation=landscape"
                alt="CODECELIX Technology Innovation"
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
