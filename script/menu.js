// Few bugs on this
// 1) Arrow can become out of sync
// 2) If Sub-menu not closed during mobile view it will not show properyl on desktop view

// selectors / variables
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const mainItem = document.querySelector(".main-item");
const items = document.querySelectorAll(".item");
const arrow = document.querySelectorAll(".has-submenu");

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

// Mobile Menu
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Toggle mobile menu
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

// Activate Submenu
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

// Close Submenu From Anywhere
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

// Event Listeners
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

// Close arrow on click
document.querySelectorAll(".main-item").forEach(function (el) {
  el.addEventListener("click", function () {
    let icon = this.querySelector("i");

    if (icon.classList.contains("fa-chevron-down")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
});

// Close arrow from anywhere
// Refactored to just contain this in one functiom

document.addEventListener("click", function closeArrow(ec) {
  let isClick = menu.contains(ec.target);

  if (!isClick && menu.querySelector(".submenu")) {
    menu.querySelector("i").classList.remove("fa-chevron-up");
    menu.querySelector("i").classList.add("fa-chevron-down");
    menu.querySelector(".ftwo").classList.remove("fa-chevron-up");
    menu.querySelector(".ftwo").classList.add("fa-chevron-down");
    menu.querySelector(".fthree").classList.remove("fa-chevron-up");
    menu.querySelector(".fthree").classList.add("fa-chevron-down");
  }
});

// When #item-one is clicked change arrow on #item-two
let ignoreClick = document.getElementById("item-one");

document.addEventListener("click", function (e) {
  let isClickInside = ignoreClick.contains(e.target);
  if (isClickInside) {
    menu.querySelector(".ftwo").classList.remove("fa-chevron-up");
    menu.querySelector(".ftwo").classList.add("fa-chevron-down");
  }
});
// When #item-two is clicked change arrow #item-one
let ignoreClickOnMeElement = document.getElementById("item-two");

document.addEventListener("click", function (event) {
  let isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
  if (isClickInsideElement) {
    menu.querySelector("i").classList.remove("fa-chevron-up");
    menu.querySelector("i").classList.add("fa-chevron-down");
  }
});
