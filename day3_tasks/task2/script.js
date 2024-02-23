let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');

red.addEventListener("click",()=>{
    document.body.style.backgroundColor="red";
})
blue.addEventListener("click",()=>{
    document.body.style.backgroundColor="blue";
})
green.addEventListener("click",()=>{
    document.body.style.backgroundColor="green";
})