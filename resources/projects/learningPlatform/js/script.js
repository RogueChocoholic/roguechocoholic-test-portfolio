document.addEventListener("keydown", function (e) {
  // Disable F12
  if (e.key === 'F12') {
    e.preventDefault();
  }
  // Disable Ctrl + Shift + I
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
  }
  // Disable Ctrl + Shift + J
  if (e.ctrlKey && e.shiftKey && e.key === "J") {
    e.preventDefault();
  }
  // Disable Ctrl + U
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
  }
  // Disable Ctrl + Shift + C
  if (e.ctrlKey && e.shiftKey && e.key === "C") {
    e.preventDefault();
  }
});

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
