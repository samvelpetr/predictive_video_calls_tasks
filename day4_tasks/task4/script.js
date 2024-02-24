let button = document.querySelector('#button');
let text= document.querySelector('.count');
let count=0;
button.addEventListener('click',function(){
    text.innerHTML=++count;
})
