let button = document.querySelector('#submit');
let email= document.querySelector('.email_inp')
let nameInp= document.querySelector('.name_inp')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z\s]*$/;

button.addEventListener('click',(e)=>{
    e.preventDefault();
    if(emailRegex.test(email.value) && nameRegex.test(nameInp.value)){
        alert("all is ok")
    }else{
        alert("Write valid info")
    }
})