import '../styles/About.css'
import aboutImage from '../images/jasmine.png'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I’m a Computer Science student and aspiring full-stack developer, currently focused on building my skills through hands-on projects and a structured full-stack development course. I enjoy creating responsive, user-friendly interfaces using React and learning backend development with Node.js while continuously improving my understanding of modern web technologies
            </p>
            <p>
             My journey in tech began with a curiosity about how the web works, and it continues as I actively build my skills by learning, experimenting, and creating projects that focus on clean code and thoughtful design
            </p>
            <p>
             When I’m not coding, I explore new technologies, build small projects, and learn from the developer community to grow my skills.
            </p>
            <div className="about-stats">
              <div className="stat">
               
              </div>
              <div className="stat">
                <h3>2-3</h3>
                <p>Projects Completed</p>
              </div>
              
            </div>
          </div>
          <div className="about-image">
            <div className="about-avatar">
              <img src={aboutImage} alt="Jasmeen" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
