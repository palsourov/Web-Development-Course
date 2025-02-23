function bgYellow(){
    
    document.body.style.backgroundColor= "yellow";

}
function bgRed(){
    
    document.body.style.backgroundColor= 'red';

}
//  remove color

function bgRemove(){
    
    document.body.style.backgroundColor= '';

}

const bgBlue = document.getElementById('BgBlue');
 bgBlue.onclick = function Blue(){
    document.body.style.backgroundColor='blue';
 }
//   uses addEventListener
 document.getElementById('BgGreen').addEventListener('click',function bgGreen(){
    document.body.style.backgroundColor='green';
 })

