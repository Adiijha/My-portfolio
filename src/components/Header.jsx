import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="bg-slate-800 shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between">
        <a href="#home" className="text-white text-xl h-8 w-8"> <FontAwesomeIcon icon={faCode} beat/></a>
        <ul className="flex justify-center space-x-6 gap-4">
          <li><a href="#home" className="text-gray-400 hover:text-white text-xl"> <FontAwesomeIcon icon={faHouse} /> Home</a></li>
          <li><a href="#projects" className="text-gray-400 hover:text-white text-xl"> <FontAwesomeIcon icon={faBook} /> Projects</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white text-xl"> <FontAwesomeIcon icon={faPhone} /> Contact</a></li>
        </ul>
        <div className="flex items-center gap-2">
          <a href="https://github.com/adiijha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://linkedin.com/in/adiikj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
          <a href="https://twitter.com/adii_kj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
      </div>
      </nav>
    </header>
  )
}