import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, MessageSquare, Send } from 'lucide-react';
import { personalData, sectionsData } from '../data.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalData.email,
      href: `mailto:${personalData.email}`,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalData.phone,
      href: `tel:${personalData.phone}`,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Chat with me',
      href: personalData.socialLinks.whatsapp,
      color: 'from-green-400 to-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalData.location,
      href: '#',
      color: 'from-red-500 to-red-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalData.socialLinks.github,
      color: 'hover:bg-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalData.socialLinks.linkedin,
      color: 'hover:bg-blue-600'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: personalData.socialLinks.facebook,
      color: 'hover:bg-blue-500'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: personalData.socialLinks.instagram,
      color: 'hover:bg-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {sectionsData.contact.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {sectionsData.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {sectionsData.contact.heading}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {sectionsData.contact.description}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{method.label}</div>
                      <div className="text-slate-600">{method.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;