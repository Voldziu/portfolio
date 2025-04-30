// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Animate hamburger menu
      const bars = document.querySelectorAll('.bar');
      menuToggle.classList.toggle('active');
      if (menuToggle.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });
  
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        
        // Reset hamburger menu
        if (menuToggle.classList.contains('active')) {
          menuToggle.classList.remove('active');
          const bars = document.querySelectorAll('.bar');
          bars[0].style.transform = 'none';
          bars[1].style.opacity = '1';
          bars[2].style.transform = 'none';
        }
      });
    });
  
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Update active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLinkItems = document.querySelectorAll('.nav-links a');
  
    function updateActiveLink() {
      let current = '';
      let scrollPosition = window.scrollY + 200;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
  
      navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    }
  
    // Set up intersection observer for section animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
  
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
  
    // Make videos and images more visible (scaled appropriately)
    const projectImgs = document.querySelectorAll('.project-img-container video, .project-img-container img');
    projectImgs.forEach(media => {
      // Ensure videos and images are properly contained
      media.style.objectFit = 'contain';
      media.style.maxHeight = '100%';
      media.style.width = 'auto';
      media.style.margin = '0 auto';
      
      // For videos, make sure they're muted and looping
      if (media.tagName === 'VIDEO') {
        media.muted = true;
        media.loop = true;
        media.autoplay = true;
        media.play().catch(e => console.log('Auto-play prevented:', e));
      }
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Calculate header height dynamically
          const headerHeight = document.querySelector('header').offsetHeight;
          
          window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Call updateActiveLink on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Initial call to set the active link and header state
    updateActiveLink();
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    }
  });