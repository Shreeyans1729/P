// Optional: Interactive cube rotation with mouse movement
let cube = document.getElementById("cube");
let x = 0;
let y = 0;

document.addEventListener("mousemove", (e) => {
  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;
  x = (e.clientY - centerY) / 10;
  y = (e.clientX - centerX) / 10;
  
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
