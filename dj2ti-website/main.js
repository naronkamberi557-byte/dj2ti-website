// Mobile Menu
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach(reveal=>{
let windowHeight = window.innerHeight;
let elementTop = reveal.getBoundingClientRect().top;
if (elementTop < windowHeight - 150) {
reveal.classList.add("active");
}
});
});

// Smooth Scroll
function scrollToSection(id) {
document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
document.getElementById("formMessage").textContent="Kërkesa u dërgua me sukses 🚀";
this.reset();
});