let burger= document.querySelector('#burgermenuIcon');
let menu =document.querySelector('#menu');
let closeBurg=document.querySelector('#close');

burger.addEventListener('click',()=>{
    menu.classList.add('position')
});
closeBurg.addEventListener('click',()=>{
    menu.classList.remove('position')
})