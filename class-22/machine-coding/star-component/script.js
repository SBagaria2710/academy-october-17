const container = document.querySelector(".star-container");
const stars = document.querySelectorAll(".star");
const ratingCount = document.querySelector("#count");

container.addEventListener("click", (event) => {
  const rating = Number(event.target.getAttribute("data-value"));

  if (rating) {
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add("active");
      } else {
        stars[i].classList.remove("active");
      }
    }
    ratingCount.textContent = rating;
  }
});
