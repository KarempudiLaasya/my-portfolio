const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  root.setAttribute("data-theme", "dark");
  toggleBtn.innerHTML = "🌙";
} else {
  toggleBtn.innerHTML = "🌞";
}

toggleBtn.addEventListener("click", () => {
  if (root.getAttribute("data-theme") === "dark") {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.innerHTML = "🌞";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.innerHTML = "🌙";
  }
});