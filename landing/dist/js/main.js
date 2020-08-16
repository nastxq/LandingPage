const header = document.querySelector(".main-header");
const getDropdown = document.querySelector(".dropdown__menu-container");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;

  if (scrollPos > 10) {
    header.classList.add("scrolled");
    getDropdown.classList.add("scrolledDrop");
  } else {
    header.classList.remove("scrolled");
    getDropdown.classList.remove("scrolledDrop");
  }
});
