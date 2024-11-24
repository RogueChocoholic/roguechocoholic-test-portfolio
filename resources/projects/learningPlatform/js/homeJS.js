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
