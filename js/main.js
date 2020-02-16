// Scroll to top feature

window.onload = function() {
  const footerY = document.getElementsByTagName("footer")[0];
  const top = document.getElementsByClassName("stick-top")[0];

  // Show and hide "Scroll to Top" button
  document.addEventListener("scroll", e => {
    if (window.pageYOffset + window.innerHeight > window.innerHeight + 200) {
      top.classList.add("show");
    } else {
      top.classList.remove("show");
    }

    if (window.pageYOffset + window.innerHeight > footerY.offsetTop) {
      top.classList.add("sticky");
    } else {
      top.classList.remove("sticky");
    }
  });

  top.addEventListener("click", () => {
    scrollToTop();
  });
};

let scrollAnimation;

function scrollToTop() {
  console.log("animation goes on");
  const position =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 15)));
    // Fire scroll to top
    scrollAnimation = requestAnimationFrame(scrollToTop);
    // Add event listener to mouse scroll
    document.addEventListener("wheel", function wheel() {
      // Cancel scroll to top if user scrolls the mouse wheel during animation
      window.cancelAnimationFrame(scrollAnimation);
      document.removeEventListener("wheel", wheel);
    });
  }
}
