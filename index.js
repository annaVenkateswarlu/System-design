// ===================================
// Toast Notification System
// ===================================
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');

    // Clear existing content
    toast.innerHTML = '';
    toast.className = 'toast';

    // Add icon based on type
    const iconSpan = document.createElement('span');
    iconSpan.className = 'toast-icon';

    switch (type) {
        case 'success':
            iconSpan.textContent = '✓';
            toast.classList.add('success');
            break;
        case 'error':
            iconSpan.textContent = '✕';
            toast.classList.add('error');
            break;
        case 'warning':
            iconSpan.textContent = '⚠';
            toast.classList.add('warning');
            break;
        default:
            iconSpan.textContent = 'ℹ';
            toast.classList.add('info');
    }

    // Add message
    const messageSpan = document.createElement('span');
    messageSpan.textContent = message;

    toast.appendChild(iconSpan);
    toast.appendChild(messageSpan);

    // Show toast with animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // Hide after 3.5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

// ===================================
// Sidebar Toggle
// ===================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const overlay = document.getElementById('sidebar-overlay');

    sidebar.classList.toggle('open');
    mainContent.classList.toggle('shifted');

    // Toggle overlay on mobile
    if (overlay) {
        overlay.classList.toggle('active');
    }

    // Prevent body scroll when sidebar is open on mobile
    if (sidebar.classList.contains('open') && window.innerWidth <= 768) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    // Show toast on first open
    if (sidebar.classList.contains('open')) {
        const hasSeenSidebar = sessionStorage.getItem('seenSidebar');
        if (!hasSeenSidebar) {
            showToast('Explore topics by clicking on any item!', 'info');
            sessionStorage.setItem('seenSidebar', 'true');
        }
    }
}

// ===================================
// GSAP Animations
// ===================================
function initAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate hero section on load with delay to ensure loader is hidden
    gsap.from('.hero h1', {
        duration: 1.2,
        y: 40,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out'
    });

    gsap.from('.hero p', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.7,
        ease: 'power3.out'
    });

    gsap.from('.hero button', {
        duration: 1,
        y: 20,
        opacity: 0,
        delay: 0.9,
        ease: 'power3.out'
    });

    // Animate topic cards on scroll
    gsap.utils.toArray('.topic-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });

    // Animate feature items
    gsap.utils.toArray('.feature-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            scale: 0.8,
            opacity: 0,
            delay: index * 0.15,
            ease: 'back.out(1.7)'
        });
    });

    // Parallax effect for orbs
    gsap.to('.orb-1', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        },
        y: 300,
        x: 100,
        ease: 'none'
    });

    gsap.to('.orb-2', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        },
        y: -200,
        x: -50,
        ease: 'none'
    });

    gsap.to('.orb-3', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
        },
        y: -150,
        x: 80,
        ease: 'none'
    });
}

// ===================================
// Interactive Card Hover Effects
// ===================================
function initCardInteractions() {
    const cards = document.querySelectorAll('.topic-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.02,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function () {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });

        card.addEventListener('click', function () {
            gsap.to(this, {
                duration: 0.15,
                scale: 0.98,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });
        });
    });
}

// ===================================
// Smooth Scroll for Internal Links
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ===================================
// Button Ripple Effect
// ===================================
function initButtonEffects() {
    const buttons = document.querySelectorAll('button, .btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                transform: translate(-50%, -50%) scale(0);
                pointer-events: none;
            `;

            this.appendChild(ripple);

            gsap.to(ripple, {
                duration: 0.6,
                scale: 10,
                opacity: 0,
                ease: 'power2.out',
                onComplete: () => ripple.remove()
            });
        });
    });
}

// ===================================
// Dark Mode Toggle
// ===================================


// ===================================
// System Builder
// ===================================
function initSystemBuilder() {
    const canvas = document.getElementById('canvas');
    const components = document.querySelectorAll('.component');
    const clearBtn = document.getElementById('clear-canvas');
    const analysisPanel = document.getElementById('system-analysis');

    if (!canvas) return;

    // Make components draggable
    components.forEach(component => {
        interact(component).draggable({
            listeners: {
                start(event) {
                    event.target.style.opacity = '0.5';
                },
                move(event) {
                    const target = event.target;
                    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                    target.style.transform = `translate(${x}px, ${y}px)`;
                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                },
                end(event) {
                    event.target.style.opacity = '1';
                }
            }
        });
    });

    // Make canvas a drop zone
    interact(canvas).dropzone({
        accept: '.component',
        ondrop: function (event) {
            const component = event.relatedTarget;
            const canvasRect = canvas.getBoundingClientRect();
            const dropX = event.dragEvent.clientX - canvasRect.left - component.offsetWidth / 2;
            const dropY = event.dragEvent.clientY - canvasRect.top - component.offsetHeight / 2;

            // Clone the component and place it on canvas
            const placedComponent = component.cloneNode(true);
            placedComponent.className = 'placed-component';
            placedComponent.style.left = dropX + 'px';
            placedComponent.style.top = dropY + 'px';
            placedComponent.style.transform = 'none';

            // Make placed component draggable
            interact(placedComponent).draggable({
                listeners: {
                    move(event) {
                        const target = event.target;
                        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                        target.style.transform = `translate(${x}px, ${y}px)`;
                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);
                    }
                }
            });

            canvas.appendChild(placedComponent);
            updateSystemAnalysis();
            showToast('Component added to system!', 'success');
        }
    });

    // Clear canvas
    clearBtn.addEventListener('click', () => {
        const placedComponents = canvas.querySelectorAll('.placed-component');
        placedComponents.forEach(comp => comp.remove());
        updateSystemAnalysis();
        showToast('Canvas cleared!', 'info');
    });

    function updateSystemAnalysis() {
        const placedComponents = canvas.querySelectorAll('.placed-component');
        const componentTypes = Array.from(placedComponents).map(comp => comp.dataset.type);

        let analysis = '<h4>System Overview</h4>';
        analysis += `<p>Components: ${componentTypes.length}</p>`;

        const hasServer = componentTypes.includes('server');
        const hasDatabase = componentTypes.includes('database');
        const hasCache = componentTypes.includes('cache');
        const hasLoadBalancer = componentTypes.includes('load-balancer');

        analysis += '<h4>Analysis:</h4><ul>';
        if (hasServer) analysis += '<li>✅ Has servers for processing</li>';
        if (hasDatabase) analysis += '<li>✅ Has data persistence</li>';
        if (hasCache) analysis += '<li>✅ Has caching for performance</li>';
        if (hasLoadBalancer) analysis += '<li>✅ Has load distribution</li>';
        if (!hasServer) analysis += '<li>⚠️ Missing servers</li>';
        if (!hasDatabase) analysis += '<li>⚠️ Missing database</li>';

        analysis += '</ul>';

        analysisPanel.innerHTML = analysis;
    }
}

// ===================================
// Reading Progress Bar
// ===================================
function initProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        progressBar.style.width = scrollPercent + '%';
    });
}

// ===================================
// Back to Top Button
// ===================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

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
        showToast('Back to top! 🚀', 'info');
    });
}

// ===================================
// Scroll Reveal Animations
// ===================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.classList.add('revealed');
            }
        });
    };

    // Initial check
    revealOnScroll();

    // On scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(revealOnScroll, 50);
    });
}









// ===================================
// Page Loader
// ===================================
function hidePageLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        // Hide loader faster to prevent content blocking
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 300);
    }
}

// ===================================
// Initialize Everything on DOM Ready
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Hide page loader
    hidePageLoader();

    // Initialize all animations and interactions
    initAnimations();
    initCardInteractions();
    initSmoothScroll();
    initButtonEffects();
    initProgressBar();
    initBackToTop();
    initScrollReveal();


    // Show welcome toast after animations
    setTimeout(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            showToast('Welcome to System Design Mastery! 🚀', 'success');
            sessionStorage.setItem('hasVisited', 'true');
        }
    }, 1800);

    // Add keyboard navigation for sidebar
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const sidebar = document.getElementById('sidebar');
            if (sidebar && sidebar.classList.contains('open')) {
                toggleSidebar();
            }
        }
    });

    // Close sidebar when clicking on a link on mobile
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const sidebar = document.getElementById('sidebar');
                if (sidebar && sidebar.classList.contains('open')) {
                    setTimeout(() => toggleSidebar(), 200);
                }
            }
        });
    });

    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    });

    // Add smooth scroll animation to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ===================================
// Performance Optimization - Debounce Resize
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});