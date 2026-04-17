// ========================================
// MODERN PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initScrollProgress();
  initNavbar();
  initTypingEffect();
  initScrollAnimations();
  initTestimonialSlider();
  initBackToTop();
  initContactForm();
  initSkillAnimations();
});

// ========================================
// PARTICLE BACKGROUND
// ========================================
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#6366f1'
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#6366f1',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
}

// ========================================
// SCROLL PROGRESS BAR
// ========================================
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgress');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    progressBar.style.width = scrollPercentage + '%';
  });
}

// ========================================
// NAVBAR FUNCTIONALITY
// ========================================
function initNavbar() {
  const navbar = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navLink = document.querySelectorAll('.nav-link');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu when clicking on a link
  navLink.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.forEach(link => link.classList.remove('active'));
        if (correspondingLink) {
          correspondingLink.classList.add('active');
        }
      }
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// TYPING EFFECT
// ========================================
function initTypingEffect() {
  const typingElement = document.querySelector('.typing-text');
  
  if (!typingElement) return;
  
  const texts = [
    'Computer Engineering Student',
    'AI Enthusiast',
    'Learning Deep Learning',
    'Learning Web Development',
    'Problem Solver',
    'Aspiring Tech Innovator'
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // Pause before next word
    }
    
    setTimeout(type, typingSpeed);
  }
  
  type();
}

// ========================================
// SCROLL ANIMATIONS (Intersection Observer)
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Animate skill bars
        if (entry.target.classList.contains('skill-item')) {
          const skillProgress = entry.target.querySelector('.skill-progress');
          if (skillProgress) {
            skillProgress.style.animation = 'fillBar 1.5s ease forwards';
          }
        }
        
        // Animate stat boxes
        if (entry.target.classList.contains('stat-box')) {
          animateValue(entry.target.querySelector('h4'));
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements
  const animateElements = document.querySelectorAll(
    '.about-content, .skill-category, .project-card, .testimonial-card, .contact-item, .stat-box'
  );
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ========================================
// ANIMATE NUMBERS
// ========================================
function animateValue(element) {
  if (!element) return;
  
  const text = element.textContent;
  const number = parseInt(text);
  
  if (isNaN(number)) return;
  
  const duration = 2000;
  const increment = number / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= number) {
      element.textContent = text;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + (text.includes('+') ? '+' : '');
    }
  }, 16);
}

// ========================================
// TESTIMONIAL SLIDER
// ========================================
function initTestimonialSlider() {
  const testimonials = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsContainer = document.querySelector('.slider-dots');
  
  if (!testimonials.length) return;
  
  let currentSlide = 0;
  
  // Create dots
  testimonials.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  
  const dots = dotsContainer.querySelectorAll('span');
  
  function updateSlider() {
    testimonials.forEach((testimonial, index) => {
      testimonial.classList.remove('active');
      dots[index].classList.remove('active');
      
      if (index === currentSlide) {
        testimonial.classList.add('active');
        dots[index].classList.add('active');
      }
    });
  }
  
  function goToSlide(n) {
    currentSlide = n;
    if (currentSlide >= testimonials.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = testimonials.length - 1;
    updateSlider();
  }
  
  function nextSlide() {
    goToSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }
  
  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  // Auto slide
  setInterval(nextSlide, 5000);
  
  // Initialize
  updateSlider();
}

// ========================================
// BACK TO TOP BUTTON
// ========================================
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========================================
// CONTACT FORM HANDLING
// ========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      // Show success message
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
      
      // Reset form
      form.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 3000);
      
      // You can add your actual form submission logic here
      console.log('Form Data:', data);
    }, 2000);
  });
  
  // Add input animation effects
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'translateY(0)';
    });
  });
}

// ========================================
// SKILL BAR ANIMATIONS
// ========================================
function initSkillAnimations() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillProgress = entry.target.querySelector('.skill-progress');
        if (skillProgress) {
          const width = skillProgress.style.width;
          skillProgress.style.width = '0';
          setTimeout(() => {
            skillProgress.style.width = width;
          }, 100);
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  skillItems.forEach(item => observer.observe(item));
}

// ========================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ========================================
function initCursorTrail() {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll('.cursor-circle');
  
  if (!circles.length) return;
  
  circles.forEach((circle) => {
    circle.x = 0;
    circle.y = 0;
  });
  
  window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });
  
  function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + 'px';
      circle.style.top = y - 12 + 'px';
      circle.style.transform = `scale(${(circles.length - index) / circles.length})`;
      
      circle.x = x;
      circle.y = y;
      
      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
  }
  
  animateCircles();
}

// ========================================
// PARALLAX EFFECT
// ========================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-image');
  
  parallaxElements.forEach(el => {
    const speed = 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========================================
// THEME TOGGLE (Optional - if you want dark/light mode)
// ========================================
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  
  if (!themeToggle) return;
  
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  themeToggle.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// ========================================
// CONSOLE MESSAGE (Fun Easter Egg)
// ========================================
console.log('%c👋 Hello Developer!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository!', 'color: #8b5cf6; font-size: 14px;');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #ec4899; font-size: 12px;');

// ========================================
// PREVENT CONSOLE ERRORS
// ========================================
window.addEventListener('error', (e) => {
  console.warn('An error occurred:', e.message);
});

// ========================================
// PAGE LOAD ANIMATION
// ========================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
