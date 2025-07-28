import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyAndPolicy() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long do you retain my personal data?',
      answer:
        'We retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy. For client data, we typically retain information for 7 years after the completion of services for legal and business purposes. You can request deletion of your data at any time, subject to legal obligations.',
    },
    {
      question: 'Do you share my data with third parties?',
      answer:
        'We only share your data with trusted third-party service providers who help us deliver our services, such as payment processors, analytics providers, and communication tools. We never sell your personal data to third parties. All third-party providers are contractually bound to protect your data and use it only for the specified purposes.',
    },
    {
      question: 'How can I update my privacy preferences?',
      answer:
        'You can update your privacy preferences at any time by contacting us directly or through your account settings if you have one. This includes opting out of marketing communications, updating your contact information, or requesting changes to how we process your data.',
    },
    {
      question: "What happens if there's a data breach?",
      answer:
        'In the unlikely event of a data breach, we will notify you within 72 hours if your personal data is affected. We have comprehensive incident response procedures in place and will work with relevant authorities to investigate and resolve any security issues promptly.',
    },
    {
      question: 'How do you handle data transfers outside the EU?',
      answer:
        "When we transfer data outside the European Economic Area (EEA), we ensure adequate protection through approved mechanisms such as Standard Contractual Clauses (SCCs) or working with providers that have adequacy decisions. We always ensure your data receives the same level of protection regardless of where it's processed.",
    },
    {
      question: 'Can I request a copy of my data?',
      answer:
        "Yes, you have the right to request a copy of all personal data we hold about you. Simply contact our privacy team, and we'll provide you with a comprehensive report within 30 days. This includes information about how we've used your data and who we've shared it with.",
    },
  ];

  return (
    <>
      {/* Privacy Hero */}
      <section className="bg-white pt-32 pb-20 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#922e2e] mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl">
              At CODECELIX, we are committed to protecting your privacy and
              ensuring the security of your personal information. This policy
              explains how we collect, use, and safeguard your data.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <i className="ri-calendar-line w-4 h-4 flex items-center justify-center mr-2"></i>
                <span>Last Updated: July 28, 2025</span>
              </div>
              <div className="flex items-center">
                <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center mr-2 text-[#922e2e]"></i>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="bg-white py-16 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-poppins text-[#922e2e] mb-6">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                CODECELIX ("we," "our," or "us") respects your privacy and is
                committed to protecting your personal data. This privacy policy
                will inform you about how we look after your personal data when
                you visit our website, use our services, or interact with us,
                and tell you about your privacy rights and how the law protects
                you.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This policy applies to all visitors, users, and clients of
                CODECELIX services. By using our website and services, you agree
                to the collection and use of information in accordance with this
                policy.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#922e2e]/20 to-transparent mb-12"></div>

            {/* Data Collection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-poppins text-[#922e2e] mb-6">
                Data Collection
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We collect information about you in various ways when you use
                our services:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold font-poppins text-[#922e2e] mb-3">
                    Information You Provide
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Contact information (name, email, phone number)</li>
                    <li>• Account registration details</li>
                    <li>• Project requirements and specifications</li>
                    <li>• Payment and billing information</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold font-poppins text-[#922e2e] mb-3">
                    Information We Collect Automatically
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Usage patterns and preferences</li>
                    <li>• Cookies and tracking technologies</li>
                    <li>• Location data (if permitted)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#922e2e]/20 to-transparent mb-12"></div>

            {/* Data Usage */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-poppins text-[#922e2e] mb-6">
                Data Usage
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use your personal data for the following purposes:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-service-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Service Delivery
                      </h4>
                      <p className="text-gray-700 text-sm">
                        To provide, maintain, and improve our services
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-customer-service-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Customer Support
                      </h4>
                      <p className="text-gray-700 text-sm">
                        To respond to inquiries and provide assistance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Communication
                      </h4>
                      <p className="text-gray-700 text-sm">
                        To send updates, newsletters, and marketing materials
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-bill-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Billing & Payments
                      </h4>
                      <p className="text-gray-700 text-sm">
                        To process payments and manage accounts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-shield-check-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Security & Compliance
                      </h4>
                      <p className="text-gray-700 text-sm">
                        To ensure security and legal compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-bar-chart-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Analytics & Improvement
                      </h4>
                      <p className="text-gray-700 text-sm">
                        To analyze usage and improve our services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#922e2e]/20 to-transparent mb-12"></div>

            {/* Data Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-poppins text-[#922e2e] mb-6">
                Data Protection
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <i className="ri-lock-line w-8 h-8 flex items-center justify-center text-[#922e2e] mx-auto mb-3"></i>
                  <h4 className="font-semibold font-poppins text-gray-900 mb-2">
                    Encryption
                  </h4>
                  <p className="text-gray-700 text-sm">
                    All data is encrypted in transit and at rest using
                    industry-standard protocols
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <i className="ri-shield-check-line w-8 h-8 flex items-center justify-center text-[#922e2e] mx-auto mb-3"></i>
                  <h4 className="font-semibold font-poppins text-gray-900 mb-2">
                    Access Control
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Strict access controls and authentication procedures for all
                    systems
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <i className="ri-eye-line w-8 h-8 flex items-center justify-center text-[#922e2e] mx-auto mb-3"></i>
                  <h4 className="font-semibold font-poppins text-gray-900 mb-2">
                    Monitoring
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Continuous monitoring and regular security assessments
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#922e2e]/20 to-transparent mb-12"></div>

            {/* Third-party Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-poppins text-[#922e2e] mb-6">
                Third-party Services
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We may use third-party services to provide certain features and
                functionality. These services have their own privacy policies:
              </p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold font-poppins text-[#922e2e] mb-3">
                    Analytics Services
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Google Analytics, Hotjar for website analytics and user
                    behavior tracking
                  </p>
                  <p className="text-gray-600 text-sm">
                    These services help us understand how users interact with
                    our website to improve user experience
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold font-poppins text-[#922e2e] mb-3">
                    Payment Processing
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Stripe, PayPal for secure payment processing
                  </p>
                  <p className="text-gray-600 text-sm">
                    Payment information is processed securely by certified
                    payment processors
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold font-poppins text-[#922e2e] mb-3">
                    Communication Tools
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Mailchimp, Slack for email marketing and team communication
                  </p>
                  <p className="text-gray-600 text-sm">
                    Used for sending newsletters and managing project
                    communications
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#922e2e]/20 to-transparent mb-12"></div>

            {/* Cookies Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-poppins text-[#922e2e] mb-6">
                Cookies Policy
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We use cookies and similar tracking technologies to improve your
                browsing experience and analyze website traffic.
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold font-poppins text-green-800 mb-2">
                    Essential Cookies
                  </h4>
                  <p className="text-green-700 text-sm">
                    Required for the website to function properly. Cannot be
                    disabled.
                  </p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold font-poppins text-blue-800 mb-2">
                    Analytics Cookies
                  </h4>
                  <p className="text-blue-700 text-sm">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold font-poppins text-yellow-800 mb-2">
                    Marketing Cookies
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    Used to deliver personalized advertisements and content.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#922e2e]/20 to-transparent mb-12"></div>

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-poppins text-[#922e2e] mb-6">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Under applicable data protection laws, you have the following
                rights regarding your personal data:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-eye-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Right to Access
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Request a copy of your personal data we hold
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-edit-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Right to Rectification
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Request correction of inaccurate data
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-delete-bin-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Right to Erasure
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Request deletion of your personal data
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-download-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Right to Portability
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Request transfer of your data to another service
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-stop-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Right to Object
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Object to processing of your data for marketing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-pause-line w-5 h-5 flex items-center justify-center text-[#922e2e] mt-1"></i>
                    <div>
                      <h4 className="font-semibold font-poppins text-gray-900">
                        Right to Restrict
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Request restriction of data processing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-50 py-16 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-[#922e2e] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our privacy practices and
              data protection measures.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() =>
                    setOpenItem(openItem === index ? null : index)
                  }>
                  <span className="font-semibold font-poppins text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <i
                    className={`ri-arrow-${
                      openItem === index ? 'up' : 'down'
                    }-s-line w-5 h-5 flex items-center justify-center text-[#922e2e] flex-shrink-0`}></i>
                </button>
                {openItem === index && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Contact US */}
      <section className="bg-white py-16 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-[#922e2e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-question-line w-8 h-8 flex items-center justify-center text-[#922e2e]"></i>
            </div>

            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
              Have Questions About Our Privacy Policy?
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our privacy team is here to help you understand how we protect
              your data and answer any questions you may have about our privacy
              practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-[#922e2e] font-dmSans text-white px-8 py-3 rounded-full hover:bg-[#7a2525] transition-colors font-semibold whitespace-nowrap cursor-pointer">
                  Contact Privacy Team
                </button>
              </Link>
              <Link to="mailto:infocodecelix@gmail.com">
                <button className="border font-dmSans border-[#922e2e] text-[#922e2e] px-8 py-3 rounded-full hover:bg-[#922e2e] hover:text-white transition-colors font-semibold whitespace-nowrap cursor-pointer">
                  Email Us Directly
                </button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center mr-2 text-[#922e2e]"></i>
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-lock-line w-4 h-4 flex items-center justify-center mr-2 text-[#922e2e]"></i>
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-2 text-[#922e2e]"></i>
                  <span>24/7 Data Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
