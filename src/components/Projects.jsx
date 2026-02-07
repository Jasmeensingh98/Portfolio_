import { useState } from 'react'
import '../styles/Projects.css'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
{
  id: 1,
  title: 'Vulpine Skincare',
  description: 'A modern skincare e-commerce platform built with React and Node.js',
  image: '🧴',
  technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  link: '#',
  details: 'Developed a skincare-focused e-commerce website featuring product listings for cleansers, serums, and moisturizers. Includes user authentication, shopping cart, secure payments, and an admin panel to manage products, orders, and inventory.'
},
   {
  id: 2,
  title: 'Mindease (Group Project)',
  description: 'A mental wellness platform designed for psychology professionals and users',
  image: '🧠',
  technologies: ['HTML', 'CSS', 'MongoDB'],
  link: '#',
  details: 'Built a psychology-focused platform offering mental health resources, self-assessment tools, and guided wellness content. Includes user profiles, appointment booking with psychologists, and a calm, minimal UI designed to promote mental well-being.'
},
{
  id: 3,
  title: 'Bigg Boss Voting Website',
  description: 'An interactive voting platform inspired by the Bigg Boss reality show',
  image: '📺',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
  link: 'https://jasmeensingh98.github.io/techabhivyakti2.0/',
  details: 'Created a responsive Bigg Boss–style voting website where users can vote for their favorite contestants. Implemented dynamic vote counting using JavaScript, interactive UI components, and mobile-first design using Tailwind CSS and Bootstrap.'
},
{
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills',
      image: '💼',
      technologies: ['React', 'Vite', 'CSS3'],
      link: '#',
      details: 'Designed and developed a responsive portfolio website with smooth animations and modern design principles.'
    },
    {
      id: 6,
      title: 'Chatify (Group Project) ',
      description: 'Real-time messaging application with user authentication',
      image: '💬',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      link: '#',
      details: 'Created a real-time chat application with multiple rooms, user status, file sharing, and message history.'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-hover">
                <button className="view-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-header">
              <span className="modal-emoji">{selectedProject.image}</span>
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <p>{selectedProject.details}</p>
              <div className="modal-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Live
              </a>
              <a href="https://github.com/Jasmeensingh98" className="btn btn-secondary">
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
