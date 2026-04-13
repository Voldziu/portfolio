import { useEffect, useRef } from 'react'

function CV() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const pdfUrl = `${import.meta.env.BASE_URL}files/MachalskiCV.pdf`

  return (
    <section id="cv" ref={sectionRef}>
      <div className="container">
        <h2>My CV</h2>
        <div className="cv-container">
          <iframe
            src={pdfUrl}
            title="Mikołaj Machalski CV"
            width="100%"
            height="800px"
          />
        </div>
        <div className="cv-fallback">
          <a href={pdfUrl} download className="cv-button">
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default CV
