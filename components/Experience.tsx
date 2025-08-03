
'use client';
import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'CodeAlpha.',
      duration: 'March 2024 - April 2024',
      location: 'Remote',
      description: 'Developed my analytical skills in the field of Data Science',
      achievements: [
        'Worked on real world data machine learning projects',
        'Gaining hands on experience in classfication and regression algorithms',
        
      ],
      icon: 'ri-code-s-slash-line',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title:'Python Developer Intern', 
      company: 'OctaNet Services Private Limited',
      duration: 'July 2024 - August 2024',
      location: 'Remote',
      description: 'This is an e-learning bootcamp where I have learned emeerging trends of Python programming.',
      achievements: [
        'The experience has been incredibly rewarding and has a significantly enhanced my skills in coding, problem solving and software development.'
      ],
      icon: 'ri-graduation-cap-line',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Web Developer Intern',
      company: '',
      duration: 'May 2025 - June 2025',
      location: 'Remote',
      description: 'Created responsive websites for small businesses using modern web technologies. Managed client relationships and project timelines.',
      achievements: [
        'This is a e-learining based internship program which helps me get hands on experience with various types of web technologies.'
      ],
      icon: 'ri-global-line',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technolgy in Data Science and Artificial Intelligence',
      institution: 'Shri Ramswaroop Memorial Univeristy',
      duration: '2022 - 2026',
      gpa: '7.7',
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Software Engineering',
        'Machine Learning',
        'Web Development',
        'Computer Networks'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in technology through internships, projects, and academic achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-lg mr-3">
                <i className="ri-briefcase-line text-indigo-600"></i>
              </div>
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${exp.color} flex-shrink-0`}>
                      <i className={`${exp.icon} text-xl`}></i>
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap mt-1 sm:mt-0">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-lg mr-3">
                <i className="ri-book-open-line text-indigo-600"></i>
              </div>
              Education
            </h3>

            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                    <p className="text-gray-600">{edu.duration}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-indigo-600 mb-1">{edu.gpa}</div>
                      <div className="text-xs text-gray-500">GPA</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-3">Relevant Coursework</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {edu.coursework.map((course, i) => (
                      <div key={i} className="bg-white/70 px-3 py-2 rounded-lg text-sm text-gray-700 border border-white/50">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-yellow-100 rounded mr-3">
                  <i className="ri-trophy-line text-yellow-600"></i>
                </div>
                Achievements & Awards
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 text-sm">5⭐rating in HackerRank</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 text-sm">26 Rank on GeeksforGeeks at Univeristy Level</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 text-sm">1063 Rank in Naukri.com Apitude Competition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}