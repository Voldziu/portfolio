import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.2 }
    )

    const sections = [aboutRef.current, contactRef.current]
    sections.forEach((el) => el && observer.observe(el))

    return () => {
      sections.forEach((el) => el && observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <section id="about" ref={aboutRef}>
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img
                src={`${import.meta.env.BASE_URL}images/portfolio-photo.jpg`}
                alt="Mikołaj Machalski"
              />
            </div>
            <div className="about-text">
              <p>
                Hello, my name is <strong>Mikołaj</strong> and I am a 1st year
                AI Student (MsC) at Wroclaw University of Science
                and Technology.
              </p>
              <p>
                In 2026 I graduated from WUST in Applied Computer Science
              </p>
              <p>
                I'm passionate about Artificial Inteligence in any kind, but most significantly  
                <strong> Deep Learning </strong>, <strong>CNN</strong>s and <strong>Generative Models</strong> such as <strong>VAE</strong>s and <strong>Diffusion</strong> Models
              </p>
              <Link to="/cv" className="cv-button">
                <i className="fas fa-file-pdf"></i> View my CV
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef}>
        <div className="container">
          <h2>Contact Me</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div className="info">
                  <h4>Phone</h4>
                  <p>+48 508 152 629</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <h4>Email</h4>
                  <a href="mailto:mikolaj@machalski.com.pl">
                    mikolaj@machalski.com.pl
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <h4>Location</h4>
                  <p>Wroclaw, Poland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
