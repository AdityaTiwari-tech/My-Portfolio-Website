
'use client';

export default function Skills() {
  const technicalSkills = [
    { name: 'JavaScript', level: 90, icon: 'ri-javascript-line' },
    { name: 'Python', level: 85, icon: 'ri-code-line' },
    { name: 'React', level: 88, icon: 'ri-reactjs-line' },
    { name: 'Node.js', level: 80, icon: 'ri-nodejs-line' },
    { name: 'Java', level: 75, icon: 'ri-cup-line' },
    { name: 'SQL', level: 82, icon: 'ri-database-2-line' }
  ];

  const tools = [
    'Git & GitHub',
    'VS Code',
    'MongoDB',
    'PostgreSQL',
    'Figma',
    'Jupyter Notebook',
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I've been working with recently
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center mr-3">
                        <i className={`${skill.icon} text-xl text-indigo-600`}></i>
                      </div>
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="bg-gray-50 p-4 rounded-lg text-center border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300 cursor-pointer"
                >
                  <span className="font-medium text-gray-700">{tool}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                      <i className="ri-award-line text-2xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Predictive Modeling Fundamentals I -</h4>
                      <p className="text-sm text-gray-600"> IBM • 2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                      <i className="ri-shield-check-line text-2xl text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Python 101 for Data Science</h4>
                      <p className="text-sm text-gray-600">IBM • 2024</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                      <i className="ri-shield-check-line text-2xl text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">SQL and Relational Databases 101</h4>
                      <p className="text-sm text-gray-600">IBM • 2024</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                      <i className="ri-shield-check-line text-2xl text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Data Science Foundations -  Level 1</h4>
                      <p className="text-sm text-gray-600">IBM • 2024</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                      <i className="ri-shield-check-line text-2xl text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Data Science Methodology</h4>
                      <p className="text-sm text-gray-600">IBM • 2025</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4">
                      <i className="ri-shield-check-line text-2xl text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Introduction to Generative AI Studio</h4>
                      <p className="text-sm text-gray-600">Google Cloud • 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
