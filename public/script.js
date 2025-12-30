const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 1s ease";
});

// Add playful interactions
document.addEventListener("DOMContentLoaded", () => {
  const polaroids = document.querySelectorAll(".polaroid");

  polaroids.forEach(polaroid => {
    polaroid.addEventListener("click", () => {
      polaroid.style.transform += " rotate(10deg) scale(1.1)";
      setTimeout(() => {
        polaroid.style.transform = polaroid.style.transform.replace(" rotate(10deg) scale(1.1)", "");
      }, 500);
    });
  });

  // Random floating stickers
  const stickers = document.querySelectorAll(".sticker");
  stickers.forEach(sticker => {
    setInterval(() => {
      sticker.style.left = Math.random() * 80 + "%";
      sticker.style.top = Math.random() * 80 + "%";
    }, 3000);
  });
});
