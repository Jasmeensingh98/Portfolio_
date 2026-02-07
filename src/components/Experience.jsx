import '../styles/Experience.css'

export default function Experience() {
  const experiences = [
    
    {
  id: 1,
  title: 'Full Stack Developer',
  company: 'Academic & Personal Projects',
  period: '2026 - Present',
  description: 'Worked on full-stack web applications through academic and personal projects while maintaining a CGPA of 8.35. Focused on building responsive user interfaces and integrating backend APIs.',
  highlights: [
    'Developed full-stack applications using React and Node.js',
    'Designed responsive UI with Tailwind CSS and Bootstrap',
    'Balanced academics with development work (CGPA: 8.35)'
  ]
},
{
  id: 2,
  title: 'Outreach Team Member',
  company: 'Open Source Chandigarh – Chitkara University',
  period: '2024 - 2025',
  description: 'Actively contributed as an Outreach Team Member for over one year, helping grow the open-source community at Chitkara University. Demonstrated leadership skills by coordinating with teammates, organizing events, and engaging students in open-source initiatives.',
  highlights: [
    'Coordinated with cross-functional student teams',
    'Demonstrated leadership and communication skills',
    'Promoted open-source culture through workshops and events'
  ]
}

  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <span className="period">{exp.period}</span>
                <p>{exp.description}</p>
                <ul className="highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>✓ {highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
