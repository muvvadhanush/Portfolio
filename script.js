// Set Dark Mode as Default
const body = document.body;
body.classList.add('dark-theme');

// Certificate Gallery Modal - Updated for new cert-logo structure
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const certModalCaption = document.getElementById('certModalCaption');
const certModalClose = document.querySelector('.cert-modal-close');

// Get all certificate logos for new structure
const certLogos = document.querySelectorAll('.cert-logo');

certLogos.forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.stopPropagation();
        const certItem = logo.closest('.cert-item');
        const certName = certItem.querySelector('h4').textContent;
        const certPath = logo.getAttribute('src');
        
        if (certModal && certModalImg) {
            certModal.classList.add('active');
            certModalImg.src = certPath;
            certModalCaption.textContent = certName;
        }
    });
});

// Close modal when close button is clicked
if (certModalClose) {
    certModalClose.addEventListener('click', () => {
        certModal.classList.remove('active');
    });
}

// Close modal when clicking outside the image
if (certModal) {
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            certModal.classList.remove('active');
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal) {
        certModal.classList.remove('active');
    }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Smooth scroll for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.getAttribute('href') && btn.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = btn.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and other elements
document.querySelectorAll('.project-card, .skill-category, .cert-item, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = '';
        }
    });
});

// Handle viewport resize for responsive behavior
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Prevent body scroll when mobile menu is open
function toggleBodyScroll(isOpen) {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

hamburger.addEventListener('click', function() {
    toggleBodyScroll(this.classList.contains('active'));
});

console.log('Portfolio website loaded successfully!');

