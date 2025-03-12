"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Form start 

function sendToWhatsApp() {
  let academic = document.getElementById("academic").value;
  let service = document.getElementById("service").value; 
  let pages = document.getElementById("Pages").value;
  let deadline = document.getElementById("deadline").value;

  let message = `Hello, I need the following service:%0A
  🔹 Academic Level: ${academic}%0A
  🔹 Service: ${service}%0A
  🔹 Number of Pages: ${pages}%0A
  🔹 Deadline: ${deadline}%0A`;

  let whatsappURL = `https://wa.me/923192443185?text=${message}`; 
  window.open(whatsappURL, "_blank");
}


// Form Ending 

function togglePopup() {
  var popup = document.getElementById("popupOverlay");
  popup.classList.toggle("show");
}

let index = 0;
function showSlide() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${index * 100}%)`;
}
function nextSlide() {
  index = (index + 1) % 3; 
  showSlide();
}

function prevSlide() {
  index = (index - 1 + 3) % 3; 
  showSlide();
}

  // var changeimg = document.getElementById("img-change")
  // changeimg.src = 
  // console.log("image okay",changeimg)