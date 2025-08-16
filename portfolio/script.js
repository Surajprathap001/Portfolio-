// =======================
// Smooth scroll for nav links
// =======================
document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// =======================
// Theme toggle (light/dark)
// =======================
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark");
  if (themeToggle) themeToggle.textContent = "☀️";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    let theme = document.body.classList.contains("dark") ? "dark" : "light";
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
  });
}


// =======================
// Typing effect with blinking cursor
// =======================
const typingText = document.getElementById("typing-text");
const words = ["Frontend Developer", "WordPress Developer", "Web Designer"];
let i = 0, j = 0, isDeleting = false;

function type() {
  let currentWord = words[i];
  typingText.textContent = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(type, 100); // typing speed
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60); // deleting speed
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      i = (i + 1) % words.length; // move to next word
    }
    setTimeout(type, 800); // pause between words
  }
}
if (typingText) type();


// =======================
// Ripple effect on skill cards
// =======================
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', function (e) {
    const rect = card.getBoundingClientRect();
    const rippleX = e.clientX - rect.left;
    const rippleY = e.clientY - rect.top;

    card.style.setProperty('--ripple-x', `${rippleX}px`);
    card.style.setProperty('--ripple-y', `${rippleY}px`);

    card.classList.remove('ripple'); // reset animation
    void card.offsetWidth; // reflow to restart animation
    card.classList.add('ripple');
  });
});


// =======================
// (Optional) Active nav link highlight while scrolling
// =======================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for header height
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
