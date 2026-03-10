document.addEventListener("DOMContentLoaded", () =>{
const arrow = document.getElementById("arrow");
  if(!arrow) return;
window.addEventListener("scroll", () =>{
  if(window.scrollY>300) {arrow.classList.add("show");}
  else {arrow.classList.remove("show");}
});
});