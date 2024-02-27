let nameInp= document.querySelector('#name_inp');
let lNameInp=document.querySelector('#lastName_inp');
let nameOut=document.querySelector('.nameOut');
let lastNameOut=document.querySelector('.lastNameOut')
let button = document.querySelector('.button');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nameInp.value != '' && lNameInp.value != ''){
        const info = {
            'name':nameInp.value,
            'lastname':lNameInp.value
        };
        localStorage.setItem("name",JSON.stringify(info))
        const storedInfo = JSON.parse(localStorage.getItem("name"));
        nameOut.innerHTML= storedInfo.name;
        lastNameOut.innerHTML= storedInfo.lastname;
    }
})