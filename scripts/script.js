window.addEventListener("scroll", onScroll);

function onScroll() {
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
  showNavOnScroll();
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(
    `.header-menu [href*=${sectionId}]`
  );

  menuElement.classList.remove("current-section");

  if (sectionBoundaries) {
    menuElement.classList.add("current-section");
  }
}

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

const scrollLinks = document.querySelectorAll(
  ".header-nav a, .header-menu a, .footer-nav a"
);

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    const element = document.querySelector(id);
    let position = element.offsetTop;

    const mobile = window.innerWidth <= 525;

    if (mobile) {
      switch (element.id) {
        case "home":
          position -= 72;
          break;
        case "services":
          position -= 155;
          break;
        case "about":
          position -= 55;
          break;
        case "contact":
          position -= 85;
          break;
      }
    } else {
      switch (element.id) {
        case "home":
          position -= 72;
          break;
        case "services":
          position -= 275;
          break;
        case "about":
          position -= 265;
          break;
        case "contact":
          position -= 145;
          break;
      }
    }

    window.scrollTo({
      top: position,
    });

    e.preventDefault();
  });
});

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
