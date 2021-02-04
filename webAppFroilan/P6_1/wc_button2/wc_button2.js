console.log('button 2 working!');

let myButton2 = document.querySelector('.plagButton');

function plagFunction(){
    let newAuthor = document.querySelector('.newAuthor').value;
    document.querySelector('.author').innerHTML= 'Written by ' + newAuthor;
    document.querySelector('.newAuthor').value = '';
}
myButton2.addEventListener("click", plagFunction);