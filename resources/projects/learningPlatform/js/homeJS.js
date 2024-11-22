$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 250,
    dots:true
 
  });
});

// Add touch and mouse wheel event listener
const handleScroll = (event) => {
  // Determine the current scroll position
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const firstSectionHeight = window.innerHeight; // Height of one section

  // Check if deltaY exists to avoid undefined issues
  const deltaY = event.deltaY || 0;

  // If scrolling down and near the first section, snap to section 2
  if (deltaY > 0 && scrollY <= firstSectionHeight) {
    if (event.preventDefault) event.preventDefault(); // Prevent default scroll
    scrollToSection();
  }
  // If scrolling up and within section 2, snap back to section 1
  else if (
    deltaY < 0 &&
    scrollY > firstSectionHeight &&
    scrollY < firstSectionHeight * 2
  ) {
    if (event.preventDefault) event.preventDefault(); // Prevent default scroll
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
  }
  // Allow normal scrolling after passing section 2
};

function scrollToSection() {
  document
    .getElementById("homeSection2")
    .scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" });
}

// // Handle touch event for touchpads
// const handleTouch = (event) => {
//   const touch = event.touches[0];
//   const startY = touch.clientY;

//   const moveHandler = (moveEvent) => {
//     const deltaY = startY - moveEvent.touches[0].clientY;

//     if (deltaY > 0) {
//       // Scroll down
//       handleScroll({ deltaY: 1, preventDefault: () => {} }); // Mock preventDefault
//     } else if (deltaY < 0) {
//       // Scroll up
//       handleScroll({ deltaY: -1, preventDefault: () => {} }); // Mock preventDefault
//     }

//     // Remove touch move listener
//     window.removeEventListener("touchmove", moveHandler);
//   };

//   // Add touch move listener
//   window.addEventListener("touchmove", moveHandler, { passive: false });
// };

// // Add the event listeners with non-passive option
// window.addEventListener("wheel", handleScroll, { passive: false });
// window.addEventListener("touchstart", handleTouch);

