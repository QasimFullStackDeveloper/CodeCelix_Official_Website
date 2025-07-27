export default function TeamSection() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Asian%20female%20CEO%20in%20modern%20office%20setting%2C%20wearing%20business%20attire%2C%20confident%20smile%2C%20clean%20background%20with%20soft%20lighting.%20Professional%20corporate%20portrait%20with%20red%20and%20white%20color%20scheme%2C%20executive%20leadership%20photo.&width=400&height=400&seq=team-red-1&orientation=squarish',
      linkedin: '#',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Hispanic%20male%20CTO%20in%20modern%20tech%20office%2C%20wearing%20smart%20casual%20attire%2C%20friendly%20professional%20expression%2C%20clean%20background%20with%20soft%20lighting.%20Corporate%20portrait%20with%20red%20and%20white%20color%20scheme%2C%20technology%20executive%20photo.&width=400&height=400&seq=team-red-2&orientation=squarish',
      linkedin: '#',
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Developer',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Caucasian%20female%20software%20developer%20in%20modern%20office%2C%20wearing%20casual%20professional%20attire%2C%20confident%20smile%2C%20clean%20background%20with%20soft%20lighting.%20Corporate%20portrait%20with%20red%20and%20white%20color%20scheme%2C%20tech%20professional%20photo.&width=400&height=400&seq=team-red-3&orientation=squarish',
      linkedin: '#',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together years of experience in
            technology, design, and business to deliver exceptional results for
            our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#922e2e] font-medium mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-[#922e2e] rounded-full flex items-center justify-center hover:bg-[#7a2525] transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <i className="ri-twitter-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <i className="ri-github-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our growing
              team. Explore exciting career opportunities and be part of our
              innovative journey.
            </p>
            <button className="bg-[#922e2e] text-white px-8 py-4 rounded-full hover:bg-[#7a2525] transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
              View Open Positions
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
