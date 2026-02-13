// Quick Affordable Sites - Main JS

// Hamburger Menu Toggle
function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    const form = document.getElementById('previewForm');
    const businessTypeSelect = document.getElementById('businessType');
    const businessTypeOtherGroup = document.getElementById('businessTypeOtherGroup');
    
    // Show/hide "Other" text field for business type
    if (businessTypeSelect) {
        businessTypeSelect.addEventListener('change', function() {
            if (this.value === 'other') {
                businessTypeOtherGroup.style.display = 'block';
                document.getElementById('businessTypeOther').focus();
            } else {
                businessTypeOtherGroup.style.display = 'none';
            }
        });
    }
    
    // Show/hide "Other" text field for features
    const featuresOtherCheckbox = document.getElementById('featuresOtherCheckbox');
    const featuresOtherGroup = document.getElementById('featuresOtherGroup');
    if (featuresOtherCheckbox) {
        featuresOtherCheckbox.addEventListener('change', function() {
            if (this.checked) {
                featuresOtherGroup.style.display = 'block';
                document.getElementById('featuresOther').focus();
            } else {
                featuresOtherGroup.style.display = 'none';
            }
        });
    }
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data for validation
            const formData = new FormData(this);
            const existingSite = formData.get('existingSite');

            // Check for "yes-keep" option - reject them
            if (existingSite === 'yes-keep') {
                alert('We specialize in building new websites from scratch. Our process is optimized for that. If you\'d like to discuss your existing site, please email us at quickaffordablesites@gmail.com and we can explore custom pricing.');
                return;
            }

            // Submit to Formspree
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showSuccessMessage();
                    form.reset();
                    businessTypeOtherGroup.style.display = 'none';
                    featuresOtherGroup.style.display = 'none';
                } else {
                    alert('There was an error submitting your form. Please try again.');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                alert('There was an error submitting your form. Please try again.');
            });
        });
    }
});

function showSuccessMessage() {
    // Create success overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 500px;
        text-align: center;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    `;

    modal.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
        <h2 style="color: #0D4E7F; margin-bottom: 0.5rem;">Thanks for the Details!</h2>
        <p style="color: #6B7280; margin-bottom: 1rem; line-height: 1.6;">
            We've got everything we need. Our team will build you a sample website and email you a preview link within 7 days or less.
        </p>
        <p style="color: #6B7280; margin-bottom: 1.5rem; line-height: 1.6; font-size: 0.95rem;">
            A representative will reach out within 48 hours if we have any questions.
        </p>
        <p style="color: #1F2937; font-weight: 600; margin-bottom: 1rem;">
            Look for an email from <strong>quickaffordablesites@gmail.com</strong>
        </p>
        <button onclick="location.reload()" style="
            background: #FF8C00;
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1rem;
        ">Got It</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}

// Scroll Animation with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe service descriptions
    document.querySelectorAll('.feature').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Observe pricing cards
    document.querySelectorAll('.pricing-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Observe troubleshooting items
    document.querySelectorAll('.troubleshooting-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Observe portfolio items
    document.querySelectorAll('.portfolio-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Observe FAQ items
    document.querySelectorAll('.faq-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Observe steps
    document.querySelectorAll('.step').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Observe comparison cards
    document.querySelectorAll('.comparison-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
});

// Smooth scroll behavior (already set in CSS but fallback here)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
