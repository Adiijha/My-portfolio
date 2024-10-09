import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHouse, faPhone, faBook, faLaptop, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-slate-800 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        {!isOpen && (
          <a href="#home" className="text-white text-xl h-8 w-8">
            <FontAwesomeIcon icon={faCode} beat />
          </a>
        )}

        {/* Hamburger Icon */}
        <button 
          className="text-white text-2xl md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Fullscreen Menu with Slide Animation */}
        <div className={`fixed inset-0 bg-slate-800 z-50 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
          <button 
            className="absolute top-6 right-6 text-white text-3xl" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          {/* Menu Items */}
          <ul className="flex flex-col items-center space-y-6">
            <li><a href="#home" className="text-gray-400 hover:text-white text-2xl" onClick={toggleMenu}> <FontAwesomeIcon icon={faHouse} /> Home</a></li>
            <li><a href="#projects" className="text-gray-400 hover:text-white text-2xl" onClick={toggleMenu}> <FontAwesomeIcon icon={faBook} /> Projects</a></li>
            <li><a href="#technologies" className="text-gray-400 hover:text-white text-2xl" onClick={toggleMenu}> <FontAwesomeIcon icon={faLaptop} /> Technologies</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white text-2xl" onClick={toggleMenu}> <FontAwesomeIcon icon={faPhone} /> Contact</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-center item-center gap-3 mt-24">
            <a href="https://github.com/adiijha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/in/adiikj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://instagram.com/adii_jha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
            <a href="https://twitter.com/adii_kj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-6 gap-4">
          <li><a href="#home" className="text-gray-400 hover:text-white text-xl"> <FontAwesomeIcon icon={faHouse} /> Home</a></li>
          <li><a href="#projects" className="text-gray-400 hover:text-white text-xl"> <FontAwesomeIcon icon={faBook} /> Projects</a></li>
          <li><a href="#technologies" className="text-gray-400 hover:text-white text-xl"> <FontAwesomeIcon icon={faLaptop} /> Technologies</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white text-xl"> <FontAwesomeIcon icon={faPhone} /> Contact</a></li>
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <a href="https://github.com/adiijha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://linkedin.com/in/adiikj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://instagram.com/adii_jha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          <a href="https://twitter.com/adii_kj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
        </div>
      </nav>
    </header>
  );
}
