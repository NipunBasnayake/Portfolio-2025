import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalData, sectionsData } from '../data.js';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const roles = personalData.roles;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          {/* Additional floating particles */}
          <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-20 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-40 left-40 w-3 h-3 bg-cyan-400/40 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">

            {/* Enhanced Profile Image */}
            <div className="relative inline-block group">
              <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mx-auto mt-12 relative">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Middle ring */}
                <div className="absolute inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-pulse opacity-50"></div>

                {/* Inner container */}
                <div className="absolute inset-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-2xl">
                  {/* Image container with better sizing */}
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-br from-slate-700 to-slate-800">
                    {!imageError && personalData.profilePic ? (
                        <>
                          {/* Loading placeholder */}
                          {!imageLoaded && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                              </div>
                          )}

                          {/* Actual image */}
                          <img
                              src={personalData.profilePic}
                              alt={`${personalData.firstName}'s profile illustration`}
                              className={`w-full h-full object-cover object-center transition-all scale-100 duration-500 group-hover:scale-110 ${
                                  imageLoaded ? 'opacity-100' : 'opacity-0'
                              }`}
                              onLoad={handleImageLoad}
                              onError={handleImageError}
                              loading="eager"
                          />

                          {/* Overlay gradient for better blending */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </>
                    ) : (
                        /* Fallback when image fails to load */
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl lg:text-4xl shadow-inner">
                          {personalData.firstName.charAt(0)}
                        </div>
                    )}
                  </div>
                </div>

                {/* Hover effect ring */}
                <div className="absolute inset-0 rounded-full ring-4 ring-transparent group-hover:ring-blue-400/30 transition-all duration-500 transform group-hover:scale-105"></div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-blue-400 text-sm sm:text-base font-medium tracking-wider uppercase animate-fade-in">
                  {sectionsData.hero.subtitle}
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient">
                  {personalData.firstName}
                </span>
                </h1>
              </div>

              <div className="h-16 flex items-center justify-center">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300">
                  I'm a <span className="text-blue-400 font-semibold">{displayText}</span>
                  <span className="inline-block w-0.5 h-6 sm:h-8 bg-blue-400 ml-1 animate-pulse"></span>
                </p>
              </div>

              <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                {personalData.experience} years of experience building innovative software solutions.
                Currently pursuing my degree at UCSC, passionate about creating impactful applications.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                {sectionsData.hero.ctaButtons.map((button, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSection(button.link)}
                        className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                            button.type === 'primary'
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:from-blue-600 hover:to-purple-700 relative overflow-hidden'
                                : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/25 relative overflow-hidden'
                        }`}
                    >
                      <span className="relative z-10">{button.text}</span>
                      {button.type === 'primary' && (
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </button>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div className="flex justify-center space-x-6 pt-4">
                {[
                  { href: personalData.socialLinks.github, icon: Github, label: 'GitHub' },
                  { href: personalData.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: `mailto:${personalData.email}`, icon: Mail, label: 'Email' },
                  { href: `tel:${personalData.phone}`, icon: Phone, label: 'Phone' }
                ].map(({ href, icon: Icon, label }, index) => (
                    <a
                        key={index}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group p-3 bg-slate-800/50 hover:bg-slate-700/70 rounded-full text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50"
                        aria-label={label}
                    >
                      <Icon size={24} className="group-hover:animate-pulse" />
                    </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          {/*  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">*/}
          {/*      <div className="p-2 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/50">*/}
          {/*          <ChevronDown size={32} className="text-gray-400 hover:text-blue-400 transition-colors duration-300" />*/}
          {/*      </div>*/}
          {/*  </div>*/}
        </div>

        {/* Custom CSS for animations */}
          <style jsx>{`
              @keyframes gradient {
                  0%, 100% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
              }

              @keyframes fade-in {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
              }

              .animate-gradient {
                  background-size: 200% 200%;
                  animation: gradient 3s ease infinite;
              }

              .animate-fade-in {
                  animation: fade-in 1s ease-out;
              }
          `}</style>
      </section>
  );
};

export default Hero;