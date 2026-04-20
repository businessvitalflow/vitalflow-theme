// VitalFlow Theme Scripts

document.addEventListener('DOMContentLoaded', function() {
  console.log('VitalFlow theme loaded');
  
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Newsletter signup
function handleNewsletterSignup(e) {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  console.log('Newsletter signup:', email);
  alert('Thank you for subscribing!');
  e.target.reset();
}

// Contact form
function handleContactForm(e) {
  e.preventDefault();
  console.log('Contact form submitted');
  alert('Thank you for your message! We\'ll get back to you soon.');
  e.target.reset();
}
