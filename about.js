AOS.init({
      once: false, // Ensures animation happens each time the section is scrolled into view
      duration: 1000, // Default duration (can override with data attributes)
    });
    document.addEventListener("DOMContentLoaded", function() {
        const progressBars = document.querySelectorAll('.progress-bar');

        // Create an intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate progress bars when they come into view
                    progressBars.forEach((bar) => {
                        const value = bar.getAttribute('data-value'); // Get the value from data attribute
                        bar.style.width = value + '%'; // Set the width to the value
                    });
                    // Unobserve after animating to avoid repeat animations
                    observer.unobserve(entry.target);
                }
            });
        });

        // Observe each skill section
        document.querySelectorAll('.skill').forEach(skill => {
            observer.observe(skill);
        });
    });

    // Show/Hide Scroll to Top Button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }

  // Scroll to Top Function
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const cursor = document.querySelector('.custom-cursor');
const particleContainer = document.querySelector('.particle-container');

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;

  // Create a new particle
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = `${e.clientX}px`;
  particle.style.top = `${e.clientY}px`;

  // Append particle to the container
  particleContainer.appendChild(particle);

  // Animate the particle
  setTimeout(() => {
    particle.style.transform = "translateY(-30px)";
    particle.style.opacity = "0";
  }, 10);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 500);
});
// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.pathname.split("/").pop(); // Get current page filename

navLinks.forEach(link => {
    // If the link href matches the current page URL, add 'active' class
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
    }
});
