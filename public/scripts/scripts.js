const btn = document.querySelector("button.mobile-menu-button");
const closeBtn = document.querySelector("button.mobile-close-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});