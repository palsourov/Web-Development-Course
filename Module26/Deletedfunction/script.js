
document.getElementById('inputText').addEventListener('keyup',function(event){
    const text = event.target.value;
    const btnDelete = document.getElementById('deleteBtn');
    if(text === 'Delete'){
       btnDelete.removeAttribute('disabled');    
    }
    else{
        btnDelete.setAttribute('disabled',true);
    }
})