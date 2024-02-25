let arr = ['./1.jpg','./2.jpg','./3.jpg','./4.jpg'];

let counter = 0;


let slider = document.querySelector('#slider');
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')

prev.addEventListener('click',function(){
    if(counter > 0){
        slider.src= arr[--counter];
    }
})

next.addEventListener('click',function(){
    if(counter  <arr.length-1){
        slider.src= arr[++counter];
    }
})