const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".nav");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    list.classList.toggle("active");
})