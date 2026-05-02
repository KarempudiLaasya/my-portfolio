const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// smooth follow (fix lag)
function animate() {
  ringX += (mouseX - ringX) * 0.18;
  ringY += (mouseY - ringY) * 0.18;

  ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

  requestAnimationFrame(animate);
}
animate();

const links = document.querySelectorAll("a, button");

links.forEach(el => {
  el.addEventListener("mouseenter", () => {
    ring.style.transform += " scale(1.6)";
  });
  el.addEventListener("mouseleave", () => {
    ring.style.transform = `translate(${ringX}px, ${ringY}px) scale(1)`;
  });
});

const faders = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => observer.observe(el));