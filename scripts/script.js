/**
 * ETHEREAL PORTFOLIO - SCRIPTS
 * 1. Starfield Generation
 * 2. Scroll Reveal Animations
 * 3. Contact Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Generate Floating Stars ---
    const starContainer = document.getElementById('star-container');
    if (starContainer) {
        const starCount = 150;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Randomize dimensions and position
            const size = Math.random() * 3 + 'px';
            star.style.width = size;
            star.style.height = size;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Randomize animation timing
            const duration = Math.random() * 50 + 50 + 's';
            const delay = Math.random() * 50 + 's';
            star.style.animationDuration = duration;
            star.style.animationDelay = delay;
            
            starContainer.appendChild(star);
        }
    }

    // --- 2. Scroll Reveal Effect ---
    // This uses the Intersection Observer for high-performance animations
    const observerOptions = { 
        threshold: 0.1,
        root: null 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once shown to save memory
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

    // --- 3. Handle Contact Form Submission ---
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Log to console for debugging
            console.log("Transmission sent to the void...");
            
            // If you aren't using a backend yet, this prevents the 
            // page from jumping/refreshing instantly.
            // e.preventDefault(); 
        });
    }
});
// Subscribe Form Handling
const subscribeForm = document.getElementById('subscribe-form');
const subMessage = document.getElementById('sub-message');

if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('sub-email').value;
        
        if (email) {
            // Simulate an API call
            console.log("Sending email to the void...", email);
            
            // Visual feedback
            subscribeForm.style.opacity = "0.5";
            subscribeForm.style.pointerEvents = "none";
            subMessage.classList.remove('hidden');
        }
    });
}
