export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-code-line',
      title: 'Web Development',
      description:
        'We build responsive, high-performing websites tailored to your business needs from corporate sites to custom platforms. Our development stack ensures speed, security, and scalability. Let your website leave a lasting first impression.',
    },
    {
      icon: 'ri-smartphone-line',
      title: 'UI/UX Design',
      description:
        'We design intuitive and elegant interfaces that offer a seamless user experience. Our UI/UX process is rooted in user research, wireframing, and aesthetic detail to ensure conversion and satisfaction. Great design is not just pretty it works.',
    },
    {
      icon: 'ri-cloud-line',
      title: 'Business Solutions',
      description:
        'Unlock business efficiency with smart AI integrations — from chatbots to data-driven automation. We tailor AI solutions to streamline workflows, boost engagement, and deliver intelligent insights. The future of tech, implemented today.',
    },
    {
      icon: 'ri-database-line',
      title: 'Internship Programs',
      description:
        'Codecelix offers hands-on internship programs for aspiring developers, designers, and marketers. Interns work on real client projects, gaining valuable skills, mentorship, and exposure to industry tools. Learn, grow, and launch your career with us.',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'AI Solutions',
      description:
        'From startup consulting to digital transformation, our business solutions are designed to solve real-world challenges. We help you scale smartly — with tools, strategy, and systems that grow with you. Your Success, Our Mission.',
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
