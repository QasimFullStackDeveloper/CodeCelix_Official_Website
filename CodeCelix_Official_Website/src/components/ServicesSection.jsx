export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-code-line',
      title: 'Web Development',
      description:
        'Custom web applications built with modern frameworks and technologies to deliver exceptional user experiences.',
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Apps',
      description:
        'Native and cross-platform mobile applications that engage users and drive business growth.',
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and migration services to optimize performance and reduce costs.',
    },
    {
      icon: 'ri-database-line',
      title: 'Data Analytics',
      description:
        'Advanced analytics and business intelligence solutions to transform data into actionable insights.',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Cybersecurity',
      description:
        'Comprehensive security solutions to protect your digital assets and maintain compliance.',
    },
    {
      icon: 'ri-settings-line',
      title: 'IT Consulting',
      description:
        'Strategic technology consulting to align your IT infrastructure with business objectives.',
    },
  ];
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to accelerate
            your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
              <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <i
                  className={`${service.icon} text-2xl text-[#922e2e] w-6 h-6 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
