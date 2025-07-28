export default function CompanyTimeline() {
  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description:
        'CODECELIX was established by Sarah Chen and Michael Rodriguez with a vision to transform businesses through technology.',
      icon: 'ri-lightbulb-line',
    },
    {
      year: '2020',
      title: 'First Major Client',
      description:
        'Successfully delivered our first enterprise-level project, establishing our reputation for quality and reliability.',
      icon: 'ri-trophy-line',
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description:
        'Grew our team to 25 talented professionals, expanding our capabilities in web development, mobile apps, and cloud solutions.',
      icon: 'ri-team-line',
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description:
        'Received multiple industry awards for innovation and client satisfaction, cementing our position as a leading tech company.',
      icon: 'ri-award-line',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description:
        'Expanded our services internationally, serving clients across North America, Europe, and Asia with 24/7 support.',
      icon: 'ri-global-line',
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description:
        'Launched our innovation lab focusing on AI, blockchain, and emerging technologies to stay ahead of industry trends.',
      icon: 'ri-rocket-line',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
          <div className="w-24 h-1 bg-[#922e2e] mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startup to industry leader - here are the key milestones that
            shaped our company
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#922e2e] rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'
                  }`}>
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div
                        className={`bg-red-100 w-12 h-12 rounded-full flex items-center justify-center ${
                          index % 2 === 0 ? 'ml-auto mr-0' : 'mr-auto ml-0'
                        }`}>
                        <i
                          className={`${milestone.icon} text-[#922e2e] text-xl w-6 h-6 flex items-center justify-center`}></i>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-[#922e2e] mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#922e2e] rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Journey <span className="text-[#922e2e]">Continues</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're excited about the future and committed to continuing our
              growth while maintaining the values and quality that got us here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
