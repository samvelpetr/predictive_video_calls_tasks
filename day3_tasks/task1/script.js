let inp = document.querySelector('#inp');
let button = document.querySelector('#button');
let par= document.querySelector('.paragraph');


button.addEventListener('click',()=>{
    par.innerHTML= inp.value;
})