import * as icons from "phosphor-icons";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("nav-open");
});
