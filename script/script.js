 const formNode = document.querySelector("#userForm");
 const forms = [];

 formNode.addEventListener("submit",(event) =>{
    event.preventDefault();
    const {firstName,lastName,age} = event.target;
    const form = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
    }
    forms.push(form);
    rerender();
    event.target.reset();
 });

 function createForm(firstName,lastName,age){
    const userForm = document.createElement('div');
    const firstNameNode = document.createElement("p");
    const lastNameNode = document.createElement("p");
    const ageNode = document.createElement("p");

    firstNameNode.innerText = firstName;
    lastNameNode.innerText = lastName;
    ageNode.innerText = age;
    userForm.append(firstName,lastName,age);
    return userForm;
 } 

 function rerender(){
    const userForm = document.querySelector("#userList");
    userForm.innerText = '';
    forms.forEach(({firstName,lastName,age}) => userForm.append(createForm(firstName,lastName,age)));

 }
 