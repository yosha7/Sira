document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for all anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Offset for the fixed glass navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for smooth reveal animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12 // Trigger animation when 12% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once visible so the animation only happens once
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Apply observer to all elements with the 'fade-in' class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
