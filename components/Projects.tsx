
'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Machine Learning','Data Science'];

  const projects = [
    {
      id: 1,
      title: 'Supply Chain Analytics',
      description: 'Advanced analytics platform for supply chain optimization using real-time data processing and predictive modeling. Features inventory tracking, demand forecasting, and supplier performance monitoring.',
      image: 'https://readdy.ai/api/search-image?query=Supply%20chain%20analytics%20dashboard%20on%20computer%20screen%20showing%20logistics%20data%2C%20inventory%20charts%2C%20warehouse%20management%20interface%2C%20professional%20business%20analytics%20visualization%20with%20modern%20office%20setting&width=600&height=400&seq=project-supply-001&orientation=landscape',
      category: 'Data Science',
      technologies: ['Visualization', 'Python', 'Deep Learning'],
      demoLink: '#',
      githubLink: 'https://github.com/AdityaTiwari-tech/Supply-Chain-Analytics'
    },
    {
      id: 2,
      title: 'Spotify Clone',
      description: 'Full-featured music streaming application with playlist management, audio streaming, search functionality, and social features. Built with modern web technologies.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20music%20streaming%20app%20interface%20on%20laptop%20screen%2C%20dark%20theme%20music%20player%20with%20playlists%2C%20album%20covers%2C%20audio%20controls%2C%20contemporary%20workspace%20with%20headphones%20and%20speakers&width=600&height=400&seq=project-spotify-001&orientation=landscape',
      category: 'Web Development',
      technologies: ['HTML', 'CSS', 'React.js', 'MongoDB', 'Web Audio API'],
      demoLink: '#',
      githubLink: 'https://github.com/AdityaTiwari-tech/Spotify-clone'
    },
    {
      id: 3,
      title: 'ISL Smart Communicator',
      description: 'AI-powered mobile application that translates Indian Sign Language gestures into text and speech in real-time using computer vision and machine learning algorithms.',
      image: 'https://readdy.ai/api/search-image?query=Sign%20language%20translation%20mobile%20app%20interface%20on%20smartphone%2C%20hand%20gesture%20recognition%20technology%2C%20AI%20communication%20app%20with%20clean%20modern%20UI%20design%2C%20inclusive%20technology%20demonstration%20in%20bright%20studio%20setting&width=600&height=400&seq=project-isl-001&orientation=landscape',
      category: 'Machine Learning',
      technologies: ['HTML','CSS','Javascript', 'TensorFlow', 'OpenCV', 'Python'],
      demoLink: '#',
      githubLink: 'https://drive.google.com/drive/folders/1eMA4smMa8TSfRG2GTuZ5iJe--dfBUyr3?usp=sharing'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations and modern design.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20portfolio%20website%20displayed%20on%20multiple%20devices%20including%20laptop%2C%20tablet%20and%20phone%2C%20responsive%20design%20showcase%2C%20clean%20interface%20with%20professional%20presentation%2C%20studio%20lighting&width=600&height=400&seq=project-portfolio-001&orientation=landscape',
      category: 'Web Development',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      demoLink: '#',
      githubLink: 'https://github.com/AdityaTiwari-tech/My-Portfolio-Website'
    },
    
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of the projects I've worked on recently. Each one represents a learning journey and a step forward in my development skills.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-github-line w-4 h-4 flex items-center justify-center mr-1"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
