const words = ["Developer", "Designer" , "Software Tester "];
let wordIndex = 0, letterIndex = 0, isDeleting = false;

const typedTextElement = document.getElementById('typed-text');

// Set the sky blue color
typedTextElement.style.color = "rgb(61, 181, 228) ";

(function type() {
  const currentWord = words[wordIndex];
  typedTextElement.textContent = currentWord.slice(0, letterIndex);
  
  letterIndex += isDeleting ? -1 : 1;

  if (!isDeleting && letterIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 2000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
})();

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('nav');
  // Add the 'scrolled' class if the page is scrolled down 50 pixels
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

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
// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.pathname.split("/").pop(); // Get current page filename

navLinks.forEach(link => {
    // If the link href matches the current page URL, add 'active' class
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
    }
});
