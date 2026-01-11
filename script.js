gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.to('.hero-title', {
    opacity: 1,
    duration: 1.5,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.to('.hero-subtitle', {
    opacity: 1,
    duration: 1.5,
    delay: 1,
    ease: 'power3.out'
});

gsap.to('.hero-line', {
    width: '200px',
    duration: 1.5,
    delay: 1.5,
    ease: 'power3.out'
});

// Parallax effect on hero
gsap.to('.hero-bg', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 300,
    ease: 'none'
});

// Reveal animations
const reveals = document.querySelectorAll('.reveal');
reveals.forEach(reveal => {
    gsap.to(reveal, {
        scrollTrigger: {
            trigger: reveal,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Reveal left animations
const revealsLeft = document.querySelectorAll('.reveal-left');
revealsLeft.forEach(reveal => {
    gsap.to(reveal, {
        scrollTrigger: {
            trigger: reveal,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Reveal right animations
const revealsRight = document.querySelectorAll('.reveal-right');
revealsRight.forEach(reveal => {
    gsap.to(reveal, {
        scrollTrigger: {
            trigger: reveal,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Counter animation for stats
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));

    ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        onEnter: () => {
            gsap.to(stat, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: 'power2.out'
            });
        }
    });
});

// Portfolio item parallax
const portfolioItems = document.querySelectorAll('.portfolio-item-bg');
portfolioItems.forEach(item => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -50,
        ease: 'none'
    });
});

// Service cards stagger animation
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 70%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: target,
                ease: 'power3.inOut'
            });
        }
    });
});

// Form submission (placeholder)
document.querySelector('.submit-btn').addEventListener('click', function (e) {
    e.preventDefault();
    gsap.to(this, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            alert('Thank you for your inquiry. We will contact you shortly.');
        }
    });
});
