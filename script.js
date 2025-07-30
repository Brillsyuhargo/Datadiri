document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.querySelector(".img-main");

  mainImg.addEventListener("click", () => {
    mainImg.classList.toggle("active");
  });
});

