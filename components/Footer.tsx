
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-['Pacifico'] text-indigo-400 mb-4">
              Aditya Tiwari
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Computer Science student passionate about creating innovative solutions through code. Always eager to learn new technologies and tackle challenging problems.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'ri-github-line', link: 'https://github.com/AdityaTiwari-tech', label: 'GitHub' },
                { icon: 'ri-linkedin-line', link: 'www.linkedin.com/in/aditya-tiwari-4454b9235', label: 'LinkedIn' },
                
                { icon: 'ri-mail-line', link: 'tiwariaditya15092005@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-indigo-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#' },
                { name: 'Skills', href: '#' },
                { name: 'Projects', href: '#' },
                { name: 'Experience', href: '#' },
                { name: 'Contact', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'API Development',
                'Database Design',
                'Code Review'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Aditya Tiwari. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}