'use client'
import React from 'react'

const Navbar = () => {
  const [bgColor, setBgColor] = React.useState('bg-transparent');
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
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

  return (
    <nav className={`fixed top-0 left-0 w-full h-16 md:h-20 ${bgColor} flex items-center z-50 transition-all duration-300`}>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          {/* Logo/Brand */}
          <h1 className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase transition-colors duration-300 ${
            isScrolled ? 'text-gray-900' : 'text-gray-700'
          }`}>
            
            AMP-Installer
          </h1>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <a href='#features' className={`font-medium transition-colors duration-300 hover:text-black ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}>
              Features
            </a>
            <a href='#solutions' className={`font-medium transition-colors duration-300 hover:text-black ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}>
              Solutions
            </a>
            <a href='#contact' className={`font-medium transition-colors duration-300 hover:text-black ${
              isScrolled ? 'text-gray-700' : 'text-gray-700'
            }`}>
              Contact
            </a>
            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-black text-white hover:bg-black' 
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className='md:hidden p-2'>
            <div className='w-6 h-0.5 bg-white mb-1.5'>
              <span className='sr-only'>Open menu</span>
            </div>
            <div className='w-6 h-0.5 bg-white mb-1.5'>
              <span className='sr-only'>Open menu</span>
            </div>
            <div className='w-6 h-0.5 bg-white'>
              <span className='sr-only'>Open menu</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar