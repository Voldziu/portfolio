function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://linkedin.com/in/mikmach" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Voldziu" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/mjmachalski" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Mikołaj Machalski Corp</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
