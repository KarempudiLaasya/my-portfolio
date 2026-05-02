const butterfly = document.createElement("div");
butterfly.className = "cursor-butterfly";
butterfly.style.position = "fixed"; 
butterfly.innerHTML = `
  <div class="wing left"></div>
  <div class="wing right"></div>
`;
document.body.appendChild(butterfly);

let mouseX = 0, mouseY = 0;
let bX = 0, bY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Smooth following (lerp)
  bX += (mouseX - bX) * 0.12;
  bY += (mouseY - bY) * 0.12;

  // Offset to center the butterfly on the pointer
  butterfly.style.left = `${bX}px`;
  butterfly.style.top = `${bY}px`;

  // Rotate based on movement direction
  const angle = Math.atan2(mouseY - bY, mouseX - bX) * (180 / Math.PI);
  butterfly.style.transform = `translate(-50%, -50%) rotate(${angle + 90}deg)`;

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Intersection Observer for fade-up
const faders = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.1 });
faders.forEach(el => observer.observe(el));