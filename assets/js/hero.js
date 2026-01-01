const track = document.getElementById("track");
const slider = document.querySelector(".slider");

function duplicateContent() {
  const originalContent = track.innerHTML;
  while (track.scrollWidth < slider.offsetWidth * 2) {
    track.innerHTML += originalContent;
  }
}

duplicateContent();

let position = 0;
const speed = 0.5; // adjust speed here

function animate() {
  position -= speed;

  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
