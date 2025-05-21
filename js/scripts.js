const box = document.querySelector(".conFall");
const boxBtn = document.getElementById("boxButton");
const circle = document.querySelector(".circle");
const textTask = document.getElementById("textTask");

const animation = circle.animate(
    [{ transform: translateY(0) }, { transform: translateY(280) }],
    {duration: 2000});

// boxBtn.addEventListener("click", function(){
//     circle.classList.add("circleMove");
// })

boxBtn.addEventListener("click", function(){
    animation.play()
})