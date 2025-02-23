document.getElementById('UpdateTitle').addEventListener('click', function(){
    const pageTitle = document.getElementById('title');
    pageTitle.innerText='Form';
})

document.getElementById('Login').addEventListener('click',function(){
    const Text=document.getElementById('UserLogin');
    Text.innerText='User login successfully';
})

document.getElementById('update').addEventListener('click', function(){
    const nameInput = document.getElementById('inputText');
    const Namep = document. getElementById('NOName');
    Namep.innerText=nameInput.value;
})