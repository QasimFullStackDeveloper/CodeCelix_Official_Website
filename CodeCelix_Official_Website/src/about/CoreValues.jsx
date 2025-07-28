export default function CoreValues() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description:
        'We embrace cutting-edge technologies and creative solutions to solve complex challenges and drive digital transformation for our clients.',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Integrity',
      description:
        'We build trust through transparent communication, ethical practices, and delivering on our promises with honesty and reliability.',
    },
    {
      icon: 'ri-rocket-line',
      title: 'Excellence',
      description:
        'We strive for excellence in every project, ensuring high-quality deliverables that exceed expectations and drive measurable results.',
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork, fostering collaborative relationships with clients and within our team to achieve shared success.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Values</h2>
          <div className="w-24 h-1 bg-[#922e2e] mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our values guide every decision we make and every solution we
            deliver
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center group hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
                <i
                  className={`${value.icon} text-3xl text-[#922e2e] w-8 h-8 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Values in <span className="text-[#922e2e]">Action</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              These values aren't just words on a page – they're the foundation
              of how we work, how we treat our clients, and how we approach
              every challenge we face.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center">
                <i className="ri-check-line text-green-500 text-xl mr-2 w-5 h-5 flex items-center justify-center"></i>
                <span className="text-gray-700">Client-First Approach</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-line text-green-500 text-xl mr-2 w-5 h-5 flex items-center justify-center"></i>
                <span className="text-gray-700">Quality Assurance</span>
              </div>
              <div className="flex items-center">
                <i className="ri-check-line text-green-500 text-xl mr-2 w-5 h-5 flex items-center justify-center"></i>
                <span className="text-gray-700">Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
