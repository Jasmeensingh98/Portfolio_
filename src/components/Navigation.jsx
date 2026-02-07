import { useState } from 'react'
import '../styles/Navigation.css'

export default function Navigation({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (section) => {
    setActiveSection(section)
    setIsOpen(false)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon"></span>
          <span className="logo-text">Portfolio</span>
        </div>

        <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home') }} className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about') }} className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick('skills') }} className={activeSection === 'skills' ? 'nav-link active' : 'nav-link'}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects') }} className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience') }} className={activeSection === 'experience' ? 'nav-link active' : 'nav-link'}>
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact') }} className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
