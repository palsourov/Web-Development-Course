
document.getElementById('btn').addEventListener('click', function(){

    const text = document.getElementById('inputText');

    const commentContainer= document.getElementById('commentContainer');
    
    const Element = document.createElement('p');

    Element.classList.add('comment');
    
    Element.innerText = text.value;

    commentContainer.appendChild(Element);

    text.value = '';
    
})
