// Select all cards
const cards = document.querySelectorAll('.card');

// Intersection Observer Options
const observerOptions = {
    threshold: 0.2
};

// Create observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Stop observing after first reveal
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe each card
cards.forEach(card => observer.observe(card));
