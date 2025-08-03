
'use client';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20laptop%2C%20notebooks%2C%20and%20plants%20on%20a%20clean%20white%20desk%2C%20soft%20natural%20lighting%20from%20large%20windows%2C%20contemporary%20interior%20design%20with%20neutral%20colors%20and%20clean%20lines%2C%20professional%20and%20inspiring%20atmosphere&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-400">Aditya Tiwari</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-200 mb-8 font-light">
            Computer Science Student & Aspiring Software Developer
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Passionate about creating innovative solutions through code. Currently pursuing my degree in Computer Science in specialization with Data Science And Artificial Intelligence with a focus on web development, data science and artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-eye-line w-5 h-5 flex items-center justify-center mr-2"></i>
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-2"></i>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
