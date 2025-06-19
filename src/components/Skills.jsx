import React from 'react';
import * as LucideIcons from 'lucide-react';
import { mainSkillAreas, sectionsData } from '../data.js';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {sectionsData.skills.title}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {sectionsData.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainSkillAreas.map((area, index) => {
            const IconComponent = LucideIcons[area.icon] || LucideIcons.Code;
            
            return (
              <div
                key={index}
                className="group bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium hover:bg-blue-500 hover:text-white transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Overview */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Technology Stack Overview
            </h3>
            <p className="text-slate-400 mb-8 max-w-3xl mx-auto">
              I work with a diverse range of technologies to build scalable, performant applications. 
              From frontend frameworks to backend services and cloud platforms.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-slate-400 text-sm">Frontend Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">12+</div>
                <div className="text-slate-400 text-sm">Backend Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
                <div className="text-slate-400 text-sm">Cloud & Mobile</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-slate-400 text-sm">Tools & Methods</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;