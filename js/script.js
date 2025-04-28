function downloadPdf() {
  var link = document.createElement("a");
  link.href = "../resources/cv/Kovidha Subasinghe Resume.pdf";
  link.download;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Smoothly fade-in sections
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});
