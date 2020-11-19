document.getElementById('no').addEventListener("mouseover", moveButton);
document.getElementById('yes').addEventListener("click", function(){
    document.getElementById('feedback').innerHTML = "How kind of you";
    //document.querySelector('#buttons').remove();
    document.querySelector(' #container').removeChild(document.querySelector('#buttons'));
    
})

function moveButton(){
    let x = Math.floor((Math.random() * 200) + 1);
    let y = Math.floor((Math.random() * 200) + 1);
    x *= Math.round(Math.random()) ? 1 : -1;
    y *= Math.round(Math.random()) ? 1 : -1;

    let buttonMv = document.getElementById('no');
    buttonMv.style.transform = `translate(${x}px, ${y}px)`;

}

