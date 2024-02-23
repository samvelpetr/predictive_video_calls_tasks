let button =document.querySelector("#button");
let div = document.querySelector(".div");
let bool= true;

button.addEventListener("click",()=>{
    bool=!bool;
    div.classList.toggle("display_none");
    if(bool){
        button.innerHTML="Hide"
    }else{
        button.innerHTML="Show"
    }
})