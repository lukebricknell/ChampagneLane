"use strict";

const phoneMenu = document.querySelector("#phone-menu");
const menuButton = document.querySelector("#menu-btn");

const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", function () {
  if (phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("hidden");
    phoneMenu.classList.add("flex");
  } else if (!phoneMenu.classList.contains("hidden")) {
    phoneMenu.classList.remove("flex");
    phoneMenu.classList.add("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  if (!phoneMenu.classList.contains("hidden") && e.key == "Escape") {
    phoneMenu.classList.remove("flex");
    phoneMenu.classList.add("hidden");
  }
});

const today = new Date();
const year = today.getFullYear();
document.getElementById("year").textContent = year;
