import React from 'react';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';
import { certificationsData, sectionsData } from '../data.js';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {sectionsData.certifications.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {sectionsData.certifications.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-slate-700"
            >
              {/* Certificate Badge/Image */}
              <div className="relative mb-6">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl overflow-hidden">
                  <img
                      src={cert.badge}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-center text-slate-400">
                    <Building className="w-4 h-4 mr-2" />
                    <span className="text-sm">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-slate-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Verification Link */}
                {cert.verificationLink && (
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-slate-400 mb-8 max-w-3xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional development and expertise validation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{certificationsData.length}</div>
                <div className="text-slate-400">Total Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                <div className="text-slate-400">Different Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-slate-400">Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;