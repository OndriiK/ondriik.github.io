// Select all navigation links
var navLinks = document.querySelectorAll('nav ul li:not(:first-child) a');

navLinks.forEach((link) => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action

    // Get the target section
    var target = document.querySelector(this.getAttribute('href'));

    // Scroll to the target section
    target.scrollIntoView({
      behavior: 'smooth' // Smooth scrolling
    });
  });
});
