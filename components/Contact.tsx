
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface ContactFormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: ContactFormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'tiwariaditya15092005@gmail.com',
      link: 'mailto:tiwariaditya15092005@gmail.com'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '+91 - 8303164785',
      link: 'tel:+91 - 8303164785'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'Lucknow, Uttar Pradesh, India',
      link: '#'
    },
    
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and interesting projects. Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-white rounded-lg border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 group-hover:bg-indigo-200 rounded-lg mr-4 transition-colors duration-300">
                    <i className={`${info.icon} text-xl text-indigo-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Find me on social media</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'ri-github-line', link: 'https://github.com/AdityaTiwari-tech', color: 'hover:bg-gray-600' },
                  { icon: 'ri-linkedin-line', link: 'https://www.linkedin.com/in/aditya-tiwari-4454b9235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:bg-blue-600' },
                  
                  { icon: 'ri-instagram-line', link: 'https://www.instagram.com/class_aditya/?utm_source=qr&igsh=eDVpY3loeDRyYzBk', color: 'hover:bg-pink-600' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-600 rounded-lg hover:text-white transition-all duration-300 cursor-pointer ${social.color}`}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning={true}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="Your full name"
                    suppressHydrationWarning={true}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="your.email@example.com"
                    suppressHydrationWarning={true}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  placeholder="What's this about?"
                  suppressHydrationWarning={true}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  suppressHydrationWarning={true}
                ></textarea>
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer whitespace-nowrap"
                suppressHydrationWarning={true}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center mr-2"></i>
                    Send Message
                  </span>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                  <div className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    Thank you! Your message has been sent successfully.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
