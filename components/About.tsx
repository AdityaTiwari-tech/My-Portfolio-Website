
'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated Computer Science student at Shri Ramswaroop Memorial University with a passion for technology and innovation. My journey in programming started in high school, and since then, I've been constantly learning and building projects that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies. I believe in the power of collaboration and continuous learning to create meaningful impact through technology.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg mb-4">
                  <i className="ri-graduation-cap-line text-2xl text-indigo-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600 text-sm">Data Science Major</p>
                <p className="text-gray-600 text-sm">Expected Graduation: June 2026</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                  <i className="ri-code-line text-2xl text-green-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                <p className="text-gray-600 text-sm">2+ Years Coding</p>
                <p className="text-gray-600 text-sm">5 Projects Completed</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://static.readdy.ai/image/dd12b1836bfe8abfddb7dfed3a8dcb95/211b7005879e60f5dee867c580e8f84d.jfif"
              alt="Aditya Tiwari"
              className="rounded-lg shadow-lg object-cover object-top w-full h-96 lg:h-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-1">7.7</div>
                <div className="text-sm text-gray-600">GPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}