 
//   login section

 document.getElementById("button").addEventListener('click',function(event){
    event.preventDefault();
   
    const accountNumber= document.getElementById('Account').value ;
    const password= document.getElementById('password').value ;
    if(accountNumber.length ===11 ){
        if(password.length===4) {
           window.location.href = './main.html';
        }
        else{
           if(password.length>4){
              alert('Please enter 4 digit PIN');
           }
           else{
              alert('Please fill up 4 digit PIN')
           }
        }
    }
    else{
        if(accountNumber.length>11){
            alert('Please ensure enter 11 digit number');
        }
        else{
            alert('Please fill up 11 digit number');
        }
    }
         
})