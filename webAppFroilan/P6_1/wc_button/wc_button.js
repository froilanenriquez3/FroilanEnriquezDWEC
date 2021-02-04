console.log('button component working!');

let myButton = document.querySelector('.myButton');
console.log(myButton);

function changeColor(){
    console.log('hello there');
    let myTextBox = document.querySelector('.textboxComponent');
    if(myTextBox.style.backgroundColor != 'red'){
        myTextBox.style.backgroundColor = 'red';
    }else{
        myTextBox.style.backgroundColor = 'white';
    }
    
}

myButton.addEventListener('click', changeColor);
