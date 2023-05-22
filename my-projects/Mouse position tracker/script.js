const mouseXEl = document.querySelector("#mouseX");
const mouseYEl = document.querySelector("#mouseY");

function updateMouseXY(x, y) {
  mouseXEl.innerText = x;
  mouseYEl.innerText = y;
}

window.addEventListener("mousemove", (event) => {
  updateMouseXY(event.clientX, event.clientY);
});