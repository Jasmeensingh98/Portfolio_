import '../styles/Hero.css'
import jasmeen from '../images/jasmine.png'

export default function Hero({ setActiveSection }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm <span className="name-highlight">Jasmeen Singh</span></h1>
          <p className="hero-subtitle">Full Stack Developer |  Problem Solver</p>
          <p className="hero-description">
 I build responsive web applications using modern tools, with an emphasis on clean code, structured development, and good user experience.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => {
                setActiveSection('projects')
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                setActiveSection('contact')
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get In Touch
            </button>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Jasmeensingh98" className="social-link" title="GitHub">
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/jasmeen-singh-3601172a6/" className="social-link" title="LinkedIn">
              <span>LinkedIn</span>
            </a>
            {/* <a href="#" className="social-link" title="Twitter">
              <span>Twitter</span>
            </a> */}
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">
            <img src={jasmeen} alt="Jasmeen Singh" />
          </div>
        </div>
      </div>
    </section>
  )
}
