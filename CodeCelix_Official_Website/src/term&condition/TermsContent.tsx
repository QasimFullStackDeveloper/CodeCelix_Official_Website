export default function TermsContent() {
  const sections = [
    {
      title: "1. Introduction",
      content: [
        "Welcome to CODECELIX. These Terms and Conditions (\"Terms\") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.",
        "CODECELIX is a technology company that provides web development, mobile applications, cloud solutions, and IT consulting services. Our services are designed to help businesses transform and grow through innovative technology solutions.",
        "If you do not agree with any part of these Terms, you must not use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes."
      ]
    },
    {
      title: "2. User Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
        "You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services to transmit any harmful, illegal, or offensive content.",
        "You are responsible for ensuring that all information you provide to us is accurate, complete, and up-to-date. Any false or misleading information may result in termination of your account.",
        "You must respect the intellectual property rights of CODECELIX and third parties. You may not copy, modify, distribute, or create derivative works from our services without explicit permission."
      ]
    },
    {
      title: "3. Service Terms",
      content: [
        "CODECELIX provides various technology services including web development, mobile app development, cloud solutions, data analytics, cybersecurity, and IT consulting. The specific terms for each service will be outlined in separate service agreements.",
        "All services are provided on an \"as is\" and \"as available\" basis. We make no warranties or representations regarding the uninterrupted or error-free operation of our services.",
        "Project timelines, deliverables, and pricing are specified in individual project agreements. Changes to project scope may result in additional charges and timeline adjustments.",
        "We reserve the right to suspend or terminate services if payment terms are not met or if there is a breach of these Terms."
      ]
    },
    {
      title: "4. Privacy Protection",
      content: [
        "We are committed to protecting your privacy and personal information. Our Privacy Policy, which is incorporated into these Terms by reference, explains how we collect, use, and protect your information.",
        "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
        "We do not sell, rent, or lease your personal information to third parties. We may share information only as described in our Privacy Policy or with your explicit consent.",
        "You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise these rights."
      ]
    },
    {
      title: "5. Intellectual Property",
      content: [
        "All content, software, and materials provided by CODECELIX are protected by copyright, trademark, and other intellectual property laws. You may not use our intellectual property without explicit written permission.",
        "Upon full payment for custom development services, you will receive ownership rights to the custom code and deliverables created specifically for your project, subject to any third-party licensing terms.",
        "CODECELIX retains the right to use general methodologies, techniques, and knowledge gained during the provision of services for future projects, provided that no confidential client information is disclosed.",
        "You grant CODECELIX a limited license to use your trademarks, logos, and brand materials solely for the purpose of providing the agreed-upon services."
      ]
    },
    {
      title: "6. Payment Terms",
      content: [
        "Payment terms are specified in individual project agreements. Generally, payments are due according to the agreed-upon schedule and payment methods outlined in your service agreement.",
        "Late payments may result in service suspension and additional fees. We reserve the right to charge interest on overdue amounts at a rate of 1.5% per month or the maximum rate allowed by law.",
        "All fees are non-refundable except as specifically stated in your service agreement. Refunds, if applicable, will be processed within 30 days of approval.",
        "You are responsible for all taxes related to your use of our services, except for taxes based on CODECELIX's net income."
      ]
    },
    {
      title: "7. Limitations and Disclaimers",
      content: [
        "CODECELIX's liability is limited to the amount paid for the specific service that gave rise to the claim. We are not liable for any indirect, consequential, or punitive damages.",
        "We make no warranties regarding the performance, reliability, or suitability of our services for any particular purpose. All services are provided \"as is\" without warranty of any kind.",
        "We are not responsible for any third-party services, software, or content that may be integrated with or recommended as part of our services. You use such third-party services at your own risk.",
        "Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you."
      ]
    },
    {
      title: "8. Termination",
      content: [
        "Either party may terminate a service agreement with written notice as specified in the individual service agreement. Termination does not relieve you of any payment obligations for services already provided.",
        "We may immediately terminate or suspend your access to our services if you breach these Terms, fail to make required payments, or engage in conduct that we deem harmful to our business or other users.",
        "Upon termination, you must cease all use of our services and return or destroy any confidential information or materials provided by CODECELIX.",
        "Provisions of these Terms that by their nature should survive termination will remain in effect, including but not limited to intellectual property rights, payment obligations, and limitation of liability."
      ]
    },
    {
      title: "9. Governing Law",
      content: [
        "These Terms are governed by and construed in accordance with the laws of the jurisdiction where CODECELIX is headquartered, without regard to conflict of law principles.",
        "Any disputes arising from these Terms or your use of our services will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.",
        "If any provision of these Terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable to the fullest extent permitted by law.",
        "These Terms constitute the entire agreement between you and CODECELIX regarding your use of our services and supersede all prior agreements and understandings."
      ]
    }
  ];

  return (
    <section className="py-16 bg-white font-inter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-red-100 pb-8 last:border-b-0">
              <h2 className="text-2xl font-bold font-poppins text-[#922e2e] mb-6">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-[#922e2e]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-information-line w-5 h-5 flex items-center justify-center text-[#922e2e]"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold font-poppins text-[#922e2e] mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are subject to change. We will notify you of any significant changes 
                via email or through our website. Your continued use of our services after such changes constitutes 
                acceptance of the new terms. For questions about these terms, please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
