const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("imgModalImg");
const closeBtn = document.getElementById("imgClose");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.style.cursor = "zoom-in";

  img.addEventListener("click", () => {
    modal.classList.add("open");
    modalImg.src = img.src;
    modalImg.alt = img.alt || "";
    document.body.style.overflow = "hidden"; // блокируем скролл
  });
});

function closeModal(){
  modal.classList.remove("open");
  modalImg.src = "";
  document.body.style.overflow = ""; // возвращаем скролл
}

closeBtn.addEventListener("click", closeModal);

// закрытие по клику на фон
modal.addEventListener("click", (e) => {
  if(e.target === modal) closeModal();
});

// закрытие по ESC
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeModal();
});
document.addEventListener("DOMContentLoaded", () =>{
  
const arrow = document.getElementById("arrow");
window.addEventListener("scroll", () =>{
  if(window.scrollY>300) {arrow.classList.add("show");}
  else {arrow.classList.remove("show");}
});
});