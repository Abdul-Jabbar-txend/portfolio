// Function for opening/closing the mobile menu
function myMenuFunction() {
  var menu = document.getElementById("myNavMenu");
  menu.classList.toggle("responsive");
}

// Dark mode functionality
const body = document.querySelector("body"),
  togleSwitch = document.getElementById("toogle-switch");

togleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Typing effect
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Coder", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 200,
});

// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const activeLink = document.querySelector(
      '.nav-menu a[href="#' + sectionId + '"]'
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (activeLink) {
        activeLink.classList.add("active-link");
      }
    } else {
      if (activeLink) {
        activeLink.classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

document.addEventListener("DOMContentLoaded", scrollActive);
