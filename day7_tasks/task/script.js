const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
    // Additional employee objects...
  ];

let table =document.querySelector('table tbody');
  employees.forEach((e,index)=>{
    let tr= document.createElement('tr');
    table.appendChild(tr);
    Object.keys(e).forEach(el=>{
        if(typeof(e[el])=="object"){
            Object.keys(e[el]).forEach(obj=>{
                if( obj != '0'|| obj != '1' || obj != '2' ){
                    let elementOfTr=document.createElement('td');
                    tr.appendChild(elementOfTr);
                    elementOfTr.innerText=(e[el])[obj];      
                }                
            })
            
        }else{
            let elementOfTr=document.createElement('td');
            tr.appendChild(elementOfTr);
            elementOfTr.innerText=e[el];
        }
    })
})