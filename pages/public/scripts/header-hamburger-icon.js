window.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const headerWrapper = document.querySelector(".header-wrapper");

  hamburgerIcon.addEventListener("click", (event) => {
    if (!event.target) return;

    // toggle class for .header-wrapper
    if (headerWrapper.classList.contains("active")) {
      headerWrapper.classList.remove("active");
      headerWrapper.classList.add("inactive");
    } else {
      headerWrapper.classList.add("active");
      headerWrapper.classList.remove("inactive");
    }

    // toggle class for line
    /**@type {Element} */
    const hamburgerIconCloset = event.target.closest(".hamburger-icon");
    const lines = hamburgerIconCloset.querySelectorAll(".line");
    lines.forEach((line) => {
      line.classList.toggle("active");
      line.classList.toggle("inactive");
    });
  });
});
