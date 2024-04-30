document.addEventListener("DOMContentLoaded", function() {
  const scrollUp = document.querySelector(".scroll-up");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  scrollUp.addEventListener("click", scrollToTop);
});
