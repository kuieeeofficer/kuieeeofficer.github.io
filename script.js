const thumbnails = document.querySelectorAll(".thumb");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Open popup
thumbnails.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

// Close popup (button)
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove("active");
  }
});