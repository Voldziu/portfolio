import { useEffect, useRef } from 'react'
import { publications } from '../data/publications'

function Publications() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section id="publications" ref={sectionRef}>
      <div className="container">
        <h2>Publications</h2>
        {publications.length === 0 ? (
          <div className="empty-state">
            <i className="fas fa-book-open"></i>
            <p>No publications yet. Stay tuned!</p>
          </div>
        ) : (
          <div className="publications-grid">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card">
                <h3>
                  {pub.url ? (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="pub-meta">
                  {pub.authors && <span>{pub.authors}</span>}
                  {pub.journal && <span> &mdash; {pub.journal}</span>}
                  {pub.year && <span> ({pub.year})</span>}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Publications
