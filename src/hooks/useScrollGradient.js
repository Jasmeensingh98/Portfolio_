import { useState, useEffect } from 'react'

export default function useScrollGradient() {
  const [gradient, setGradient] = useState('linear-gradient(135deg, #f0f4f9 0%, #e8f0f7 100%)')

  const gradients = {
    home: 'linear-gradient(135deg, #f0f4f9 0%, #e8f0f7 50%, #dce6f0 100%)',
    about: 'linear-gradient(135deg, #e8f0f7 0%, #dce6f0 50%, #d4e4f0 100%)',
    skills: 'linear-gradient(135deg, #dce6f0 0%, #d4e4f0 50%, #e0e8f4 100%)',
    projects: 'linear-gradient(135deg, #d4e4f0 0%, #e0e8f4 50%, #e8f0f7 100%)',
    experience: 'linear-gradient(135deg, #e0e8f4 0%, #e8f0f7 50%, #f0f4f9 100%)',
    contact: 'linear-gradient(135deg, #e8f0f7 0%, #f0f4f9 50%, #f8fafc 100%)',
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      
      let currentSection = 'home'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section
          }
        }
      }

      setGradient(gradients[currentSection] || gradients.home)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return gradient
}
