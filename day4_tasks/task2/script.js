let text= document.querySelector('.text');

text.addEventListener("mouseover",function(){
    text.style.color= "red"
})
text.addEventListener("mouseout",function(){
    text.style.color= "black"
})