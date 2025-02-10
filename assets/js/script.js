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

// form

document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get selected values
    let academicLevel = document.getElementById("academic").value;
    let serviceNeeded = document.getElementById("service").value;
    let pagesCount = document.getElementById("pages").value;
    let clientNumber = document.getElementById("clientNumber").value;

    // WhatsApp number (Change to your number)
    let phoneNumber = "923001234567"; // Example: 923001234567 for Pakistan (+92)

    // Message format for WhatsApp
    let message = `Hello, I want to order:\n\n📚 *Academic Level:* ${academicLevel}\n📝 *Service Needed:* ${serviceNeeded}\n📄 *Pages Count:* ${pagesCount}\n📄 *Your Number:* ${clientNumber}\n\nPlease let me know the details.`;

    // Encode message for URL
    let encodedMessage = encodeURIComponent(message);

    // Create WhatsApp link
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappURL, "_blank");
  });
