window.addEventListener("scroll", showNavOnScroll);

function showNavOnScroll() {
  scrollY > 0
    ? navigation.classList.add("scroll")
    : navigation.classList.remove("scroll");
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
}).reveal(`
  #home, 
  #home img, 
  #home .numbers,
  #services,
  #services .health-card,
  #about,
  #about img,
  #contact,
  #contact .contact-photo
`);
