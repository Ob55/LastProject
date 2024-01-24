document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchBox = document.querySelector(".search-box");

  searchIcon.addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
  const modal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");
  const closeModalButton = document.getElementById("closeModal");
  const carImages = document.querySelectorAll(".cars-container .box img");
  carImages.forEach((img, index) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImage.src = this.src;
    });
  });
  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  const blogContainers = document.querySelectorAll(".blog-container .box");
  blogContainers.forEach((blog) => {
    const readMoreBtn = blog.querySelector(".blog-btn");
    const blogContent = blog.querySelector("p");
    readMoreBtn.addEventListener("click", function () {
      blogContent.classList.toggle("active");
      readMoreBtn.textContent = blogContent.classList.contains("active") ? "Read Less" : "Read More";
    });
  });
});