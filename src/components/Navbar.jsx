import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <NavLink to="/" className="logo" onClick={closeMenu}>
            Mikołaj Machalski
          </NavLink>
          <p className="subtitle">Deep Learning Engineer</p>
          <div
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <div className="bar" style={menuOpen ? { transform: 'rotate(-45deg) translate(-5px, 6px)' } : {}} />
            <div className="bar" style={menuOpen ? { opacity: 0 } : {}} />
            <div className="bar" style={menuOpen ? { transform: 'rotate(45deg) translate(-5px, -6px)' } : {}} />
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><NavLink to="/" end onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink to="/publications" onClick={closeMenu}>Publications</NavLink></li>
            <li><NavLink to="/cv" onClick={closeMenu}>CV</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
