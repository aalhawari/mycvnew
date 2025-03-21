document.addEventListener('DOMContentLoaded', function() {
    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      
      // Change icon between menu and x
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileNav.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
      } else {
        icon.setAttribute('data-lucide', 'menu');
      }
      lucide.createIcons();
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
      });
    });
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.padding = '1rem 0';
        header.style.backgroundColor = 'rgba(15, 15, 19, 0.95)';
      } else {
        header.style.padding = '1.5rem 0';
        header.style.backgroundColor = 'rgba(15, 15, 19, 0.8)';
      }
    });
    
    // Modified scroll animation to ensure content is visible from the start
    const fadeElements = document.querySelectorAll('.fade-element');
    
    // Make all elements visible initially
    fadeElements.forEach(element => {
      element.classList.add('animate-fade-in-up');
    });
    
    // Optional: still use intersection observer for animations when scrolling
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    // Show toast notification
    const toast = document.getElementById('toast');
    setTimeout(function() {
      toast.classList.add('active');
      
      setTimeout(function() {
        toast.classList.remove('active');
      }, 5000);
    }, 2000);
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message in the toast
        toast.textContent = `Thanks ${name}, your message has been sent!`;
        toast.classList.add('active');
        
        // Reset form
        contactForm.reset();
        
        // Hide toast after 5 seconds
        setTimeout(function() {
          toast.classList.remove('active');
        }, 5000);
      });
    }
    
    // Initialize Lucide icons
    lucide.createIcons();
  });