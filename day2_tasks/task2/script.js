let button = document.querySelector("#button");

let par= document.querySelector(".paragraph");

let count = 0;

button.addEventListener("click",()=>{
    count++;
    par.innerHTML=count;
})