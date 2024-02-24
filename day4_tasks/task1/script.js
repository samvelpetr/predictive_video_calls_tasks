let button = document.querySelector("#button");
let text= document.querySelector('.text');

let bool =true;

button.onclick=function(){
    bool= !bool;
    button.innerHTML= bool? "hide":"show";
    text.classList.toggle('display')
}