'use client'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('bg-white/80 backdrop-blur-md shadow-lg');
        setIsScrolled(true);
      } else {
        setBgColor('bg-transparent');
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full h-16 md:h-20 ${bgColor} flex items-center z-50 transition-all duration-300`}>
        <div className='container px-4 mx-auto md:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-gray-700'
            }`}>
              AMA-Installer
            </h1>

            <div className='items-center hidden space-x-6 md:space-x-8 lg:space-x-12 md:flex'>
              <a 
                href='#features' 
                className={`font-medium transition-colors duration-300 hover:text-black ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                Features
              </a>
              <a 
                href='#solutions' 
                className={`font-medium transition-colors duration-300 hover:text-black ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                Solutions
              </a>
              <a 
                href='#contact' 
                className={`font-medium transition-colors duration-300 hover:text-black ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                Contact
              </a>
              <button className={`px-4 py-2 text-sm md:text-base rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-gray-900 hover:bg-gray-100 shadow-md'
              }`}>
                Get Started
              </button>
            </div>

            <button 
              className='p-2 md:hidden'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-gray-700'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1.5'}`} />
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-gray-700'
              } ${isMobileMenuOpen ? 'opacity-0' : 'mb-1.5'}`} />
              <div className={`w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-gray-700'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div className={`absolute top-0 right-0 w-3/4 max-w-sm h-full bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full px-6 pt-20 pb-8">
            <button 
              className="absolute p-2 text-gray-600 top-4 right-4 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col space-y-6">
              <a 
                href='#features' 
                className='py-3 text-xl font-medium text-gray-700 transition-colors duration-200 border-b border-gray-200 hover:text-black'
                onClick={handleNavClick}
              >
                Features
              </a>
              <a 
                href='#solutions' 
                className='py-3 text-xl font-medium text-gray-700 transition-colors duration-200 border-b border-gray-200 hover:text-black'
                onClick={handleNavClick}
              >
                Solutions
              </a>
              <a 
                href='#contact' 
                className='py-3 text-xl font-medium text-gray-700 transition-colors duration-200 border-b border-gray-200 hover:text-black'
                onClick={handleNavClick}
              >
                Contact
              </a>
            </div>

            <div className="pt-6 mt-auto">
              <button className="w-full px-4 py-3 font-medium text-white transition-colors duration-200 bg-black rounded-lg hover:bg-gray-800">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 md:h-20" />
    </>
  )
}

export default Navbar