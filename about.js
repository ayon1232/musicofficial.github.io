// Smooth scroll to the contact form
const contactBtn = document.querySelector('.btn');
const contactForm = document.querySelector('.contact-form');

contactBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const topOffset = contactForm.getBoundingClientRect().top;
  const scrollOffset = window.pageYOffset + topOffset;

  window.scrollTo({
    top: scrollOffset,
    behavior: 'smooth'
  });
  // Hover effect for social media links
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = '#000';
  });

  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = '#333';
  });
});

// Form submission for support section
const supportForm = document.querySelector('#support-form');

supportForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Send form data to server using AJAX or fetch API
  // Display success or error message to user
});

});
