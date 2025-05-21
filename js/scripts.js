const box = document.querySelector(".conFall");
const boxBtn = document.getElementById("boxButton");
const circle = document.querySelector(".circle");

boxBtn.addEventListener("click", function(){
    circle.classList.add("circleMove");
})