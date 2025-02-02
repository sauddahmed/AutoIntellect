// Cards Carousel Scroll
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const cards = document.querySelector(".carousel-cards");

leftBtn.addEventListener("click", () => {
  cards.scrollBy({ left: -300, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  cards.scrollBy({ left: 300, behavior: "smooth" });
});
