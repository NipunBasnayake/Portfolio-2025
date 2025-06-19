import React from 'react';
import { MapPin, GraduationCap, Calendar, Award } from 'lucide-react';
import { personalData, sectionsData } from '../data.js';

const About = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: personalData.experience, label: 'Years Experience', icon: Award },
    { number: '15+', label: 'Projects Completed', icon: GraduationCap },
    { number: '6+', label: 'Certifications', icon: Award },
    { number: personalData.age, label: 'Years Old', icon: Calendar },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {sectionsData.about.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {sectionsData.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">

            <div className="relative">
              <div className="w-full max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-blue-100 p-8 rounded-2xl shadow-xl">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-4xl">
                    <img
                        src={personalData.profilePic}
                        className="w-full h-full object-cover rounded-full"
                        alt="Profile"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">
                {personalData.fullName}
              </h3>

              <div className="flex items-center text-slate-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{personalData.location}</span>
              </div>

              <div className="flex items-center text-slate-600 mb-6">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span>{personalData.education}</span>
              </div>

              <p className="text-slate-700 leading-relaxed text-lg">
                {personalData.bio}
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="font-semibold text-slate-900 mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Full Stack Development', 'Java', 'React', 'Angular', 'Spring Boot', 'Database Design'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {sectionsData.about.ctaButtons.map((button, index) =>
                  button.id === 'download-cv' ? (
                      <a
                          key={index}
                          href={button.link}
                          download
                          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                              button.type === 'primary'
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
                                  : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                          }`}
                      >
                        {button.text}
                      </a>
                  ) : (
                      <button
                          key={index}
                          onClick={() => scrollToSection(button.link)}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                              button.type === 'primary'
                                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl'
                                  : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                          }`}
                      >
                        {button.text}
                      </button>
                  )
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;