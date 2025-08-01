import React, { useState } from 'react';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      title: 'Email me directly',
      value: 'udshrestha48@gmail.com',
      icon: <IoMailSharp className="w-6 h-6" />,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-l-blue-500',
    },
    {
      title: 'Call for urgent projects',
      value: '+977 9847527022',
      icon: <FaPhone className="w-6 h-6" />,
      bgColor: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      borderColor: 'border-l-cyan-500',
    },
    {
      title: 'Based in',
      value: 'Nepal (Remote Available)',
      icon: <FaLocationDot className="w-6 h-6" />,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-l-yellow-500',
    },
  ];

  const formFields = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      placeholder: 'Your name',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'your@email.com',
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      placeholder: 'Tell me about your project...',
      rows: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Work <span className="text-blue-500">Together</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send me a message</h3>
            <p className="text-gray-600 mb-8">I'd love to hear about your project and see how I can help.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      required={field.required}
                      rows={field.rows || 4}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    />
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleInputChange}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    />
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Send Message
                  </>
                )}
              </button>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always excited to work on new projects and help bring innovative ideas to life. Whether you need a
                complete web application or want to discuss a potential collaboration, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 ${method.borderColor}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center`}>
                      <div className={method.iconColor}>{method.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{method.title}</h4>
                      <p className="text-gray-600">{method.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-green-800">Quick Response</h4>
                  <p className="text-green-700 text-sm">I typically respond to all inquiries within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
    